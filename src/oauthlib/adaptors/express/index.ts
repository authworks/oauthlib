import { Request as OAuth2Request } from '../../oauth2/request';
import { Response as OAuth2Response } from '../../oauth2/response'
import { Request, Response } from 'express';

type OAuthEndpoint = (req: OAuth2Request, res: OAuth2Response) => void;

export function connect(endpoint: OAuthEndpoint) {
  return (req: Request, res: Response) => {
    const oauthReq = new OAuth2Request({
      method: req.method,
      headers: req.headers,
      body: req.body,
      query: req.query,
    });
    const oauthRes = new OAuth2Response();
    endpoint(oauthReq, oauthRes);

    for (const key of Object.keys(oauthRes.headers)) {
      res.header(key, oauthRes.headers[key]);
    }
    res.status(oauthRes.status).send(oauthRes.body);
  };
}

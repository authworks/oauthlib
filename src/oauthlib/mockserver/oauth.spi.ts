import {
  AuthorizationCode,
  Client,
  Model,
  RefreshToken,
  Token,
  User,
} from '../oauth2/spi';
import { Request } from '../oauth2/request';

class ModelImpl implements Model {
  request: Request;

  generateAccessToken(client: Client, user: User, scope: string): Promise<string> {
    return undefined;
  }

  generateAuthorizationCode(client: Client, user: User, scope: string): Promise<string> {
    return undefined;
  }

  generateRefreshToken(client: Client, user: User, scope: string): Promise<string> {
    return undefined;
  }

  getAccessToken(accessToken: string): Promise<Token> {
    return undefined;
  }

  getAuthorizationCode(authorizationCode: string): Promise<AuthorizationCode> {
    return undefined;
  }

  getClient(clientId: string, clientSecret?: string): Promise<Client> {
    return undefined;
  }

  getRefreshToken(refreshToken: string): Promise<RefreshToken> {
    return undefined;
  }

  getUser(username: string, password: string): Promise<User> {
    return undefined;
  }

  getUserFromClient(client: Client): Promise<User> {
    return undefined;
  }

  revokeAuthorizationCode(code: AuthorizationCode): Promise<boolean> {
    return undefined;
  }

  revokeToken(token: RefreshToken | Token): Promise<boolean> {
    return undefined;
  }

  saveAuthorizationCode(code: AuthorizationCode, client: Client, user: User): Promise<AuthorizationCode> {
    return undefined;
  }

  saveToken(token: Token, client: Client, user: User): Promise<Token> {
    return undefined;
  }

  validateScope(user: User, client: Client, scope: string): Promise<string> {
    return undefined;
  }

  verifyScope(token: Token, scope: string): Promise<boolean> {
    return undefined;
  }
}


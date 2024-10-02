export interface UserLoginRequest {
  login: string;
  password: string;
}

export interface UserLoginResponse {
  id: string;
  token: string;
}

export interface User {
  id: string,
  firstName: string,
  lastName: string,
  photoUrl: string,
  email: string
}


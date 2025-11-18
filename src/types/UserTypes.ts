export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}
export interface Users{
  users: User[]
}
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserState {
  isLoading: boolean;
  user: User | null;
  isAdmin: boolean;
  isAuthenticated: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterForm {
  name: string;
  email: string;
  password: string;
  avatar: string
}
export interface UpdateUser{
  email: string,
  name: string,
  id: number
}

export interface FindUserForm {
  id: number;
}

export interface AvailabelUser{
  email: string
}
export interface Token{
  refresh_token: string,
  access_token: string,

}


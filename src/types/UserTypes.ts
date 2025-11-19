export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}
export interface Users {
  users: User[];
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

export interface UpdateUser {
  email: string;
  name: string;
  id: number;
}

export interface LoginForm {
  email: string;
  password: string;
}
export interface RegisterForm {
  name: string;
  email: string;
  password: string;
  avatar: string
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
export type TabType = "login" | "register";

export interface Tab {
  name: TabType;
  text: string;
}
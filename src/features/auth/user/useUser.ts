import { useDispatch } from "@/tools/hooks/useDispatch";
import { useSelector } from "@/tools/hooks/useSelector";

import baseService from "@/init/baseService";

import type {
  AvailabelUser,
  LoginRequest,
  RegisterForm,
  UpdateUser,
} from "@/types/UserTypes";

import { getUser } from "./thunk/getUser";

import { loginUser } from "./thunk/login";
import { userActions } from ".";
import { registerUser } from "./thunk/register";

import { checkUserEmail } from "./thunk/checkUserEmail";
import { remove } from "@/utils/storage";
import { updateUser } from "./thunk/updateUser";

export const useUser = () => {
  const dispatch = useDispatch();
  const authHeader = "Authorization";
  const isAuthenticated = useSelector(({ user }) => user.isAuthenticated);
  const isAdmin = useSelector(({ user }) => user.isAdmin);
  const isLoading = useSelector(({ user }) => user.isLoading);
  const user = useSelector(({ user }) => user.user);
  const logout = () => {
    dispatch(userActions.removeUserDetails());
    remove("accessToken");
    remove("refreshToken");
    delete baseService.defaults.headers.common[authHeader];
  };

  const login = async (loginData: LoginRequest) => {
    await dispatch(loginUser(loginData)).unwrap();
    const user = await dispatch(getUser()).unwrap();
    return user;
  };

  return {
    logout,
    isAuthenticated,
    isAdmin,
    isLoading,
    user,
    loginUser: login,
    getUser: async () => dispatch(getUser()).unwrap(),
    register: async (data: RegisterForm) =>
      dispatch(registerUser(data)).unwrap(),
    availabelUser: async (data: AvailabelUser) =>
      dispatch(checkUserEmail(data)).unwrap(),
    updateUser: async (data: UpdateUser) =>
      dispatch(updateUser(data)).unwrap(),
  };
};

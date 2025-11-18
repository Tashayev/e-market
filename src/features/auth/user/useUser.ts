import { useDispatch } from "@/tools/hooks/useDispatch";
import { useSelector } from "@/tools/hooks/useSelector";

import baseService from "@/features/init/baseService";

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

import { updateUser } from "./thunk/updateUser";
import { useCallback, useMemo } from "react";

export const useUser = () => {
  const dispatch = useDispatch();
  const authHeader = "Authorization";
  const isAuthenticated = useSelector(({ user }) => user.isAuthenticated);
  const isAdmin = useSelector(({ user }) => user.isAdmin);
  const isLoading = useSelector(({ user }) => user.isLoading);
  const user = useSelector(({ user }) => user.user);

  const memoizedUser = useMemo(() => user, [user]);

  const logoutAction = useCallback(() => {
    dispatch(userActions.removeUserDetails());
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    delete baseService.defaults.headers.common[authHeader];
  }, [dispatch]);

  const loginAction = useCallback(
    async (loginData: LoginRequest) => {
      await dispatch(loginUser(loginData)).unwrap();
      const user = await dispatch(getUser()).unwrap();
      return user;
    },
    [dispatch]
  );

  const getUserAction = useCallback(
    async () => dispatch(getUser()).unwrap(),
    [dispatch]
  );

  const registerAction = useCallback(
    async (data: RegisterForm) => dispatch(registerUser(data)).unwrap(),
    [dispatch]
  );

  const availabelUserAction = useCallback(
    async (data: AvailabelUser) => dispatch(checkUserEmail(data)).unwrap(),
    [dispatch]
  );

  const updateUserAction = useCallback(
    async (data: UpdateUser) => dispatch(updateUser(data)).unwrap(),
    [dispatch]
  );

  return useMemo(
    () => ({
      // State
      isAuthenticated,
      isAdmin,
      isLoading,
      user: memoizedUser,

      // Actions
      logout: logoutAction,
      loginUser: loginAction,
      getUser: getUserAction,
      register: registerAction,
      availabelUser: availabelUserAction,
      updateUser: updateUserAction,
    }),
    [
      isAuthenticated,
      isAdmin,
      isLoading,
      memoizedUser,
      logoutAction,
      loginAction,
      getUserAction,
      registerAction,
      availabelUserAction,
      updateUserAction,
    ]
  );
};

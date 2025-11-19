import { useEffect,  useState, type FC } from "react";
import {
  Box,
  FormControl,
  Link,
  Paper,
  Stack,
  Typography,
  type SxProps,
  type Theme,
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

// Components
import { TextInput } from "@/components/inputs/Input";
import MainButton from "@/components/buttons/MainButton";

// Types & Hooks
import type { LoginForm, RegisterForm } from "@/types/AuthTypes";
import { useUser } from "@/features/auth/user/useUser";

// Validation
import { loginSchema, registerSchema } from "./validation/validation";

// Types
import type { TabType } from "@/types/AuthTypes";

// Constants
import { tabs } from "./consts/consts";

// Styles
import { authSx } from "./auth";

export const AuthPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabType>("login");
  
  
  useEffect(() => {
    const tabFromUrl = searchParams.get("tab") as TabType;
    if (tabFromUrl && (tabFromUrl === "login" || tabFromUrl === "register")) {
      setActiveTab(tabFromUrl);
    }
  }, [searchParams]);
  

  const {
    loginUser,
    register: registerUser,
    availabelUser,
    isLoading,
  } = useUser();

  const isLogin = activeTab === "login";

  const methods = useForm<LoginForm | RegisterForm>({
    resolver: yupResolver(isLogin ? loginSchema : registerSchema),
    defaultValues: isLogin
      ? { email: "", password: "" }
      : { name: "", email: "", password: "", avatar: "" },
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = methods;

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setSearchParams({ tab });
    reset();
  };

  const onSubmit = async (data: LoginForm | RegisterForm) => {
    try {
      if (isLogin) {
        const loginData = data as LoginForm;
        const isExist = await availabelUser({ email: loginData.email });

        if (!isExist) {
          toast.error("User does not exist");
          return;
        }

        const user = await loginUser({
          email: loginData.email,
          password: loginData.password,
        });

        if (user.role === "admin") {
          navigate("/admin/categories");
          toast.success("Welcome back, Admin!");
        } else {
          const from = (location.state as any)?.from?.pathname || "/";
          navigate(from, { replace: true });
          toast.success("Login successful!");
        }
      } else {
        const registerData = data as RegisterForm;
        const isAvailable = await availabelUser({ email: registerData.email });

        if (isAvailable) {
          toast.error(`The email ${registerData.email} is already registered`);
          return;
        }

        await registerUser({
          name: registerData.name,
          email: registerData.email,
          password: registerData.password,
          avatar: registerData.avatar,
        });

        const from = (location.state as any)?.from?.pathname || "/";
        navigate(from, { replace: true });
        toast.success("Registration successful! Welcome!");
      }
    } catch (error: any) {
      toast.error(
        `${isLogin ? "Login" : "Registration"} error: ${error.message}`
      );
    }
  };

  return (
    <Box sx={authSx.container}>
      <FormProvider {...methods}>
        <Paper sx={authSx.formContainer}>
          <Typography sx={authSx.title}>
            {isLogin ? "Log In" : "Create Account"}
          </Typography>

          <Box sx={authSx.tabsContainer}>
            {tabs.map((tab, i) => (
              <Box
                key={i}
                sx={[
                  authSx.tab,
                  activeTab === tab.name ? authSx.activeTab : authSx.inactiveTab
                ] as SxProps<Theme>}
                onClick={() => handleTabChange(tab.name)}
              >
                <Typography variant="body1">{tab.text}</Typography>
              </Box>
            ))}
          </Box>

          <FormControl
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={authSx.formControl}
          >
            <Stack spacing={3}>
              {!isLogin && (
                <TextInput type="text" placeholder="Enter your full name" />
              )}

              <TextInput type="email" placeholder="Enter your email" />

              <TextInput
                type="password"
                placeholder={
                  isLogin ? "Enter your password" : "Create a password"
                }
              />

              {!isLogin && (
                <TextInput
                  type="text"
                  placeholder="Enter your avatar image URL"
                />
              )}

              {errors.root && (
                <Box sx={authSx.error}>
                  <Typography variant="body2" color="error.main">
                    {errors.root.message}
                  </Typography>
                </Box>
              )}

              <MainButton type="submit" disabled={isSubmitting || isLoading}>
                {isSubmitting || isLoading
                  ? isLogin
                    ? "Logging in..."
                    : "Creating Account..."
                  : isLogin
                  ? "Log In"
                  : "Create Account"}
              </MainButton>

              <Box sx={authSx.link}>
                <Typography variant="body2">
                  {isLogin
                    ? "Don't have an account? "
                    : "Already have an account? "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleTabChange(isLogin ? "register" : "login");
                    }}
                  >
                    {isLogin ? "Register here" : "Log in here"}
                  </a>
                </Typography>
              </Box>
            </Stack>
          </FormControl>
        </Paper>
      </FormProvider>
      <Box sx={authSx.testInfo}>
        <Typography variant="body2">
          {isLogin
            ? "You can find test users to login "
            : "For testing, you can use any email that doesn't exist in the "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.escuelajs.co/api/v1/users"
          >
            API users list
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

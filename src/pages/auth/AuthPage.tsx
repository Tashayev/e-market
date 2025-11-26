import { useEffect, useState, type FC } from "react";
import {
  Box,
  Typography,
  Paper,
  Link,
  Stack,
  Tabs,
  Tab,  
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

// Components

import MainButton from "@/components/buttons/MainButton";

// Types & Hooks
import type { LoginForm, RegisterForm } from "@/types/AuthTypes";
import { useUser } from "@/features/auth/user/useUser";

// Validation
import { loginSchema, registerSchema } from "./validation/validation";

// Styles
import { authSx } from "./auth";
import { TextInput } from "@/components/inputs/Input";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

export const AuthPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [tabValue, setTabValue] = useState(0);

  const isLogin = tabValue === 0;

  const methods = useForm<LoginForm | RegisterForm>({
    resolver: yupResolver(isLogin ? loginSchema : registerSchema),
    defaultValues: isLogin
      ? { email: "", password: "" }
      : { name: "", email: "", password: "", avatar: "" },
    mode: "onChange",
  });

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
    reset,
  } = methods;

  useEffect(() => {
    const tabFromUrl = searchParams.get("tab");
    if (tabFromUrl === "register") {
      setTabValue(1);
    } else {
      setTabValue(0);
    }
  }, [searchParams]);

  const {
    loginUser,
    register: registerUser,
    availabelUser,
    isLoading,
  } = useUser();
//@ts-ignore
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    setSearchParams({ tab: newValue === 0 ? "login" : "register" });
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

          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="auth tabs"
            variant="fullWidth"
          >
            <Tab label="Log In" sx={{ textTransform: "none" }} />
            <Tab label="Create Account" sx={{ textTransform: "none" }} />
          </Tabs>
          <TabPanel value={tabValue} index={0}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2}>
                <TextInput
                  {...register("email")}
                  type="email"
                  placeholder="Enter your email"                  
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />

                <TextInput
                  {...register("password")}
                  type="password"
                  placeholder="Enter your password"                  
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />

                <MainButton type="submit" disabled={isSubmitting || isLoading}>
                  {isSubmitting || isLoading ? "Logging in..." : "Log In"}
                </MainButton>

                <Box sx={authSx.link}>
                  <Typography variant="body2">
                    Don't have an account?{" "}
                    <Link
                      component="button"
                      type="button"
                      onClick={() => setTabValue(1)}
                    >
                      Register here
                    </Link>
                  </Typography>
                </Box>
              </Stack>
            </form>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2}>
                <TextInput
                  {...register("name")}
                  type="text"
                  placeholder="Enter your full name"
                  
                />

                <TextInput
                  {...register("email")}
                  type="email"
                  placeholder="Enter your email"
                  
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />

                <TextInput
                  {...register("password")}
                  type="password"
                  placeholder="Create a password"
                 
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />

                <TextInput
                  {...register("avatar")}
                  type="text"
                  placeholder="Enter your avatar image URL"
                  
                />

                <MainButton type="submit" disabled={isSubmitting || isLoading}>
                  {isSubmitting || isLoading
                    ? "Creating Account..."
                    : "Create Account"}
                </MainButton>

                <Box sx={authSx.link}>
                  <Typography variant="body2">
                    Already have an account?{" "}
                    <Link
                      component="button"
                      type="button"
                      onClick={() => setTabValue(0)}
                    >
                      Log in here
                    </Link>
                  </Typography>
                </Box>
              </Stack>
            </form>
          </TabPanel>
        </Paper>
      </FormProvider>

      <Box sx={authSx.textInfo}>
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

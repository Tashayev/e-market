import * as yup from "yup";
import { useCallback, useMemo } from "react";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

import { useUser } from "@/features/auth/user/useUser";
import { Button } from "@mui/material";
import { TextField } from "@/components/text-field/TextField";

type LoginForm = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
});

export const LoginPage = () => {
  const { loginUser, availabelUser, isLoading } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const methods = useForm<LoginForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const from = useMemo(
    () => (location.state as any)?.from?.pathname || "/",
    [location.state]
  );

  const onSubmit: SubmitHandler<LoginForm> = useCallback(
    async (data) => {
      try {
        const isExist = await availabelUser({ email: data.email });

        if (!isExist) {
          toast.error("User does not exist");
          return;
        }

        const user = await loginUser({
          email: data.email,
          password: data.password,
        });

        if (user.role === "admin") {
          navigate("/admin/categories");
          toast.success("Welcome back, Admin!");
        } else {
          navigate(from, { replace: true });
          toast.success("Login successful!");
        }
      } catch (error: any) {
        toast.error("Login error: " + error);
      }
    },
    [availabelUser, loginUser, navigate, from]
  );

  return (
    <div className="flex justify-center flex-col items-center gap-6 p-4 min-h-screen bg-gray-50">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
            Log in
          </h2>
          <TextField
            name="email"
            label="Email"
            type="email"
           
          />

          <TextField
            name="password"
            label="Password"
            type="password"
            
          />

          {methods.formState.errors.root && (
            <div className="mb-4 p-3 bg-error-50 border border-error-200 rounded-lg">
              <p className="text-error-600 text-sm">
                {methods.formState.errors.root.message}
              </p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting || isLoading}
            className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>

          <div className="text-center">
            <NavLink
              to="/auth/registration"
              className="text-primary-500 hover:text-primary-600 transition-colors duration-200 text-sm"
            >
              Don't have an account? Register here
            </NavLink>
          </div>
        </form>
      </FormProvider>

      <div className="text-center text-gray-600 max-w-md">
        <p className="mb-2 text-sm">
          You can find test users to login{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.escuelajs.co/api/v1/users"
            className="text-primary-500 hover:text-primary-600 underline transition-colors duration-200"
          >
            here
          </a>
        </p>
      </div>
    </div>
  );
};

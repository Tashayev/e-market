import { useCallback, useMemo } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { useUser } from "@/features/auth/user/useUser";
import { toast } from "react-toastify";
import * as yup from "yup";
import type { RegisterForm } from "@/types/UserTypes";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { TextField } from "@/components/text-field/TextField";


const schema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[a-zA-Z\s]*$/, "Name can only contain alphabets and spaces")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
  avatar: yup
    .string()
    .url('Invalid URL format')   
    .required("Avatar URL is required"),
});

export default function RegisterPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { register: registerUser, availabelUser, isLoading } = useUser();

  const from = useMemo(() => 
    (location.state as any)?.from?.pathname || "/",
    [location.state]
  );

  const methods = useForm<RegisterForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      avatar: "",
    },
  });

  const { handleSubmit, formState: { isSubmitting } } = methods;

  const onSubmit: SubmitHandler<RegisterForm> = useCallback(
    async (data) => {
      try {
        
        const isAvailable = await availabelUser({ email: data.email });
        
        if (isAvailable) {
          toast.error(`The email ${data.email} is already registered`);
          return;
        }
      
        await registerUser({
          name: data.name,
          email: data.email,
          password: data.password,
          avatar: data.avatar,
        });
        
        navigate(from, { replace: true });
        toast.success("Registration successful! Welcome!");
      } catch (error) {
        
        toast.error("Registration error: "+ error);
      }
    },
    [from, availabelUser, registerUser, navigate]
  );

  return (
    <div className="flex justify-center flex-col items-center gap-6 p-4 min-h-screen bg-gray-50">
      <FormProvider {...methods}>
        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
            Create Account
          </h2>
          
          <TextField
            name="name"
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
          />

          <TextField
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <TextField
            name="password"
            label="Password"
            type="password"
            placeholder="Create a password"
          />

          <TextField
            name="avatar"
            label="Avatar URL"
            type="text"
            placeholder="Enter your avatar image URL"
          />

          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting || isLoading}
            fullWidth
            sx={{
              backgroundColor: '#3563E9',
              '&:hover': {
                backgroundColor: '#2848CB',
              },
              '&:disabled': {
                backgroundColor: '#AEC8FC',
              },
              py: 1.5,
              mb: 2
            }}
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </Button>

          <div className="text-center">
            <NavLink 
              to="/auth/login" 
              className="text-primary-500 hover:text-primary-600 transition-colors duration-200 text-sm"
            >
              Already have an account? Log in here
            </NavLink>
          </div>
        </form>
      </FormProvider>

      <div className="text-center text-gray-600 max-w-md">
        <p className="text-sm">
          For testing, you can use any email that doesn't exist in the{" "}
          <a 
            target="_blank" 
            rel="noopener noreferrer"
            href="https://api.escuelajs.co/api/v1/users"
            className="text-primary-500 hover:text-primary-600 underline transition-colors duration-200"
          >
            API users list
          </a>
        </p>
      </div>
    </div>
  );
}
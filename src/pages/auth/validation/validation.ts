import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
});

export const registerSchema = yup.object({
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
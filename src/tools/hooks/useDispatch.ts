import { useDispatch as useAppDispatch } from "react-redux";
import type { AppDispatch } from "@/store/store";

export const useDispatch = () => useAppDispatch<AppDispatch>();

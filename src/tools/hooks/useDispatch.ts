import { useDispatch as useAppDispatch } from "react-redux";
import type { AppDispatch } from "@/features/store/store";

export const useDispatch = () => useAppDispatch<AppDispatch>();

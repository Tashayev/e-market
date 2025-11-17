import {  useSelector as useAppSelector, type TypedUseSelectorHook } from "react-redux";
import type { RootState } from "@/features/store/store";

export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

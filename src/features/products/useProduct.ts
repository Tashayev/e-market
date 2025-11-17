import { useDispatch } from "@/tools/hooks/useDispatch";
import { getCategories } from "./thunk/getCategories";
import { useSelector } from "@/tools/hooks/useSelector";
import { getProductByCategory } from "./thunk/getProductByCategory";
import { getProductById } from "./thunk/getProductById";
import { createCategory } from "./thunk/createCategory";
import type { CreateCategory,  CreateProduct,  UpdateCategory, UpdateProduct } from "@/types/Products";
import { updateCategory } from "./thunk/updateCategory";
import { deleteCategory } from "./thunk/deleteCategory";
import  { deleteProduct } from "./thunk/deleteProduct";
import { updateProduct } from "./thunk/updateProduct";
import { createProduct } from "./thunk/createProduct";
import { getCategoryById } from "./thunk/getCategoryById";

export const useProducts = () => {
  const dispatch = useDispatch();

  return {
    categories: useSelector((state) => state.product.categories),
    fetchCategories: async () => dispatch(getCategories()).unwrap(),
    products: useSelector((state) => state.product.products),
    fetchProductsByCategory: async (id: number) =>
      dispatch(getProductByCategory(id)).unwrap(),
    fetchProductById: async (id: number) =>
      dispatch(getProductById(id)).unwrap(),
    fetchCategoryById: async (id: number) =>
      dispatch(getCategoryById(id)).unwrap(),
    categoryById: useSelector((state) => state.product.productById),
    productById: useSelector((state) => state.product.productById),
    createCategory: async (data: CreateCategory) =>
      dispatch(createCategory(data)).unwrap(),
    updateCategory: async (data: UpdateCategory) => 
      dispatch(updateCategory(data)).unwrap(),
    deleteCategory: async(id: number) => 
      dispatch(deleteCategory(id)).unwrap(),
    deleteProduct: async(id: number) => 
      dispatch(deleteProduct(id)).unwrap(),
    updateProduct: async (data: UpdateProduct) => 
      dispatch(updateProduct(data)).unwrap(),
    createProduct: async (data: CreateProduct) =>
      dispatch(createProduct(data)).unwrap(),
  };
};

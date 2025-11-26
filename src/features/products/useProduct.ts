//react
import { useCallback, useMemo } from "react";
//types
import type {
  CreateCategory,
  CreateProduct,
  Product,
  UpdateCategory,
  UpdateProduct,
} from "@/types/Products";
//hooks
import { useDispatch } from "@/tools/hooks/useDispatch";
import { useSelector } from "@/tools/hooks/useSelector";
//thunks
import { getCategories } from "./thunk/getCategories";
import { getProductByCategory } from "./thunk/getProductByCategory";
import { getProductById } from "./thunk/getProductById";
import { createCategory } from "./thunk/createCategory";
import { updateCategory } from "./thunk/updateCategory";
import { deleteCategory } from "./thunk/deleteCategory";
import { deleteProduct } from "./thunk/deleteProduct";
import { updateProduct } from "./thunk/updateProduct";
import { createProduct } from "./thunk/createProduct";
import { getCategoryById } from "./thunk/getCategoryById";
import { getProducts } from "./thunk/getProducts";
import { productActions } from ".";

export const useProducts = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.product.categories);
  const products = useSelector((state) => state.product.products);
  const productById = useSelector((state) => {
    const prod = state.product.productById;   
    return prod;
  });
  const isLoading = useSelector((state) => state.product.isLoading);

  const memoizedCategories = useMemo(() => categories, [categories]);
  const memoizedProducts = useMemo(() => products, [products]);
  const memoizedProductById = useMemo(() => productById, [productById]);

  const fetchCategories = useCallback(
    async () => dispatch(getCategories()).unwrap(),
    [dispatch]
  );

  const fetchAllProducts = useCallback(
    async () => dispatch(getProducts()).unwrap(),
    [dispatch]
  );

  const fetchProductsByCategory = useCallback(
    async (id: number) => dispatch(getProductByCategory(id)).unwrap(),
    [dispatch]
  );

  const fetchProductById = useCallback(
    async (id: number) => {
      
      
      return dispatch(getProductById(id)).unwrap();
    },
    [dispatch]
  );

  const fetchCategoryById = useCallback(
    async (id: number) => {
      const existingCategory = memoizedCategories.find(
        (category) => category.id === id
      );
      if (existingCategory) {
        return Promise.resolve(existingCategory);
      }
      return dispatch(getCategoryById(id)).unwrap();
    },
    [dispatch, memoizedCategories]
  );

  const createCategoryAction = useCallback(
    async (data: CreateCategory) => dispatch(createCategory(data)).unwrap(),
    [dispatch]
  );

  const updateCategoryAction = useCallback(
    async (data: UpdateCategory) => dispatch(updateCategory(data)).unwrap(),
    [dispatch]
  );

  const deleteCategoryAction = useCallback(
    async (id: number) => dispatch(deleteCategory(id)).unwrap(),
    [dispatch]
  );

  const deleteProductAction = useCallback(
    async (id: number) => dispatch(deleteProduct(id)).unwrap(),
    [dispatch]
  );

  const updateProductAction = useCallback(
    async (data: UpdateProduct) => dispatch(updateProduct(data)).unwrap(),
    [dispatch]
  );

  const createProductAction = useCallback(
    async (data: CreateProduct) => dispatch(createProduct(data)).unwrap(),
    [dispatch]
  );
  const addProductIfMissing = (data:Product) => {
    dispatch(productActions.addProductIfMissing(data));
  };

  return useMemo(
    () => ({
      // State
      categories: memoizedCategories,
      products: memoizedProducts,
      productById: memoizedProductById,
      isLoading,

      // Actions
      fetchCategories,
      fetchAllProducts,
      fetchProductsByCategory,
      fetchProductById,
      fetchCategoryById,
      addProductIfMissing,
      createCategory: createCategoryAction,
      updateCategory: updateCategoryAction,
      deleteCategory: deleteCategoryAction,
      deleteProduct: deleteProductAction,
      updateProduct: updateProductAction,
      createProduct: createProductAction,
    }),
    [
      // State dependencies
      memoizedCategories,
      memoizedProducts,
      memoizedProductById,
      isLoading,

      // Action dependencies
      fetchCategories,
      fetchAllProducts,
      fetchProductsByCategory,
      fetchProductById,
      fetchCategoryById,
      createCategoryAction,
      updateCategoryAction,
      deleteCategoryAction,
      deleteProductAction,
      updateProductAction,
      createProductAction,
    ]
  );
};

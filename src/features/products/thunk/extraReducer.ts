//redux
import { type ActionReducerMapBuilder, isAnyOf } from "@reduxjs/toolkit";
//types
import type { ProductState } from "@/types/Products";
//thunks
import { createCategory } from "./createCategory";
import { updateCategory } from "./updateCategory";
import { getProductByCategory } from "./getProductByCategory";
import { getCategories } from "./getCategories";
import { getCategoryById } from "./getCategoryById";
import { getProducts } from "./getProducts";
import { getProductById } from "./getProductById";
import { deleteCategory } from "./deleteCategory";
import { deleteProduct } from "./deleteProduct";
import { updateProduct } from "./updateProduct";
import { createProduct } from "./createProduct";
import { searchProductsByTitle } from "./searchProductByTitle";

export const extraReducers = (
  builder: ActionReducerMapBuilder<ProductState>
) => {
  builder.addMatcher(
    isAnyOf(
      getCategories.pending,
      getProducts.pending,
      getProductByCategory.pending,
      getProductById.pending,
      createCategory.pending,
      updateCategory.pending,
      deleteCategory.pending,
      deleteProduct.pending,
      updateProduct.pending,
      createProduct.pending,
      searchProductsByTitle.pending
    ),
    (state) => {
      state.isLoading = true;
    }
  );

  builder.addMatcher(
    isAnyOf(
      getCategories.fulfilled,
      getCategories.rejected,
      getProducts.fulfilled,
      getProducts.rejected,
      getProductByCategory.fulfilled,
      getProductByCategory.rejected,
      getProductById.fulfilled,
      getProductById.rejected,
      createCategory.fulfilled,
      createCategory.rejected,
      updateCategory.fulfilled,
      updateCategory.rejected,
      deleteCategory.fulfilled,
      deleteCategory.rejected,
      deleteProduct.fulfilled,
      deleteProduct.rejected,
      updateProduct.fulfilled,
      updateProduct.rejected,
      createProduct.fulfilled,
      createProduct.rejected,
      searchProductsByTitle.fulfilled,
      searchProductsByTitle.rejected
    ),
    (state) => {
      state.isLoading = false;
    }
  );

  builder.addMatcher(isAnyOf(getCategories.fulfilled), (state, action) => {
    state.categories = action.payload;
  });

  builder.addMatcher(isAnyOf(getCategoryById.fulfilled), (state, action) => {
    state.categories = action.payload;
  });

  builder.addMatcher(
    isAnyOf(getProducts.fulfilled, getProductByCategory.fulfilled),
    (state, action) => {
      state.products = action.payload;
    }
  );

  builder.addMatcher(isAnyOf(getProductById.fulfilled), (state, action) => {
    state.productById = action.payload;
  });

  builder.addMatcher(isAnyOf(createCategory.fulfilled), (state, action) => {
    state.categories = [...state.categories, action.payload];
  });

  builder.addMatcher(isAnyOf(updateCategory.fulfilled), (state, action) => {
    const updatedCategory = action.payload;
    state.categories = state.categories.map((category) =>
      category.id === updatedCategory.id ? updatedCategory : category
    );
  });

  builder.addMatcher(isAnyOf(deleteCategory.fulfilled), (state, action) => {
    const id = action.payload;
    state.categories = state.categories.filter((c) => c.id !== id);
  });

  builder.addMatcher(isAnyOf(deleteProduct.fulfilled), (state, action) => {
    const id = action.payload;
    state.products = state.products.filter((p) => p.id !== id);
  });

  builder.addMatcher(isAnyOf(updateProduct.fulfilled), (state, action) => {
    const updatedProduct = action.payload;
    state.products = state.products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
  });
  builder.addMatcher(
    isAnyOf(searchProductsByTitle.fulfilled),
    (state, action) => {
      state.searchResults = action.payload;
    }
  );

  builder.addMatcher(isAnyOf(createProduct.fulfilled), (state, action) => {
    state.products = [...state.products, action.payload];
  });
};

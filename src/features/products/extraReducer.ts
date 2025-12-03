//redux
import { type ActionReducerMapBuilder, isAnyOf } from "@reduxjs/toolkit";
//types
import type { ProductState } from "@/types/Products";
//thunks
import { createCategory } from "./thunk/createCategory";
import { updateCategory } from "./thunk/updateCategory";
import { getProductByCategory } from "./thunk/getProductByCategory";
import { getCategories } from "./thunk/getCategories";
import { getCategoryById } from "./thunk/getCategoryById";
import { getProducts } from "./thunk/getProducts";
import { getProductById } from "./thunk/getProductById";
import { deleteCategory } from "./thunk/deleteCategory";
import { deleteProduct } from "./thunk/deleteProduct";
import { updateProduct } from "./thunk/updateProduct";
import { createProduct } from "./thunk/createProduct";
import { searchProductsByTitle } from "./thunk/searchProductByTitle";

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

  builder.addMatcher(isAnyOf(createProduct.fulfilled), (state, action) => {
    state.products = [...state.products, action.payload];
  });

  builder.addMatcher(
    isAnyOf(searchProductsByTitle.fulfilled),
    (state, action) => {
      if (action.payload.shouldClear) {
        state.searchResults = [];
      } else {
        state.searchResults = action.payload;
      }
    }
  );

  builder.addMatcher(
    isAnyOf(searchProductsByTitle.rejected),
    (state, action) => {
      state.error = action.error.message || "Failed to search products";
      state.searchResults = [];
      state.isLoading = false;
    }
  );

  builder.addMatcher(isAnyOf(searchProductsByTitle.pending), (state) => {
    state.error = null;
  });
  builder.addMatcher(isAnyOf(getProducts.fulfilled), (state, action) => {
    state.products = action.payload;
    state.isLoading = false;
    state.loaded = true;
  });
};

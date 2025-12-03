//redux
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

//reducers
import userReducer from "@/features/auth/user";
import productReducer from "@/features/products";
import cartReducer from "@/features/cart";
import favoritesReducer from "@/features/favorites";

//types
import type { FavoritesState } from "@/types/FavoritesTypes";
import type { CartState } from "@/types/CartTyps";

const favoritesPersistConfig = {
  key: "favorites",
  storage,
};

const persistedFavoritesReducer = persistReducer<FavoritesState>(
  favoritesPersistConfig,
  favoritesReducer
);

const cartPersistConfig = {
  key: "cart",
  storage,
};
const persistedCartReducer = persistReducer<CartState>(
  cartPersistConfig,
  cartReducer
);

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: persistedCartReducer,
    product: productReducer,
    favorites: persistedFavoritesReducer,
  },
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

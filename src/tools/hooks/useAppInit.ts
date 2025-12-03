//react
import { useEffect, useState } from "react";
//toast
import { toast } from "react-toastify";
//hooks
import { useDispatch } from "@/tools/hooks/useDispatch";
import { useSelector } from "@/tools/hooks/useSelector";
import { useUser } from "@/features/auth/user/useUser";
//thunks
import { getProducts } from "@/features/products/thunk/getProducts";

export const useAppInit = () => {
  const dispatch = useDispatch();
  const { getUser } = useUser();

  const productsLoaded = useSelector((s) => s.product.loaded);

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const init = async () => {
      const token = localStorage.getItem("accessToken");

      if (token) {
        try {
          await getUser();
        } catch (e) {
          toast.error("Failed to load user");
        }
      }

      if (!productsLoaded) {
        try {
          await dispatch(getProducts()).unwrap();
        } catch (e) {
          toast.error("Failed to load products");
        }
      }

      setInitialized(true);
    };

    init();
  }, [dispatch, getUser, productsLoaded]);

  return initialized;
};

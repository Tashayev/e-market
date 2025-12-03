import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export function useResponsivePagination<T>(items: T[]) {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const location = useLocation();

  const calculateItemsPerPage = () => {
    const height = window.innerHeight;
    const width = window.innerWidth;
    if (location.pathname === "/admin/products") {
      if (height < 600) return 6;
      if (height < 800) return 8;
      if (height < 1000) return 12;
      return 15;
    }
    if (width < 960) return 2;
    if (width < 1280) return 4;
    if (width < 1600) return 6;
    return 8;
  };

  useEffect(() => {
    const updateItems = () => setItemsPerPage(calculateItemsPerPage());
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = items.slice(startIndex, endIndex);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  return {
    page,
    setPage,
    itemsPerPage,
    totalPages,
    paginatedItems,
  };
}

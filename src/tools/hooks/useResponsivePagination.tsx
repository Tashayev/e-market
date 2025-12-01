import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export function useResponsivePagination<T>(items: T[]) {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const location = useLocation();

  
  
  const calculateItemsPerPage = () => {
    if(location.pathname ==='/') return 8 
    const height = window.innerHeight;
    if (height < 600) return 6;     
    if (height < 800) return 8; 
    if (height < 1000) return 12; 
    return 15; 
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

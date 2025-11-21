import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay = 500): T {
  const [debounce, setDebounce] = useState<T>(value);

  useEffect(() => {
    const handle = setTimeout(() => {
      setDebounce(value);
    }, delay);
    return () => {
      clearTimeout(handle);
    };
  }, [value, delay]);
  return debounce;
}

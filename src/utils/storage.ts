import { toast } from "react-toastify";


export const load = (key: string) => 
  localStorage.getItem(key);






export function save<T>(key: string, value: T): boolean {
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
    return true;
  } catch {
    return false;
  }
}

export function remove(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    
    toast.error(`Error: ${err}`)
  }
}
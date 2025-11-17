
// export function load<T>(key: string, defaultValue: T): T {
//   try {
//     const item = localStorage.getItem(key);
//     return item ? JSON.parse(item) : defaultValue;
//   } catch (error) {
//     console.error(`Error loading ${key} from localStorage:`, error);
//     return defaultValue;
//   }
// }


// export function save<T>(key: string, value: T): void {
//   try {
//     const serialized = JSON.stringify(value);
//     localStorage.setItem(key, serialized);
//   } catch (error) {
//     console.error(`Error saving ${key} to localStorage:`, error);
//     throw error;
//   }
// }


// export function remove(key: string): void {
//   try {
//     localStorage.removeItem(key);
//   } catch (error) {
//     console.error(`Error removing ${key} from localStorage:`, error);
//   }
// }
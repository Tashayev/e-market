export interface Categories{
  id: number,
  name: string,
  slug: string,
  image: string,
  creationAt: string,
  updatedAt: string
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string[];
}

export interface ProductState {
  isLoading: boolean;
  error: string | null;
  categories: Categories[];
  products: Product[];
  productById: Product | null;
  searchResults: Product[];
}


export interface SetLoadingPayload {
  isLoading: boolean;
}
export interface ProductTypeCard{
  title: string;
  price: number;
  id: string
}

export interface CreateCategory{
  name: string,
  image: string,
  
}
export interface UpdateCategory{
  name: string,
  image: string,
  id: number | undefined
  
}

export interface UpdateProduct {
  id: number | undefined;
  title: string;
  price: number;
  
}

export interface CreateProduct{
  title: string,
  price: number,
  description: string,
  categoryId: number,
  images?: string[]
}
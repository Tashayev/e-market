export interface Categories{
  id: number,
  name: string,
  slug: string,
  image: string,
  creationAt: string,
  updatedAt: string
}

export interface Product{ 
    id: string,
    title: string,
    slug: string,
    price: number,
    description: string
    category: Categories,
    images: string[],
    creationAt: string,
    updatedAt: string  
}


export interface ProductState {
  isLoading: boolean;
  products: Product[]; 
  categories: Categories[]; 
  productById: Product | null
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
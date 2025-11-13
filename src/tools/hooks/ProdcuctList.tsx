import Box from '@mui/material/Box';
import type { TreeViewBaseItem } from '@mui/x-tree-view/models';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';

interface Child {
  id: string;
  label: string;
  categoryId?: string;
}

interface Category {
  id: string;
  label: string;
}

interface ProductListType {
  categories: Category[];
  products: Child[];
}


function buildProductTree({ categories, products }: ProductListType): TreeViewBaseItem[] {
  return categories.map((category) => ({
    id: category.id,
    label: category.label,
    children: products
      .filter((p) => p.categoryId === category.id)
      .map((p) => ({ id: p.id, label: p.label })),
  }));
}

export default function ProductList({categories, products}:ProductListType) {
  

  
  const MUI_X_PRODUCTS = buildProductTree({ categories, products });

  return (
    <Box sx={{ minHeight: 352, minWidth: 250 }}>
      <RichTreeView items={MUI_X_PRODUCTS} />
    </Box>
  );
}

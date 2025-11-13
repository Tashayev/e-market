import CreateProductModal from "@/components/modals/product-modals/CreateProductModal";
import EntityPopover from "@/components/popover/EntityPopover";
import { useProducts } from "@/features/products/useProduct";
import { useResponsivePagination } from "@/tools/hooks/useResponsivePagination";
import type { Product } from "@/types/Products";
import { Button, Box, Typography, Pagination } from "@mui/material";

import { useEffect, useState } from "react";

export default function AdminProductsPage() {
  const { categories, fetchCategories, fetchProductsByCategory, products } =
    useProducts();
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryClick = async (
    
    categoryId: number
  ) => {
    setSelectedCategoryId(categoryId);
    await fetchProductsByCategory(categoryId);
  };
  const handleProductClick = (event: React.MouseEvent<HTMLButtonElement>, product: Product) => {
    setAnchorEl(event.currentTarget);
    setSelectedProduct(product);
  };

  const {
    page,
    setPage,
    totalPages,
    paginatedItems: productsToShow,
  } = useResponsivePagination(products);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Product management 
      </Typography>

      <Typography variant="h6" gutterBottom>
        Choose category:
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={
              selectedCategoryId === category.id ? "contained" : "outlined"
            }
            onClick={() => handleCategoryClick( category.id)}
          >
            {category.name}
          </Button>
        ))}
      </Box>

      {selectedCategoryId && (
        <Box>
          <Typography variant="h6" gutterBottom>
            Products in choosen category:
          </Typography>

          {products.length === 0 ? (
            <Typography color="textSecondary">
              No products in this category
            </Typography>
          ) : (
            <Box>
              {productsToShow.map((product) => (
                <Box key={product.id}>
                  <Button onClick={(e)=>handleProductClick(e, product)}>{product.title}</Button>
                </Box>
              ))}
              <EntityPopover
                popoverId={id}
                open={open}
                handleClose={handleClose}
                anchorEl={anchorEl}
                name={selectedProduct?.title}
                productId={selectedProduct?.id}
                entityType="product"
              />
              <Pagination
                count={totalPages}
                page={page}
                onChange={(_, val) => setPage(val)}
                color="primary"
                shape="rounded"
              />
            </Box>
          )}
        </Box>
      )}
      <CreateProductModal/>
    </div>
  );
}

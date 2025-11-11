import CategoryCreateModal from "@/components/modals/category-modal/CategoryCreateModal";
import CategoryUpdateModal from "@/components/modals/category-modal/CategoryUpdateModal";
import CategoryPopover from "@/components/popover/CategoryPopover";
import { useProducts } from "@/features/products/useProduct";
import type { Categories } from "@/types/Products";
import { Button, Box, Divider } from "@mui/material";

import { useEffect, useState } from "react";

export default function AdminCategoriesPage() {
  const { categories, fetchCategories } = useProducts();
  const [isListOpen, setIsListOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModal] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<Categories | null>(
    null
  );
  useEffect(() => {
    fetchCategories();
  }, []);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    category: Categories
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedCategory(category);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button onClick={() => setIsListOpen(!isListOpen)}>
        Show categories
      </Button>

      {isListOpen && <Divider />}
      {isListOpen &&
        categories.map((c) => (
          <Box key={c.id}>
            <Button aria-describedby={id} onClick={(e) => handleClick(e, c)}>
              {c.name}
            </Button>
          </Box>
        ))}
      <CategoryPopover
        popoverId={id}
        open={open}
        handleClose={handleClose}
        anchorEl={anchorEl}
        name={selectedCategory?.name}
        id={selectedCategory?.id}
      />
      {isListOpen && <Divider />}
      <CategoryCreateModal />
      
    </div>
  );
}

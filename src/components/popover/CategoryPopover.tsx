import { Button, Box } from "@mui/material";
import Popover from "@mui/material/Popover";
import CategoryUpdateModal from "../modals/category-modal/CategoryUpdateModal";
import { useProducts } from "@/features/products/useProduct";

interface PopoverType {
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
  name: string | undefined;
  popoverId: "simple-popover" | undefined;
  id: number | undefined;
}
export default function CategoryPopover({
  open,
  anchorEl,
  handleClose,
  name,
  popoverId,
  id,
}: PopoverType) {
  const { deleteCategory } = useProducts();
  const handleDeleteCategory = () => {
  if (!id) return;
  deleteCategory(id);
  handleClose(); 
};

  return (
    <div>
      <Popover
        id={popoverId}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        onClose={handleClose}
        disableRestoreFocus
      >
        <Box>
          <CategoryUpdateModal id={id} selectedName={name} />
          <Button
            variant="contained"
            color="error"
            onClick={handleDeleteCategory}
          >
            Delete {name}
          </Button>
        </Box>
      </Popover>
    </div>
  );
}

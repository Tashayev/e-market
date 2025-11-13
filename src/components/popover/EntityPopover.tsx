import Popover from "@mui/material/Popover";
import PopoverButtons from "./PopoverButtons";
import CategoryUpdateModal from "../modals/category-modals/CategoryUpdateModal";
import { useState } from "react";
import ProductUpdateModal from "../modals/product-modals/ProductUpdateModal";


interface EntityPopoverProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
  name: string | undefined;
  popoverId: string | undefined;
  categoryId?: number;
  productId?: number;
  entityType: "category" | "product";
}


export default function EntityPopover({
  open,
  anchorEl,
  handleClose,
  name,
  popoverId,
  productId,
  categoryId,
  entityType,
}: EntityPopoverProps) {

  const id = entityType === 'category' ? categoryId : productId
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const handleUpdateClick = () => {
    setIsUpdateModalOpen(true);
  };

  const handleUpdateModalClose = () => {
    setIsUpdateModalOpen(false);
    handleClose();
  };

  return (
    <>
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
        <PopoverButtons
          entityType={entityType}
          entityId={id}
          entityName={name}
          onUpdate={handleUpdateClick}
          onClose={handleClose}
        />
      </Popover>

      {entityType === "category" ? (
        <CategoryUpdateModal
          open={isUpdateModalOpen}
          onClose={handleUpdateModalClose}
          id={categoryId}
          selectedName={name}
        />
      ) : (
        <ProductUpdateModal
          open={isUpdateModalOpen}
          onClose={handleUpdateModalClose}
          id={productId}
          selectedName={name}
          
        />
      )}
    </>
  );
}

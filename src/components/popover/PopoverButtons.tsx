import { Button, Box } from "@mui/material";
import { useProducts } from "@/features/products/useProduct";

interface PopoverButtonsProps {
  entityType: 'category' | 'product';
  entityId: number | undefined;
  entityName: string | undefined;
  onUpdate: () => void;
  onClose: () => void;
}

export default function PopoverButtons({
  entityType,
  entityId,  
  onUpdate,
  onClose,
}: PopoverButtonsProps) {
  const { deleteCategory, deleteProduct } = useProducts(); 

  const handleDelete = () => {
    if (!entityId) return;
    
    if (entityType === 'category') {
      deleteCategory(entityId);
    }
    if (entityType === 'product') {
      deleteProduct(entityId);
    }    
    onClose();
  };

  return (
    <Box sx={{ display: 'flex', gap: 1, p: 1,  }}>
      <Button
        variant="contained"
        color="primary"
        onClick={onUpdate}
        sx={{ width: '100%' }}
      >
        Update
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={handleDelete}
        sx={{ width: '100%' }}
      >
        Delete
      </Button>
    </Box>
  );
}
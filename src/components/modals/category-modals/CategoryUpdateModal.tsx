// components/modals/category-modals/CategoryUpdateModal.tsx
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react"; 
import { useProducts } from "@/features/products/useProduct";
import { style } from "../ModalSrtyle";


interface CategoryUpdateModalProps {
  open: boolean;
  onClose: () => void;
  id: number | undefined;
  selectedName: string | undefined;
}

export default function CategoryUpdateModal({ 
  open, 
  onClose, 
  id, 
  selectedName 
}: CategoryUpdateModalProps) {
  const { updateCategory } = useProducts();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  

  useEffect(() => {
    if (open) {
      setName('');
      setImage('');
    }
  }, [open]);

  const handleUpdateCategory = () => {    
    if (id) {
      updateCategory({ name, image, id });
    }
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style.Box}>
        <Typography>Update category: {selectedName}</Typography>
        <TextField
          label="Category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Link to image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button 
            variant="contained" 
            color="success" 
            onClick={handleUpdateCategory}
          >
            Update {selectedName}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
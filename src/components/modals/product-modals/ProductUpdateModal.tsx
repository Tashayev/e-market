import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { useProducts } from "@/features/products/useProduct";

import { style } from "../ModalSrtyle";

interface ProductUpdateModalProps {
  open: boolean;
  onClose: () => void;
  id: number | undefined;
  selectedName: string | undefined;
}

export default function ProductUpdateModal({
  open,
  onClose,
  id,
  selectedName,
}: ProductUpdateModalProps) {
  const { updateProduct } = useProducts();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    if (open ) {
      setPrice(0);
      setTitle('')
    }
  }, [open]);

  

  const handleUpdateProduct = async () => {
    await updateProduct({ id, title, price });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style.Box}>
        <Typography variant="h6" gutterBottom>
          Update product: {selectedName}
        </Typography>

        <TextField
          label="Product title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          fullWidth
          margin="normal"
        />

        <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={handleUpdateProduct}
          >
            Update Product
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

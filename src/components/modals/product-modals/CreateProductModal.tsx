import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useProducts } from "@/features/products/useProduct";
import { style } from "../ModalSrtyle";
import type { CreateProduct } from "@/types/Products";

export default function CreateProductModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [imageUrl, setImageUrl] = useState<string[]>([]);

  const { createProduct, categories, fetchCategories } = useProducts();

  useEffect(() => {
    if (open) {
      fetchCategories();
      setTitle("");
      setPrice(0);
      setDescription("");
      setImageUrl([]);
      setCategoryId(0);
    }
  }, [open]);

  const handleCreateProduct = async () => {
    const newProduct: CreateProduct = {
      title,
      price,
      description,
      categoryId,
      images: imageUrl,
    };

    await createProduct(newProduct);

    setTitle("");
    setPrice(0);
    setDescription("");
    setImageUrl([]);
    setCategoryId(0);

    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="primary">
        Create product
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style.Box}>
          <Typography variant="h6" mb={2}>
            Create new product
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
            placeholder="Enter price"
          />

          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
          />

          <FormControl fullWidth margin="normal">
            <InputLabel>Category</InputLabel>
            <Select
              value={categoryId}
              label="Category"
              onChange={(e) => setCategoryId(e.target.value as number)}
            >
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Image URLs (separated by commas or on a new line)"
            multiline
            rows={3}
            value={imageUrl.join("\n")}
            onChange={(e) => {
              const input = e.target.value;
              
              const urls = input
                .split(/[\n,]+/)
                .map((url) => url.trim())
                .filter((url) => url.length > 0);
              setImageUrl(urls);
            }}
            fullWidth
            margin="normal"
          />

          <Button
            onClick={handleCreateProduct}
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Create
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

import { useState } from "react";
import { useProducts } from "@/features/products/useProduct";
import { style } from "./CategoryModalSrtyle";

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const {createCategory} = useProducts();
  const handleCreateCategory = async () => {
    await createCategory({name, image})
  }
  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="primary">Create category</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.Box}>
          <Typography>Create category</Typography>
          <TextField
            label="Category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Link to image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <Button onClick={()=>{handleCreateCategory(); handleClose()}}  variant="contained" color="primary">Create</Button>
        </Box>
      </Modal>
    </div>
  );
}

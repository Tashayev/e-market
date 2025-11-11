import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

import { useState } from "react";
import { useProducts } from "@/features/products/useProduct";
import { style } from "./CategoryModalSrtyle";

interface idType{
  id: number | undefined,
  selectedName: string | undefined
}
export default function CategoryUpdateModal({id, selectedName}: idType) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);  
 const {updateCategory} = useProducts();
  const [name, setName] = useState('');
  const [image, setImage] = useState('')
  
  const handleUpdateCategory = () => {    
    updateCategory({name, image, id})
  }
  return (
    <div>
      <Button sx={{width: '100%'}} onClick={handleOpen} variant="contained" color="primary">Update {selectedName}</Button>
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
           <Button  variant="contained" color="success" onClick={()=>{handleUpdateCategory(); handleClose()}}>Update {selectedName}</Button>
        </Box>
      </Modal>
    </div>
  );
}



// const {updateCategory} = useProducts();
//   if(!category) return null;
//   const {name, image, id } = category;
//   const handleUpdate = () => {
//     updateCategory({name, image, id})
//   }
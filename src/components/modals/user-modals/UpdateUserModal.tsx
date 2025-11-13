import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

import { useState, useEffect } from "react";

import { style } from "../ModalSrtyle";
import { useUser } from "@/features/auth/user/useUser";
interface propTypes {
  id: number | undefined;
}

export default function UpdateUserModal({ id }: propTypes) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { user, updateUser } = useUser();

  useEffect(() => {
    if (open && user && id === user.id) {
      setName(user.name || "");
      setEmail(user.email || "");
    }
  }, [open, id, user]);

  const handleUpdateUser = async () => {
    if (!id) return;
    await updateUser({ id, name, email });
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="primary">
        Edit
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style.Box}>
          <Typography>Update user {id}</Typography>

          <TextField
            label="User email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="User name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />

          <Button
            onClick={handleUpdateUser}
            variant="contained"
            color="primary"
          >
            Update user
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

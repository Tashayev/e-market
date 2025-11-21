import { TextField } from "@mui/material";
interface TextInputTypes {
  placeholder: string;
  type: string;
  error?: boolean | undefined;
  helperText?: React.ReactNode;
}
export const TextInput = ({
  placeholder,
  type,
  error,
  helperText,
  ...props
}: TextInputTypes) => {
  return (
    <TextField
      {...props}
      type={type}
      placeholder={placeholder}
      fullWidth
      error={error}
      helperText={helperText}
      sx={{
        border: "none",
        borderRadius: "10px",
        outline: "none",
        backgroundColor: "#F6F7F9",
        px: "10px",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            border: "none",
          },
        },
      }}
    />
  );
};

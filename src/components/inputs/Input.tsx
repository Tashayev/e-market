import { Input } from "@mui/material";
interface TextInputTypes{
  placeholder: string,
  type: string
}
export const TextInput = ({ placeholder, type, ...props }:TextInputTypes) => {
  return (
    <Input      
      {...props}
      placeholder={placeholder}
      type={type}
      sx={{
        py: "11px",
        px: "20px",
        borderRadius: "10px",
        outline: "none",
        backgroundColor: "#F6F7F9",
      }}
      disableUnderline={true}
    />
  );
};

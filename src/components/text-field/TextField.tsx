import type { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

import { Box, Input, Typography } from "@mui/material";

type TextFieldProps = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  rules?: object;
  defaultValue?: string;
};

export const TextField: FC<TextFieldProps> = (props) => {
  const {
    name,
    label,
    type = "text",    
    rules,
    defaultValue = "",
  } = props;
  
  const { control } = useFormContext();
  
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <Box className="mb-4">          
          <Input
            {...field}
            type={type}
            placeholder={label}
            className={`w-full p-3  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              error ? "border-error-500" : "border-gray-300"
            }`}
          />
          {error && (
            <Typography className="text-error-500 text-sm mt-1">{error.message}</Typography>
          )}
        </Box>
      )}
    />
  );
};
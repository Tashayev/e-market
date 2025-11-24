import { Button } from '@mui/material'

interface ButtonTypes {
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick?: () => void;
}

export default function MainButton({ 
  disabled = false, 
  type = 'button', 
  children,
  onClick, 
  ...props 
}: ButtonTypes) {
  return (
    <Button 
      disabled={disabled} 
      type={type} 
      {...props} 
      sx={{ 
        backgroundColor: 'primary.500', 
        color: 'white',
        '&:hover': {
          backgroundColor: 'primary.600',
        }
      }}
    >     
      {children}
    </Button>
  )
}
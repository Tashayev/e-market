import { useEffect, useState } from "react";
import SearchInputMenu from "../search-input/SearchInputMenu";
import { useNavigate } from "react-router";
import { SearchIcon } from "lucide-react";
import { alpha, InputBase, styled } from "@mui/material";
import { useDebounce } from "@/tools/hooks/useDebounce";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const serachValue = useDebounce(inputValue, 500);
  const navigate = useNavigate();
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
     if (e.key === "Enter" && inputValue.trim()) {
      navigate(`/search?query=${encodeURIComponent(inputValue)}`);
    }
  };
  
  const clearSearch = () => {
    setInputValue("");
  };
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        value={inputValue}
        onChange={handleSearchChange}
        onKeyDown={handleSearch}
      />
      {inputValue && (
        <ClearIconWrapper onClick={clearSearch}>
          ×
        </ClearIconWrapper>
      )}
      <SettingIconWrapper>
        <SearchInputMenu />
      </SettingIconWrapper>
    </Search>
  );
}
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "999px",
  color: "black",
  border: "1px solid #C3D4E9",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    paddingRight: `calc(1em + ${theme.spacing(8)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
}));
const SettingIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: "0",
  cursor: "pointer",
  width: "30px",
}));
const ClearIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  right: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: "0",
  cursor: "pointer",
  color: "gray",
  fontSize: "25px",
}));

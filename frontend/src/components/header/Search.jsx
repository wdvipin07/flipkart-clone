import React from "react";
import { useState, useEffect } from "react";
import { Box, InputBase, ListItem, List } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/action/ProductAction";

const SearchContainer = styled(Box)(({ theme }) => ({
  background: "rgb(234, 241, 246)",
  width: "38%",
  borderRadius: 5,
  marginLeft: 12,
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    top: 64,
    left: 4,
    background: "white",
    width: "92%",
  },
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  width: "100%",
  padding: "2px 10px",
  fontSize: 18,
  // [theme.breakpoints.down("sm")]: {
  //   color: "black",
  // },
}));

const SearchBtn = styled(SearchIcon)(({ theme }) => ({
  color: "rgb(176, 199, 235)",
  marginLeft: 10,
  fontSize: "2em",
  [theme.breakpoints.down("sm")]: {
    color: "black",
  },
}));

const ListWrapper = styled(List)`
  position: absolute;
  top: 55px;
  background: #f2f2f2;
  color: black;
`;

function Search() {
  const [text, setText] = useState("");

  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const getText = (text) => {
    setText(text);
  };
  return (
    <SearchContainer>
      <SearchBtn />
      <SearchInput
        onChange={(e) => getText(e.target.value)}
        value={text}
        placeholder="Search for Products, Brand and More"
      />

      {text && (
        <ListWrapper>
          {products
            .filter(
              (product) =>
                product.title.longTitle
                  .toLowerCase()
                  .includes(text.toLowerCase()) ||
                product.category.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <Link
                to={`/product/${product.id}`}
                onClick={() => setText("")}
                style={{ textDecoration: "none" }}
              >
                <ListItem>{product.title.longTitle}</ListItem>
              </Link>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
}

export default Search;

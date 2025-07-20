import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../redux/action/ProductAction";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  styled,
} from "@mui/material";

const addEllipsis = (text) => {
  return text.length > 20 ? text.substring(0, 25) + "..." : text;
};

const Wrapper = styled(Box)(({ theme }) => ({
  marginTop: 78,
  backgroundColor: "white",
  paddingTop: 10,
  "& > h4": {
    textAlign: "center",
    color: "#878787",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: 110,
  },
}));

const Container = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  padding-top: 10px;
  margin: 10px 15px 15px 15px;
`;

const ProductCard = styled(Box)`
  width: 270px;
  border: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  margin-bottom: 20px;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

const PriceText = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
`;

function ProductsPage() {
  //
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.getProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  //data incoming from params
  const { category } = useParams();

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <Wrapper>
      <h4>
        Showing 1 – 40 {filteredProducts.length} results for "{category}"
      </h4>
      <Container>
        {/* //maping all flitered products */}
        {filteredProducts.map((item, index) => (
          <Link
            to={`/product/${item.id}`}
            key={index}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ProductCard>
              <CardMedia
                component="img"
                height="300"
                image={item.url}
                alt={item.title.shortTitle}
                style={{
                  height: "280px",
                  objectFit: "contain",
                  padding: "8px 0px",
                }}
              />
              <CardContent>
                <Typography variant="subtitle1">
                  {addEllipsis(item.title.longTitle)}
                </Typography>

                <PriceText>
                  <Box component="span" style={{ fontWeight: 600 }}>
                    ₹{item.price.cost}
                  </Box>
                  <Box
                    component="span"
                    style={{ color: "#878787", textDecoration: "line-through" }}
                  >
                    ₹{item.price.mrp}
                  </Box>
                  <Box component="span" style={{ color: "#388e3c" }}>
                    {item.price.discount} off
                  </Box>
                </PriceText>
              </CardContent>
            </ProductCard>
          </Link>
        ))}
      </Container>
    </Wrapper>
  );
}

export default ProductsPage;

import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/action/ProductAction";
import { Box, Grid, styled, Typography } from "@mui/material";

//component
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";

const Component = styled(Box)(({ theme }) => ({
  marginTop: 60,
  backgroundColor: "white",
  [theme.breakpoints.down("sm")]: {
    marginTop: 110,
  },
}));

const Container = styled(Grid)`
  background-color: white;
`;

const RightContainer = styled(Grid)`
  margin-top: 30px;
  padding: 20px;
`;

function DetailView() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, product, loading]);

  return (
    <Component>
      {product && Object.keys(product).length > 0 && (
        <Container container>
          <Grid size={{ sm: 5, md: 5, lg: 4 }}>
            <ActionItem product={product} />
          </Grid>

          <RightContainer size={{ sm: 7, md: 7, lg: 8 }}>
            <ProductDetail product={product} />
          </RightContainer>
        </Container>
      )}
    </Component>
  );
}

export default DetailView;

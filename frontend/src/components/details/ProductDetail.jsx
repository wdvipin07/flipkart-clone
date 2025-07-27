import React from "react";

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import { LocalOffer as Badge } from "@mui/icons-material";

const SmallText = styled(Box)`
  vertical-align: baseline;

  & > p {
    font-size: 15px;
    margin-top: 10px;
  }
`;

const Offer = styled(Typography)`
  margin-top: 10px;
  font-weight: bold;
`;

const StyleBadge = styled(Badge)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 15px;
`;

const ColumnText = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;
  & > td {
    font-size: 14px;
    margin-top: 10px;
    border: none;
  }
`;

function ProductDetail({ product }) {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  return (
    <>
      <Typography> {product.title.longTitle}</Typography>
      <Typography style={{ marginTop: "5", color: "#878787", fontSize: "14" }}>
        8 Rating & 1 Reviews <img src={fassured} alt="fassured" width={"10%"} />
      </Typography>

      <Box display="flex" alignItems="center" gap={2}>
        <Typography style={{ fontSize: 28 }}>₹ {product.price.cost}</Typography>
        <Typography color="#878787">
          <strike>₹{product.price.mrp}</strike>
        </Typography>
        <Typography color="#388e3c">{product.price.discount} off</Typography>
      </Box>
      <Offer>Available Offers</Offer>

      <SmallText>
        <Typography>
          <StyleBadge />
          <b> Bank Offer</b> 5% cashback on Flipkart Axis Bank Credit Card upto
          ₹4,000 per statement quarterT&C
        </Typography>
        <Typography>
          <StyleBadge />
          <b> Bank Offer</b> 5% cashback on Axis Bank Flipkart Debit Card up to
          ₹750T&C
        </Typography>
        <Typography>
          <StyleBadge />
          <b>Bank Offer </b>10% off up to ₹1,250 on Axis Bank Credit Card Txns,
          Min Txn Value: ₹4,990T&C
        </Typography>
        <Typography>
          <StyleBadge />
          <b>Special Price </b> Get extra 72% off (price inclusive of
          cashback/coupon)T&C
        </Typography>
      </SmallText>

      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </ColumnText>

          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Waranty</TableCell>
            <TableCell>No Wanranty</TableCell>
          </ColumnText>

          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <Box component={"span"} style={{ color: "#2874f0" }}>
                SuperComNet
              </Box>
              <Typography>7 Days Service Center Replacement/Repair?</Typography>
              <Typography>GST invoice available?</Typography>
            </TableCell>
          </ColumnText>

          <ColumnText>
            <TableCell colSpan={2}>
              <img
                src={adURL}
                alt="image"
                style={{ width: "100%", maxWidth: "350px" }}
              />
            </TableCell>
          </ColumnText>

          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell></TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
}

export default ProductDetail;

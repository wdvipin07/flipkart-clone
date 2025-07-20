import { imageURL } from "../../constants/data";
import { Box, Grid, styled } from "@mui/material";
import { Link } from "react-router-dom";

const ImageWrapper = styled(Grid)`
  cursor: pointer;
  padding: 10px;
`;

function MidSection() {
  return (
    <Grid container style={{ backgroundColor: "white", margin: "10px" }}>
      {imageURL.map((image, index) => (
        <ImageWrapper key={index} size={{ lg: 4, md: 4, sm: 12 }}>
          <Link
            to={`/productsPage/${image.category}`}
            key={index}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img src={image.src} key={index} alt="Image" width={"100%"} />
          </Link>
        </ImageWrapper>
      ))}
    </Grid>
  );
}

export default MidSection;

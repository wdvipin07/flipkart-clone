import { Button, ButtonGroup, styled } from "@mui/material";

const Component = styled(ButtonGroup)`
  margin-top: 30px;
`;

const ButtonStyle = styled(Button)`
  border-radius: 50%;
`;

function GroupedButton() {
  return (
    <>
      <Component>
        <ButtonStyle> - </ButtonStyle>
        <Button disabled>1</Button>
        <ButtonStyle> + </ButtonStyle>
      </Component>
    </>
  );
}

export default GroupedButton;

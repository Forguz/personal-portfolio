import { Container, Backdrop, LogoButton } from "./style";

import Logo from "./logo.svg";

function ButtonLogo() {
  return (
    <Container>
      <Backdrop />
      <LogoButton>
        <img src={Logo} alt="logo" />
      </LogoButton>
    </Container>
  );
}

export default ButtonLogo;

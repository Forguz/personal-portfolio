import ButtonLogo from "../../components/ButtonLogo";
import { Divider } from "../../components/Divider";
import { Hamburger } from "../../components/Hamburger";

import { Container, Title, Top, Down, Description } from "./style";

function Home() {
  return (
    <Container>
      <Top>
        <Title>
          Hello! <p />
          I’m <span>Nícolas Dellazzeri</span>, Fullstack Developer and Design enthusiast.
        </Title>
        <Hamburger />
      </Top>

      <Down>
        <div style={{width: '760px'}}>
          <Divider />
          <Description>Actually working as a Freelancer with mobile development</Description>
        </div>
        <ButtonLogo />
      </Down>
    </Container>
  );
}

export default Home;

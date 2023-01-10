import { ReactComponent as Logo } from "./logo.svg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import apps from "../../apps.json";
import { ProjectCard } from "../../components/ProjectCard";
import {
  DiGit,
  DiJavascript1,
  DiReact,
  DiCss3,
  DiStackoverflow,
  DiNodejs,
  DiNpm,
  DiHtml5,
  DiPostgresql,
} from "react-icons/di";
import { Map, Marker } from "pigeon-maps";
import {
  Header,
  HeaderIconBox,
  Title,
  Section,
  FloatingBox,
  TextBox,
  IconsBox,
  ProjectsBox,
} from "./styles";

function Home() {
  return (
    <>
      <Header>
        <header>
          <FloatingBox>
            <Logo />
          </FloatingBox>
          <p>
            Hi! My name is Nicolas Dellazzeri, I am full-stack engineer located
            in Brazil.
          </p>
        </header>
        <footer>
          <HeaderIconBox>
            <a
              href="https://www.linkedin.com/in/nicolas-dellazzeri/"
              target={"blank"}
            >
              <FaLinkedin size={56} fill={"#0866C2"} />
            </a>
            <a href="https://github.com/Forguz" target={"blank"}>
              <FaGithub size={56} fill={"#161515"} />
            </a>
            <a
              href="https://discord.com/users/212345128344354826"
              target={"blank"}
            >
              <IoLogoDiscord size={56} fill={"#7289da"} />
            </a>
          </HeaderIconBox>
        </footer>
      </Header>
      <Section>
        <Title>About me</Title>
        <TextBox>
          <p>
            I was born on April 20, 1999 in São Jerônimo, RS, Brazil. I’m a full
            stack developer who loves code and embrace challenges. Also I’m
            Christian.
          </p>
          <p>
            Since young I have a predisposition to play games and to spend lots
            of time in a computer, which leads me in the direction to study IT,
            so I made an entrance exam to the IFSUL (Federal Institute of
            Technology) and was approved. At first I was perplexed with the
            world of programming, but as soon as I started to make it part of my
            days I've learnt to love it.
          </p>
          <p>
            After graduation, I’ve started to work with many stacks until I find
            React ecosystem, after that I made my career working with React and
            other Javascript frameworks.
          </p>
          <p>
            Thanks for reading!
            <br />
            Regards, Nícolas.
          </p>
        </TextBox>
      </Section>
      <Section>
        <Title>Skills</Title>
        <IconsBox>
          <div>
            <DiStackoverflow size={80} fill={"#F47B1A"} />
          </div>
          <div>
            {" "}
            <DiJavascript1 size={80} fill={"#FDCF11"} />
          </div>
          <div>
            {" "}
            <DiHtml5 size={80} fill={"#FD3C0F"} />
          </div>
          <div>
            {" "}
            <DiCss3 size={80} fill={"#1871B6"} />
          </div>
          <div>
            {" "}
            <DiNodejs size={80} fill={"#78B360"} />
          </div>
          <div>
            {" "}
            <DiReact size={80} fill={"#5FD9FA"} />
          </div>
          <div>
            {" "}
            <DiNpm size={80} fill={"#C50301"} />
          </div>
          <div>
            {" "}
            <DiGit size={80} fill={"#EC4F31"} />
          </div>
          <div>
            {" "}
            <DiPostgresql size={80} fill={"#305E90"} />
          </div>
        </IconsBox>
      </Section>
      <Section>
        <Title>Projects I've worked</Title>
        <ProjectsBox>
          {apps.map((app) => (
            <ProjectCard
              key={app.name}
              image={app.image}
              name={app.name}
              description={app.description}
              links={app.links}
            />
          ))}
        </ProjectsBox>
      </Section>
      <Section>
        <Title>Where am I?</Title>
        <FloatingBox padding={"0px"}>
          <Map
            height={400}
            defaultCenter={[-29.9821, -51.6351]}
            defaultZoom={11}
            attribution={false}
            twoFingerDrag={true}
          >
            <Marker
              width={40}
              color={"#A91212"}
              anchor={[-29.9821, -51.6351]}
            />
          </Map>
        </FloatingBox>
      </Section>
    </>
  );
}

export default Home;

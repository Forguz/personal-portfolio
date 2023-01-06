import { Container } from "./styles";
import {
  IoLogoGooglePlaystore,
  IoLogoApple,
  IoGlobeOutline,
} from "react-icons/io5";

import beehive from '../../images/beehive.webp'
import bkco from '../../images/bkco.webp'
import brivity from '../../images/brivity.webp'
import checkinz from '../../images/checkinz.webp'
import eyewish from '../../images/eyewish.webp'
import matchmode from '../../images/matchmode.webp'
import mydesk from '../../images/mydesk.webp'
import patience from '../../images/patience.webp'
import place from '../../images/place.webp'
import properorder from '../../images/properorder.webp'

const images = {
  beehive,
  bkco,
  brivity,
  checkinz,
  eyewish,
  matchmode,
  mydesk,
  patience,
  place,
  properorder
}

export function ProjectCard({ image, name, description, links }) {
  return (
    <Container>
      <img src={images[image]} alt={name} loading="lazy" />
      <h2>{name}</h2>
      <div id="text">
        <p>{description}</p>
      </div>
      <div id="links">
        {links.website && (
          <a href={links.website} target={"blank"}>
            <IoGlobeOutline size={24} />
          </a>
        )}
        {links.apple && (
          <a href={links.apple} target={"blank"}>
            <IoLogoApple size={24} />
          </a>
        )}
        {links.google && (
          <a href={links.google} target={"blank"}>
            <IoLogoGooglePlaystore size={24} />
          </a>
        )}
      </div>
    </Container>
  );
}

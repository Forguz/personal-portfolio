import { useState } from "react"

import { Button } from './style'

export function Hamburger({ click }) {
  const [active, setActive] = useState(false);

  function handleClick() {
    click && click();

    setActive(!active);
  }

  return <Button onClick={handleClick} active={active} ></Button>
}
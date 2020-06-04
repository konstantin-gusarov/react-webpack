import React, { useState } from "react";
import './app.css'

export default function myComponent () {
  const [counter, setCounter] = useState(0)

  const onClick = () => {
    setCounter(counter + 1)
  }

  return pug`
    div.intro Counter #{counter}
    button(
      onClick=onClick
    ) Push
  `
}

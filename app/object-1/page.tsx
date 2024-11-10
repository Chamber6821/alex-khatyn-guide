'use client'

import { Arrow } from "../components/Arrow";
import { Language } from "../components/Language";
import { Screen } from "../components/Screen";

export default function Object1() {
  return (
    <Screen back="1.png" ratio={900 / 599}>
      <Language />
      <Arrow x={.5} y={.9} direction="top"></Arrow>
      <Arrow x={.2} y={.5} direction="left"></Arrow>
      <Arrow x={.8} y={.5} direction="right"></Arrow>
    </Screen>
  )
}

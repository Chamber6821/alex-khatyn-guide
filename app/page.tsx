import Link from "next/link"
import { Screen } from "./components/Screen"
import { Marker } from "./components/Marker"

export default function Home() {
  return (
    <Screen back="/map.png" ratio={1280 / 720}>
      <Marker x={.424} y={.544}><Link href="/object/1" /></Marker>
      <Marker x={.338} y={.475}><Link href="/object/2" /></Marker>
      <Marker x={.732} y={.838}><Link href="/object/5" /></Marker>
      <Marker x={.802} y={.708}><Link href="/object/6" /></Marker>
      <Marker x={.771} y={.400}><Link href="/object/8" /></Marker>
      <Marker x={.784} y={.205}><Link href="/object/9" /></Marker>
    </Screen>
  )
}

import Link from "next/link"
import { Screen } from "./components/Screen"
import { Marker } from "./components/Marker"

export default function Home() {
  return (
    <Screen back="/map.png" ratio={1280 / 720}>
      <Marker x={.424} y={.544}><Link href="/object-1" /></Marker>
      <Marker x={.338} y={.475}><Link href="/object-2" /></Marker>
    </Screen>
  )
}

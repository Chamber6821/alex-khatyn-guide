import Link from "next/link"
import { Marker, Screen } from "./components/Screen"

export default function Home() {
  return (
    <Screen back="/map.png" ratio={1280 / 720}>
      <Marker x={.338} y={.475}><Link href="/" /></Marker>
    </Screen>
  )
}

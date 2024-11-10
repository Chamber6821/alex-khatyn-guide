import { Arrow } from "@/app/components/Arrow"
import { Language } from "@/app/components/Language"
import { Screen } from "@/app/components/Screen"
import Link from "next/link"

type Object = {
  back: string,
  ratio: number,
  left?: string,
  right?: string,
  top?: string,
  bottom?: string
}

const objects: Record<string, Object> = {
  '1': {
    back: '/1.png',
    ratio: 900 / 599,
    left: '2',
    right: '4',
    top: '10',
    bottom: '14',
  },
  '2': {
    back: '/2.png',
    ratio: 900 / 599,
    right: '1',
    top: '7',
  },
  '3': {
    back: '/1.png',
    ratio: 900 / 599,
    top: '4',
  },
  '4': {
    back: '/1.png',
    ratio: 900 / 599,
    left: '1',
    right: '6',
    top: '8',
    bottom: '3',
  },
  '5': {
    back: '/5.png',
    ratio: 900 / 599,
    top: '6',
  },
  '6': {
    back: '/6.png',
    ratio: 900 / 599,
    left: '4',
    bottom: '5',
  },
  '7': {
    back: '/1.png',
    ratio: 900 / 599,
    right: '8',
    top: '9',
    bottom: '2',
  },
  '8': {
    back: '/8.png',
    ratio: 900 / 599,
    left: '7',
    top: '11',
    bottom: '4',
  },
  '9': {
    back: '/9.png',
    ratio: 900 / 599,
    right: '10',
    bottom: '7',
  },
  '10': {
    back: '/1.png',
    ratio: 900 / 599,
    left: '9',
    right: '11',
    bottom: '1',
  },
  '11': {
    back: '/1.png',
    ratio: 900 / 599,
    left: '10',
    right: '4',
    bottom: '8',
  },
}

export default async function Object({ params }: { params: Promise<{ id: string }> }) {
  const object = objects[(await params).id]
  return (
    <Screen back={object.back} ratio={object.ratio}>
      <Language />
      {object.left
        && <Arrow x={.2} y={.5} direction="left">
          <Link
            style={{
              textAlign: 'center',
              verticalAlign: 'middle',
            }}
            href={`/object/${object.left}`}
          >
            {object.left}
          </Link>
        </Arrow>}
      {object.right
        && <Arrow x={.8} y={.5} direction="right">
          <Link
            style={{
              textAlign: 'center',
              verticalAlign: 'middle',
            }}
            href={`/object/${object.right}`}
          >
            {object.right}
          </Link>
        </Arrow>}
      {object.top
        && <Arrow x={.5} y={.7} direction="top">
          <Link
            style={{
              textAlign: 'center',
              verticalAlign: 'middle',
            }}
            href={`/object/${object.top}`}
          >
            {object.top}
          </Link>
        </Arrow>}
      {object.bottom
        && <Arrow x={.5} y={.9} direction="bottom">
          <Link
            style={{
              textAlign: 'center',
              verticalAlign: 'middle',
            }}
            href={`/object/${object.bottom}`}
          >
            {object.bottom}
          </Link>
        </Arrow>}
    </Screen>
  )
}

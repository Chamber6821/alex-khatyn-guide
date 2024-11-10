'use client'

import { ReactNode } from "react"
import styled from "styled-components"

const Container = styled.div`
width: 100%;
height: 100%;
max-width: 100dvw;
max-height: 100dvh;
display: flex;
justify-content: center;
align-items: center;
`

const Map = styled.div<{ back: string, ratio: number }>`
width: 100%;
height: 100%;
aspect-ratio: ${x => x.ratio};
background-image: url('${x => x.back}');
background-size: contain;
background-position: center;
background-repeat: no-repeat;
position: relative;
`

export const Marker = styled.div<{ x: number, y: number }>`
position: absolute;
transform: translate(-50%, -50%);
top: ${x => x.y * 100}%;
left: ${x => x.x * 100}%;
width: 2%;
aspect-ratio: 1;
border-radius: 100%;
border-color: red;
background-color: red;
opacity: 0.5;

& > * {
  display: block;
  width: 100%;
  height: 100%;
}
`

export const Screen = (props: { back: string, ratio: number, children: ReactNode }) => <Container>
  <Map back={props.back} ratio={props.ratio}>
    {props.children}
  </Map>
</Container>

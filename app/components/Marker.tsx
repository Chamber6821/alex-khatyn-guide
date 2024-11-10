'use client'

import styled from "styled-components";

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

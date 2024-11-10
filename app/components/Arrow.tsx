'use client'

import styled from "styled-components";

export const Arrow = styled.div<{ x: number, y: number, direction: 'left' | 'right' | 'top' | 'bottom' }>`
position: absolute;
transform: translate(-50%, -50%) rotate(${x => ({
    'left': '0deg',
    'right': '180deg',
    'top': '90deg',
    'bottom': '270deg',
  })[x.direction]});
top: ${x => x.y * 100}%;
left: ${x => x.x * 100}%;
width: 10%;
height: 10%;
background-image: url('/arrow.svg');
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat;

& > * {
  display: block;
  width: 100%;
  height: 100%;
}
`

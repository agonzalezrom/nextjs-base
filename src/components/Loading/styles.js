import styled, { keyframes } from "styled-components"
import ImageGear from "@/assets/images/gear.png"

const forwardRotation = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`
const backwardRotation = keyframes`
  from {
    -webkit-transform: rotate(342deg);
    -moz-transform: rotate(342deg);
    -o-transform: rotate(342deg);
    transform: rotate(342deg);
  }
  to {
    -webkit-transform: rotate(-18deg);
    -moz-transform: rotate(-18deg);
    -o-transform: rotate(-18deg);
    transform: rotate(-18deg);
  }
`

export const LoadingGearContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 230px;
  height: 190px;
`

export const LoadingGearOne = styled.div`
  width: 135px;
  height: 135px;
  position: absolute;
  top: 5px;
  left: 0;
  background: url(${ImageGear}) no-repeat center center;
  background-size: 100%;
  animation-name: ${forwardRotation};
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`

export const LoadingGearTwo = styled.div`
  position: absolute;
  left: 126px;
  top: 27px;
  width: 101px;
  height: 101px;
  background: url(${ImageGear}) no-repeat center center;
  background-size: 100%;
  animation-name: ${backwardRotation};
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`

export const LoadingGearThree = styled.div`
  position: absolute;
  left: 108px;
  top: 115px;
  width: 68px;
  height: 68px;
  background: url(${ImageGear}) no-repeat center center;
  background-size: 100%;
  animation-name: ${forwardRotation};
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`

/**
 * This file handles the math and style for your spiral.
 * It's ok if you don't understand everything here.
 */

export const sumOf = (n, fn) =>
Array.from(Array(n).keys())
   .reduce((a, n) => a + fn(n), 0)

export function getBoxStyle(n) {
const baseSize = 100
// const baseAngle = 50 * Math.PI/180
const baseAngle = -10 * Math.PI/180
const ratio = Math.sqrt(Math.tan(baseAngle)**2 + 1)/2

return {
  // position: 'absolute',
  width: baseSize*ratio**n,
  height: baseSize*ratio**n,
  left: '60%',
  top: sumOf(n, i =>
    baseSize*ratio**i*Math.cos(i*baseAngle)
  ),
  marginLeft: sumOf(n, i =>
    -baseSize*ratio**i*Math.sin(i*baseAngle)
  ),
  fontFamily: 'sans-serif',
  transform: `rotate(${n*baseAngle}rad)`,
  transformOrigin: 'top left',
  backgroundColor: '#61dafb',
  textAlign: 'center',
  lineHeight: baseSize*ratio**n+'px',
  fontSize: '18px'
}
}

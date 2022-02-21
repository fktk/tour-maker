
export default function SvgBody({
  backLength, backBending, armLength, saddleToHandle, bodyColor
}) {

  const armAngles = calcAngles(backBending, backLength, saddleToHandle, armLength)

  return (
    <>
      <defs>
        <g id="body"
          transform={`rotate(${backBending+3})`}
        >
          <line stroke={bodyColor} strokeWidth="50" strokeLinecap="round"
            x1="0" y1="0" x2="0" y2={-backLength}
          />
          <circle stroke={bodyColor} strokeWidth="40" fillOpacity="0"
            cx="20" cy={-backLength - 100} r="50"
          />
          <use href="#arm" x="0" y={-backLength}/>
        </g>

        <g id="lower-arm"
          transform={`rotate(${-armAngles[1]})`}
        >
          <line stroke={bodyColor} strokeWidth="50" strokeLinecap="round"
            x1="0" y1="0" x2="0" y2={armLength}
          />
        </g>

        <g id="arm"
          transform={`rotate(${-armAngles[0]})`}
        >
          <use href="#lower-arm" x="0" y={armLength} />
          <line stroke={bodyColor} strokeWidth="50" strokeLinecap="round"
            x1="0" y1="0" x2="0" y2={armLength}
          />
        </g>
      </defs>

      <use href="#body" x="300" y="400"/>

    </>
  )
}

function calcAngles(backBending, backLength, saddleToHandle, armLength) {
  const rad = (90 - backBending) / 180 * Math.PI
  const ab = Math.sqrt(
    backLength**2 + saddleToHandle**2 - 2 * backLength * saddleToHandle * Math.cos(rad)
  )

  const alpha = Math.asin(saddleToHandle * Math.sin(rad) / ab) * 180 / Math.PI
  const beta = Math.acos(ab / 2 / armLength) * 180 / Math.PI

  return [(alpha - beta), beta * 2]

}

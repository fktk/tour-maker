
export default function SvgBike() {

  // ペダリングの回転中心と位置合わせしているため変えない
  const pedalAngle = 12
  const saddleToBB = 620 / 2

  const bbPoints = [
    Math.sin(pedalAngle / 180 * Math.PI) * saddleToBB,
    Math.cos(pedalAngle / 180 * Math.PI) * saddleToBB,
  ]

  return (
    <>
      <defs>
        <g id="bike">
          <circle stroke="white" strokeWidth="30" fillOpacity="0"
            cx="-200" cy="-35" r="135"
          />
          <circle stroke="white" strokeWidth="30" fillOpacity="0"
            cx="270" cy="-35" r="135"
          />
          <circle stroke="black" strokeWidth="25" fillOpacity="0"
            cx="-200" cy="-35" r="135"
          />
          <circle stroke="black" strokeWidth="25" fillOpacity="0"
            cx="270" cy="-35" r="135"
          />
          <path stroke="white" strokeWidth="30" fill="none"
            strokeLinecap="round" strokeLinejoin="round"
            d="
            M -60 -150 L -200 -35 L 0 0 L -90 -265
            M 0 0 L 210 -215
            M 210 -220 L 270 -35 L 210 -220 L 205 -260
            "
          />
          <path stroke="black" strokeWidth="25" fill="none"
            strokeLinecap="round" strokeLinejoin="round"
            d="
            M -60 -150 L -200 -35 L 0 0 L -90 -265
            M 0 0 L 210 -215
            M 210 -220 L 270 -35 L 210 -220 L 205 -260
            "
          />
          <path id="handle0" stroke="white" strokeWidth="30" fill="none"
            strokeLinecap="round" strokeLinejoin="round"
            d=" M 205 -260 c 90 -20, 90 40, 40 50 "
          />
          <path id="saddle0" stroke="white" strokeWidth="30" fill="none"
            strokeLinecap="round" strokeLinejoin="round"
            d=" M -90 -265 h 40 h -60 "
          />
          <path id="top-tube0" stroke="white" strokeWidth="30" fill="none"
            strokeLinecap="round" strokeLinejoin="round"
            d=" M 200 -230 L -60 -180 "
          />
          <path id="handle" stroke="black" strokeWidth="25" fill="none"
            strokeLinecap="round" strokeLinejoin="round"
            d=" M 205 -260 c 90 -20, 90 40, 40 50 "
          />
          <path id="saddle" stroke="black" strokeWidth="25" fill="none"
            strokeLinecap="round" strokeLinejoin="round"
            d=" M -90 -265 h 40 h -60 "
          />
          <path id="top-tube" stroke="url(#top-tube-color)" strokeWidth="25" fill="none"
            strokeLinecap="round" strokeLinejoin="round"
            d=" M 200 -230 L -60 -180 "
          />
        </g>
        <linearGradient id="top-tube-color">
          <stop offset="0%" stopColor="green"/>
          <stop offset="25%" stopColor="yellow"/>
          <stop offset="50%" stopColor="black"/>
          <stop offset="75%" stopColor="red"/>
          <stop offset="100%" stopColor="aqua"/>
        </linearGradient>
      </defs>
      <use href="#bike" x={bbPoints[0] + 300} y={bbPoints[1] + 400}/>
    </>
  )
}



export default function SvgPedaling(
  {pedalLength, legLength, cadence, opposite, bodyColor}
) {

  // これは定数なので変えない
  const saddleToBB = 620 / 2

  const timePerCicle = 1 / cadence * 60

  // 反対側の足を表現するために、IDの末尾に反対側を示す数字をつけた
  const begin = opposite ? -timePerCicle / 2 : 0
  const idExt = opposite ? 1 : 0

  const rotAngles = Array.from(Array(30).keys()).map(i => i / 29 * 360)
  const degs = rotAngles.map(deg => calcPedalingAngles(deg, saddleToBB, pedalLength, legLength))
  const lowerDegStr = degs.map(deg => {
    return (deg.alpha - deg.beta).toFixed(2) + ';'
  }).join('')
  const upperDegStr = degs.map(deg => {
    return (-(deg.alpha + deg.beta)).toFixed(2) + ';'
  }).join('')

  return(
    <>
      <defs>
        <path id="circle"
          d={`M 0 -${pedalLength}
            A ${pedalLength} ${pedalLength} 0 1 1 0 ${pedalLength}
            A ${pedalLength} ${pedalLength} 0 1 1 0 -${pedalLength}
          `}
        />

        <g id={`pedal${idExt}`}>
          <line stroke="white" strokeWidth="25" strokeLinecap="round"
            x1="0" y1={-pedalLength} x2="0" y2="0"
          />
          <line stroke="black" strokeWidth="20" strokeLinecap="round"
            x1="0" y1={-pedalLength} x2="0" y2="0"
          />
          <animateTransform
            attributeName="transform" attributeType="XML"
            type="rotate" from="0" to="360" begin={begin}
            dur={timePerCicle + "s"} repeatCount="indefinite"
          />
        </g>


        <g id={`foot-lower${idExt}`}>
          <line stroke={bodyColor} strokeWidth="50" strokeLinecap="round"
            x1="0" y1={-legLength} x2="0" y2="-50"
          />
          <line stroke="white" strokeWidth="25" strokeLinecap="round"
            x1="-20" y1="0" x2="20" y2="0"
          />
          <line stroke="black" strokeWidth="20" strokeLinecap="round"
            x1="-20" y1="0" x2="20" y2="0"
          />
          <animateTransform
            attributeName="transform" attributeType="XML"
            type="rotate"
            values={lowerDegStr} begin={begin}
            dur={timePerCicle + "s"} repeatCount="indefinite"
          />
          <animateMotion
            repeatCount="indefinite"
            dur={timePerCicle + "s"} begin={begin}
          >
            <mpath href="#circle"/>
          </animateMotion>
        </g>

        <g id={`foot-upper${idExt}`}>
          <line stroke={bodyColor} strokeWidth="50" strokeLinecap="round"
            x1="0" y1="0" x2="0" y2={legLength}
          />
          <animateTransform
            attributeName="transform" attributeType="XML"
            type="rotate"
            values={upperDegStr} begin={begin}
            dur={timePerCicle + "s"} repeatCount="indefinite"
          />
        </g>
        <g id={`pedaling${idExt}`} transform="rotate(-12)">
          <use href={`#pedal${idExt}`} x="0" y={saddleToBB}/>
          <use href={`#foot-upper${idExt}`} x="0" y="0"/>
          <use href={`#foot-lower${idExt}`} x="0" y={saddleToBB}/>
        </g>
      </defs>

      <use href={`#pedaling${idExt}`} x="300" y="400"/>
    </>
  )

}

function calcPedalingAngles(deg, saddleToBB, pedalLength, legLength) {
  const rad = deg / 180 * Math.PI
  const ra = Math.sqrt(
    saddleToBB**2 + pedalLength**2 - 2 * saddleToBB * pedalLength * Math.cos(rad)
  )
  const alpha = Math.acos(ra / 2 / legLength) * 180 / Math.PI
  const beta = Math.asin(pedalLength / ra * Math.sin(rad)) * 180 / Math.PI
  return { alpha, beta }
}


export default function SvgPedaling(
  {pedalLength, legLength, cadence, opposite, bodyColor}
) {

  // これは定数なので変えない
  const saddleToBB = 620 / 2

  const timePerCicle = 1 / cadence * 60

  // 反対側の足を表現するために、IDの末尾に反対側を示す数字をつけた
  const idExt = opposite ? 1 : 0

  return(
    <>
      <defs>
        <g id={`pedaling${idExt}`} transform="rotate(-12)">
          <Pedal
            id={'pedal'+idExt}
            x='0'
            y={saddleToBB}
            pedalLength={pedalLength}
            timePerCicle={timePerCicle}
            opposite={opposite}
          />
          <Leg
            id={'leg'+idExt}
            x='0'
            y='0'
            legLength={legLength}
            opposite={opposite}
            saddleToBB={saddleToBB}
            timePerCicle={timePerCicle}
            bodyColor={bodyColor}
            pedalLength={pedalLength}
          />
        </g>
      </defs>
      <use href={`#pedaling${idExt}`} x="300" y="400"/>
    </>
  )
}

function LowerLeg({id, x, y, legLength, animeValues, timePerCicle, bodyColor}) {
  return (
    <>
      <defs>
        <g id={id}>
          <line stroke={bodyColor} strokeWidth="50" strokeLinecap="round"
            x1="0" y1="0" x2="0" y2={legLength-50}
          />
          <line stroke="white" strokeWidth="25" strokeLinecap="round"
            x1="-20" y1={legLength} x2="20" y2={legLength} 
          />
          <line stroke="black" strokeWidth="20" strokeLinecap="round"
            x1="-20" y1={legLength} x2="20" y2={legLength} 
          />
          <animateTransform
            attributeName="transform" attributeType="XML"
            type="rotate"
            values={animeValues}
            dur={timePerCicle + "s"} repeatCount="indefinite"
          />
        </g>
      </defs>
      <use href={`#${id}`} x={x} y={y} />
    </>
  )
}

function Leg({
  id, x, y, legLength, pedalLength, saddleToBB, opposite, timePerCicle, bodyColor
}) {

  const rotAngles = (
    opposite ?
    Array.from(Array(30).keys()).map(i => i / 29 * 360 + 180) :
    Array.from(Array(30).keys()).map(i => i / 29 * 360)
  )

  const degs = rotAngles.map(deg => calcPedalingAngles(deg, saddleToBB, pedalLength, legLength))
  const lowerDegStr = degs.map(deg => {
    return (deg.alpha * 2).toFixed(2) + ';'
  }).join('')
  const upperDegStr = degs.map(deg => {
    return (-(deg.alpha + deg.beta)).toFixed(2) + ';'
  }).join('')

  return (
    <>
      <defs>
        <g id={id}>
          <line stroke={bodyColor} strokeWidth="50" strokeLinecap="round"
            x1="0" y1="0" x2="0" y2={legLength}
          />
          <LowerLeg
            id={id + 'lowerLeg'}
            x='0'
            y={legLength}
            legLength={legLength}
            animeValues={lowerDegStr}
            timePerCicle={timePerCicle}
            bodyColor={bodyColor}
          />
          <animateTransform
            attributeName="transform" attributeType="XML"
            type="rotate"
            values={upperDegStr}
            dur={timePerCicle + "s"} repeatCount="indefinite"
          />
        </g>
      </defs>
      <use href={`#${id}`} x={x} y={y} />
    </>
  )
}


function Pedal({id, x, y, pedalLength, timePerCicle, opposite}) {
  const pedalRot = (
    opposite ?
    {from: 180, to: 540} :
    {from: 0, to: 360}
  )

  return (
    <>
      <defs>
        <g id={id}>
          <line stroke="white" strokeWidth="25" strokeLinecap="round"
            x1="0" y1={-pedalLength} x2="0" y2="0"
          />
          <line stroke="black" strokeWidth="20" strokeLinecap="round"
            x1="0" y1={-pedalLength} x2="0" y2="0"
          />
          <animateTransform
            attributeName="transform" attributeType="XML"
            type="rotate" from={pedalRot.from} to={pedalRot.to}
            dur={timePerCicle + "s"} repeatCount="indefinite"
          />
        </g>
      </defs>
      <use href={`#${id}`} x={x} y={y} />
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

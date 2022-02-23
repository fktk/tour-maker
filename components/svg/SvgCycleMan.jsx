import SvgPedaling from './SvgPedaling'
import SvgBike from './SvgBike'
import SvgBody from './SvgBody'

export default function SvgCycleMan({
  cadence
}) {

  const pedalLength = 165 / 2
  const legLength = 410 / 2

  // 棒人間のパラメータ
  const backLength = 480 / 2
  const backBending = 40
  const armLength = 260 / 2
  const saddleToHandle = 330
  const bodyColor='#FFD700' // イエロージャージを参考にした

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 900"
    >
      <SvgPedaling
        pedalLength={pedalLength}
        legLength={legLength}
        cadence={cadence}
        opposite={true}
        bodyColor={bodyColor}
      />
      <SvgBike />
      <SvgBody
        backLength={backLength}
        backBending={backBending}
        armLength={armLength}
        saddleToHandle={saddleToHandle}
        bodyColor={bodyColor}
      />
      <SvgPedaling
        pedalLength={pedalLength}
        legLength={legLength}
        cadence={cadence}
        opposite={false}
        bodyColor={bodyColor}
      />
    </svg>
  )
}


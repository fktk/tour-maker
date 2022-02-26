import { useTheme } from '@mui/material/styles'

import SvgPedaling from './SvgPedaling'
import SvgBike from './SvgBike'
import SvgBody from './SvgBody'

export default function SvgCycleMan({
  cadence,
  pedalLength,
  legLength,
  armLength,
  backBending,
  dropBar,
}) {

  const theme = useTheme()

  // 棒人間のパラメータ
  const backLength = 490 / 2
  const saddleToHandle = 330

  const bodyColor = dropBar ?
    theme.palette.primary.main :
    theme.palette.secondary.main
    

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
        dropBar={dropBar}
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


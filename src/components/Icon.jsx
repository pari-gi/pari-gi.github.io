import star from '../assets/icons/solar-star-angle-outline.svg?raw'
import smile from '../assets/icons/mynaui-smile.svg?raw'
import scroll from '../assets/icons/ph-scroll.svg?raw'
import plant from '../assets/icons/ph-potted-plant.svg?raw'
import strategy from '../assets/icons/streamline-business-progress-bar-2.svg?raw'
import brain from '../assets/icons/bx-brain.svg?raw'
import lightning from '../assets/icons/bitcoin-icons-lightning-outline.svg?raw'
import magnifier from '../assets/icons/gravity-ui-person-magnifier.svg?raw'
import code from '../assets/icons/bitcoin-icons-code-filled.svg?raw'
import arrow from '../assets/icons/ph-arrow-down-right.svg?raw'

const ICONS = { star, smile, scroll, plant, strategy, brain, lightning, magnifier, code, arrow }

export default function Icon({ name, size = 16 }) {
  const svg = ICONS[name]
  if (!svg) return null
  return (
    <span
      className="icon"
      style={{ width: size, height: size }}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}

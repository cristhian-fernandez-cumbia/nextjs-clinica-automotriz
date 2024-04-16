import { IconProps } from '@/interface/icons'

const ArrowDownTriangle = (props: IconProps) => {
  return (
    <svg width="10" height="9" viewBox="0 0 7 6" fill="none" className={props?.className}>
      <path d="M3.86932 5.24903C3.6681 5.55884 3.21457 5.55884 3.01335 5.24903L0.638584 1.59285C0.418061 1.25333 0.661725 0.804518 1.06657 0.804518L5.8161 0.804518C6.22095 0.804518 6.46461 1.25333 6.24408 1.59285L3.86932 5.24903Z" fill={props?.fill || '#000'}/>
    </svg>    
  )
}

export default ArrowDownTriangle





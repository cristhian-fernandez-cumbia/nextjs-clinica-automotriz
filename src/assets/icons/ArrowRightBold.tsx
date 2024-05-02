import { IconProps } from '@/interface/icons'

const ArrowRightBold = (props: IconProps) => {
  return (
    <svg width="20" height="27" viewBox="0 0 20 27" fill="none" className={props?.className}>
      <g filter="url(#filter0_d_421_121)">
        <path d="M6.25256 2.07129L4.78589 3.64272L12.5383 11.4999L4.78589 19.357L6.25256 20.9284L15.6811 11.4999L6.25256 2.07129Z" fill={props?.fill || '#FFF'}/>
        <path d="M6.75258 1.57126L6.23502 1.0537L5.73559 1.58879L4.26893 3.16022L3.8059 3.65632L4.28252 4.13938L11.5449 11.4999L4.28252 18.8603L3.8059 19.3434L4.26893 19.8395L5.73559 21.4109L6.23502 21.946L6.75258 21.4285L16.1812 11.9999L16.6812 11.4999L16.1812 10.9998L6.75258 1.57126Z" stroke={props?.fill || '#FFF'} strokeWidth="1.41429"/>
      </g>
      <defs>
        <filter id="filter0_d_421_121" x="0.940213" y="0.0361328" width="18.6267" height="26.6989" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1.88571"/>
          <feGaussianBlur stdDeviation="0.942857"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_421_121"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_421_121" result="shape"/>
      </filter>
      </defs>
    </svg>
  )
}

export default ArrowRightBold






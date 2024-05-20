import { IconProps } from '@/interface/icons'

const Car = (props: IconProps) => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className={props?.className}>
      <path d="M27.5278 0C28.6418 4.45365e-05 29.7339 0.365021 30.6815 1.05404C31.6292 1.74307 32.3952 2.72892 32.8935 3.90118L35.6594 10.4071C36.1474 10.1718 36.6333 9.93412 37.1053 9.65882C37.58 9.37988 38.1295 9.33423 38.6328 9.53191C39.1361 9.7296 39.5521 10.1544 39.7892 10.7129C40.0263 11.2715 40.0651 11.9179 39.897 12.5101C39.729 13.1023 39.3679 13.5916 38.8932 13.8706C37.9053 14.4494 37.4533 14.6282 37.4533 14.6282L39.3652 19.1294C39.7832 20.1106 39.9992 21.1906 39.9992 22.2871V28.2353C40.0004 29.2287 39.8228 30.2111 39.4781 31.1179C39.1334 32.0247 38.6294 32.8353 37.9993 33.4965V36.4706C37.9993 37.4066 37.6832 38.3044 37.1206 38.9663C36.558 39.6282 35.795 40 34.9994 40C34.2038 40 33.4408 39.6282 32.8782 38.9663C32.3156 38.3044 31.9996 37.4066 31.9996 36.4706V35.2941H8.00073V36.4706C8.00073 37.4066 7.68468 38.3044 7.12209 38.9663C6.55951 39.6282 5.79649 40 5.00088 40C4.20527 40 3.44224 39.6282 2.87966 38.9663C2.31708 38.3044 2.00102 37.4066 2.00102 36.4706V33.4965C0.773085 32.2024 0.00112265 30.3247 0.00112265 28.2353V22.2871C0.00149638 21.1917 0.218544 20.1114 0.635091 19.1318L2.547 14.6282C2.0626 14.3919 1.58378 14.14 1.11107 13.8729C0.875338 13.7353 0.665006 13.5444 0.492127 13.3109C0.319249 13.0775 0.187224 12.8063 0.103619 12.5127C0.0200142 12.2191 -0.0135263 11.9091 0.00491951 11.6002C0.0233654 11.2914 0.0934349 10.9899 0.211112 10.7129C0.453441 10.1573 0.871754 9.73611 1.37575 9.54022C1.87976 9.34432 2.42902 9.38946 2.90498 9.66588C3.37496 9.93412 3.85693 10.1765 4.34091 10.4071L7.10677 3.90118C7.60512 2.72892 8.37105 1.74307 9.31874 1.05404C10.2664 0.365021 11.3585 4.45365e-05 12.4725 0H27.5278ZM33.6675 16.2447C30.2676 17.5082 25.4299 18.8235 20.0001 18.8235C14.5704 18.8235 9.73265 17.5059 6.33281 16.2447L4.21292 21.2329C4.07353 21.5601 4.00095 21.9211 4.00093 22.2871V28.2353C4.00093 28.8593 4.21163 29.4578 4.58668 29.8991C4.96174 30.3403 5.47042 30.5882 6.00083 30.5882H33.9995C34.5299 30.5882 35.0385 30.3403 35.4136 29.8991C35.7887 29.4578 35.9994 28.8593 35.9994 28.2353V22.2871C35.999 21.9219 35.9264 21.5618 35.7874 21.2353L33.6675 16.2447ZM11.0006 21.1765C11.7962 21.1765 12.5592 21.5483 13.1218 22.2102C13.6844 22.8721 14.0004 23.7698 14.0004 24.7059C14.0004 25.6419 13.6844 26.5397 13.1218 27.2016C12.5592 27.8634 11.7962 28.2353 11.0006 28.2353C10.205 28.2353 9.44195 27.8634 8.87937 27.2016C8.31679 26.5397 8.00073 25.6419 8.00073 24.7059C8.00073 23.7698 8.31679 22.8721 8.87937 22.2102C9.44195 21.5483 10.205 21.1765 11.0006 21.1765ZM28.9997 21.1765C29.7953 21.1765 30.5583 21.5483 31.1209 22.2102C31.6835 22.8721 31.9996 23.7698 31.9996 24.7059C31.9996 25.6419 31.6835 26.5397 31.1209 27.2016C30.5583 27.8634 29.7953 28.2353 28.9997 28.2353C28.2041 28.2353 27.4411 27.8634 26.8785 27.2016C26.3159 26.5397 25.9999 25.6419 25.9999 24.7059C25.9999 23.7698 26.3159 22.8721 26.8785 22.2102C27.4411 21.5483 28.2041 21.1765 28.9997 21.1765ZM27.5278 4.70588H12.4725C12.1012 4.70612 11.7373 4.82796 11.4215 5.05777C11.1057 5.28758 10.8506 5.61628 10.6846 6.00706L8.14472 11.9765C11.2406 13.0706 15.4124 14.1176 20.0001 14.1176C24.5879 14.1176 28.7597 13.0706 31.8536 11.9765L29.3157 6.00706C29.1497 5.61628 28.8946 5.28758 28.5788 5.05777C28.263 4.82796 27.8991 4.70612 27.5278 4.70588Z" fill={props?.fill || '#000'} />
    </svg>
  )
}

export default Car



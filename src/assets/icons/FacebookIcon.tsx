import { IconProps } from '@/interface/icons'

const FacebookIcon = (props: IconProps) => {
  return (
    <svg width="11" height="22" viewBox="0 0 12 23" fill="none" className={props?.className}>
      <path d="M8 13.225H10.8571L12 8.625H8V6.325C8 5.1405 8 4.025 10.2857 4.025H12V0.161C11.6274 0.11155 10.2206 0 8.73486 0C5.632 0 3.42857 1.90555 3.42857 5.405V8.625H0V13.225H3.42857V23H8V13.225Z" fill={props?.fill || '#000'}/>
    </svg>
  )
}

export default FacebookIcon





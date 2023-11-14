import Link from 'next/link'

import Icon from '@/components/Icon';

{/*
  Props :
  - variant : solid, outline
  - size : small, medium
  - icon : icon name (must exists in the Icon component)
*/}

let btnVariants = {
  solid: {
    text: "text-white",
    background: "bg-gradient-to-b from-[#18364A] to-dark hover:opacity-90 transition-opacity duration-300",
  },
  outline: {
    text: "text-dark",
    background: "bg-transparent border border-slate-300 hover:border-slate-400 transition-colors duration-300"
  }
}

let btnSizes = {
  small: "py-3 px-5 rounded-full",
  medium: "p-5 rounded-xl"
}

function Button({ className = "", children, link, icon, variant = "solid", size = "medium" }){
  return(
    <Link className={`inline-flex relative z-[1] ${btnSizes[size]} ${btnVariants[variant].background} ${className}`} href={link}>
      <span className={`block relative z-[1] font-text font-normal text-[18px] leading-[normal] ${btnVariants[variant].text}`}>{children}</span>
      { icon !== undefined ? <Icon className="relative z-[1] ml-2" icon={icon} color="white" width="12px" /> : null }
    </Link>
  )
}

export default Button;
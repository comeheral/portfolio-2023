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
    background: "bg-dark border-2 border-dark",
  },
  outline: {
    text: "text-dark",
    background: "bg-transparent border-2 border-dark"
  }
}

let btnSizes = {
  small: {
    parent: "py-3 px-5 rounded-full",
    background: "rounded-full"
  },
  medium: {
    parent: "p-5 rounded-xl",
    background: "rounded-xl"
  }
}

function Button({ className = "", children, link, icon, variant = "solid", size = "medium" }){
  return(
    <Link className={`group inline-flex relative z-[1] ${btnSizes[size].parent} ${className}`} href={link}>
      <span className={`block relative z-[1] font-text font-normal text-[18px] leading-none ${btnVariants[variant].text}`}>{children}</span>
      { icon !== undefined ? <Icon className="relative z-[1] ml-2" icon={icon} color="white" width="12px" /> : null }
      <div className={`absolute inset-0 group-hover:scale-105 transition-transform duration-200 ${btnVariants[variant].background} ${btnSizes[size].background}`}></div>
    </Link>
  )
}

export default Button;
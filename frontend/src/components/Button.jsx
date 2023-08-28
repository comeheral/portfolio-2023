import Link from 'next/link'

import Icon from '@/components/Icon';
import '@/styles/components/Button.scss';

{/*
  Props :
  - variant : solid, outline
  - size : small, medium
  - icon : icon name (must exists in the Icon component)
*/}

function Button({ className = "", children, link, icon, variant = "solid", size = "medium" }){
  return(
    <Link className={`button button--${variant} button--${size} ${className}`} href={link}>
      <span className="button__text">{children}</span>
      { icon !== undefined ? <Icon className="button__icon" icon={icon} color="white" width="12px" /> : null }
      <div className="button__bg"></div>
    </Link>
  )
}

export default Button;
import Link from 'next/link'
import '@/styles/components/Button.scss';

{/*
  Props :
  - variant : solid, outline
*/}

function Button({ className, children, link, variant }){
  return(
    <Link className={`button button--${variant} ${className}`} href={link}>
      <span className="button__text">{children}</span>
      <div className="button__bg"></div>
    </Link>
  )
}

Button.defaultProps = {
  className: "",
  variant: "solid"
};

export default Button;
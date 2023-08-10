import '@/styles/components/text.scss';

{/*
  Props :
  - size : sm, md, lg
*/}

function Text({ className, children, size }){
  return(
    <p className={`text text--${size} ${className}`}>{children}</p>
  )
}

export default Text;
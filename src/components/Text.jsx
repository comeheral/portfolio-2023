import '@/styles/components/Text.scss';

{/*
  Props :
  - size : sm, md, lg
*/}

function Text({ className, children, size }){
  return(
    <p className={`text text--${size} ${className}`}>{children}</p>
  )
}

Text.defaultProps = {
  className: ""
};

export default Text;
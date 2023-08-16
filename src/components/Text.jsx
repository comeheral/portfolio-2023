import '@/styles/components/Text.scss';

{/*
  Props :
  - size : sm, md, lg
  - color : dark, white
*/}

function Text({ className, children, size, color }){
  return(
    <p className={`text text--${size} text--${color} ${className}`}>{children}</p>
  )
}

Text.defaultProps = {
  className: "",
  color: "dark"
};

export default Text;
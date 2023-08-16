import '@/styles/components/Heading.scss';

{/*
  Props :
  - as : h1, h2, h3, h4, h5, h6
  - size : sm, md, lg
  - color : dark, white
*/}

function Heading({ className, children, as, size, color }){
  const HeadingTag = as;

  return(
    <HeadingTag className={`heading heading--${size} heading--${color} ${className}`}>{children}</HeadingTag>
  )
}

Heading.defaultProps = {
  className: "",
  color: "dark"
};

export default Heading;
import '@/styles/components/Heading.scss';

{/*
  Props :
  - as : h1, h2, h3, h4, h5, h6
  - size : sm, md, lg
  - color : dark, white
*/}

function Heading({ className = "", children, as, size, color = "dark" }){
  const HeadingTag = as;

  return(
    <HeadingTag className={`heading heading--${size} heading--${color} ${className}`}>{children}</HeadingTag>
  )
}

export default Heading;
import '@/styles/components/heading.scss';

{/*
  Props :
  - as : h1, h2, h3, h4, h5, h6
  - size : sm, md, lg
*/}

function Heading({ className, children, as, size }){
  const HeadingTag = as;

  return(
    <HeadingTag className={`heading heading--${size} ${className}`}>{children}</HeadingTag>
  )
}

export default Heading;
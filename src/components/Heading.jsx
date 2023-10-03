{/*
  Props :
  - as : h1, h2, h3, h4, h5, h6
  - size : sm, md, lg
  - color : dark, white
*/}

let headingSizes = {
  sm: "text-[24px] md:text-[32px]",
  md: "text-[30px] md:text-[40px]",
  lg: "text-[36px] md:text-[48px]"
}

function Heading({ className = "", children, as, size, color = "dark" }){
  const HeadingTag = as;

  return(
    <HeadingTag className={`font-heading font-semibold leading-none text-${color} ${headingSizes[size]} ${className}`}>{children}</HeadingTag>
  )
}

export default Heading;
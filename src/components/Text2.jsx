{/*
  Props :
  - size : sm, md, lg
  - color : dark, white
*/}

let textSizes = {
  sm: "text-[12px]",
  md: "text-[16px]",
  lg: "text-[20px] md:text-[24px]"
}

function Text2({ className = "", children, size, color = "dark" }){
  return(
    <p className={`font-text font-light leading-normal text-${color} ${textSizes[size]} ${className}`}>{children}</p>
  )
}

export default Text2;
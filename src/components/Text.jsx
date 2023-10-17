{/*
  Props :
  - size : sm, md, lg
  - color : dark, white
  - richText : true, false
*/}

let textSizes = {
  sm: "text-[12px]",
  md: "text-[16px]",
  lg: "text-[20px] md:text-[24px]"
}

function Text({ className = "", children, size, color = "dark", richText = false }){
  if(richText){
    return <div className={`font-text font-light leading-normal text-${color} ${textSizes[size]} ${className}`} dangerouslySetInnerHTML={{__html: children}}></div>
  }else{
    return <p className={`font-text font-light leading-normal text-${color} ${textSizes[size]} ${className}`}>{children}</p>
  }
}

export default Text;
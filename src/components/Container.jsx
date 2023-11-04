{/*
  padding = 32px
  1192px = 1128px + (2 * padding)
  1288px = 1224px + (2 * padding)
  1432px = 1368px + (2 * padding)
  564px = 500px + (2 * padding)

  Mobile max-width (removed for now) : max-w-[564px]
*/}

function Container({ className = "", children }){
  return (
    <div className={`px-[32px] w-full md:max-w-[1432px] mx-auto ${className}`}>{children}</div>
  )
}

export default Container;
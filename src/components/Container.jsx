function Container({ className = "", children }){
  return (
    <div className={`px-[32px] max-w-[500px] md:max-w-[1192px] mx-auto ${className}`}>{children}</div>
  )
}

export default Container;
const Logo = ({ className = "h-20 sm:h-24 md:h-32" }) => {
  return (
    <img 
      src="/amevia.png" 
      alt="Amevia Logo" 
      className={`${className} object-contain`}
      style={{ 
        maxHeight: '100%',
        width: 'auto',
        display: 'block',
        backgroundColor: 'transparent'
      }}
    />
  )
}

export default Logo


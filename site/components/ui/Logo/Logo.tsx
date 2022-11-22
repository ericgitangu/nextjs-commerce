const Logo = ({ className = '', ...props }) => (
  <img
    width="64"
    height="64"
    src="./icon-144X144.png"
    className={className}
    {...props}
  />
)

export default Logo

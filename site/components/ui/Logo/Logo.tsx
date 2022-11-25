import Image from 'next/image'

const Logo = ({ className = '', ...props }) => (
  <Image src="/icon.png" alt="Park & Pick Logo" width="32" height="32"></Image>
)

export default Logo

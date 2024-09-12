import { Link } from 'react-router-dom'
import { LinkProps, Text, TextProps } from '@chakra-ui/react';

const MenuItem = ({children, href="/"}: LinkProps, {...rest}: TextProps) => {
  return (
    <Link to={href}>
        <Text display={"block"} {...rest}>
            {children}
        </Text>
    </Link>
  )
}

export default MenuItem

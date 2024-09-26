import { Link } from '@chakra-ui/next-js';
import { LinkProps, Text, TextProps } from '@chakra-ui/react';

const MenuItem = ({ children, href = "/", target="_self" }: LinkProps, { ...rest }: TextProps) => {
  return (
    <Link href={href} target={target}>
      <Text display={"block"} {...rest}>
        {children}
      </Text>
    </Link>
  )
}

export default MenuItem

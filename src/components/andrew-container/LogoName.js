import { Text } from '@chakra-ui/layout';
import { Tooltip } from '@chakra-ui/tooltip';

export const LogoName = ({colorStroke,backgroundColor}) => {
  return (
    <Tooltip
      label="ABOUT ME"
      bg={colorStroke}
      color={backgroundColor}
      placement="top-start"
      rounded="4"
      hasArrow
      arrowShadowColor={backgroundColor}
    >
      <Text
        fontSize="4em"
        fontWeight="bold"
        lineHeight={['55px']}
      >
        ANDREW HUYNH
      </Text>
    </Tooltip>
  );
};
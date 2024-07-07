import { ColorProps, HStack, LayoutProps, useTheme } from "@chakra-ui/react";

export interface IconProps {
  boxSize: string;
  color: string;
}

export const EmailPixelIcon = ({ boxSize, color }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={boxSize}
    height={boxSize}
    viewBox="0 0 48 48"
    fill="none"
  >
    <path
      d="M44.8006 22.8931H42.6156V25.0925H44.8006V42.6156H47V18.5231H44.8006V22.8931Z"
      fill={color}
    />
    <path d="M42.6156 42.6156H44.8006V44.8006H42.6156V42.6156Z" fill={color} />
    <path d="M42.6156 16.3238H44.8006V18.5231H42.6156V16.3238Z" fill={color} />
    <path
      d="M40.4306 42.6156H38.2312V44.8006H9.75437V42.6156H7.56937V44.8006H5.37V47H42.6156V44.8006H40.4306V42.6156Z"
      fill={color}
    />
    <path d="M36.0463 40.4163H38.2313V42.6156H36.0463V40.4163Z" fill={color} />
    <path d="M33.8469 38.2313H36.0462V40.4163H33.8469V38.2313Z" fill={color} />
    <path d="M33.8469 27.2775H38.2312V29.4769H33.8469V27.2775Z" fill={color} />
    <path d="M31.6619 36.0463H33.8469V38.2313H31.6619V36.0463Z" fill={color} />
    <path d="M29.4769 33.8469H31.6619V36.0462H29.4769V33.8469Z" fill={color} />
    <path d="M29.4769 29.4769H33.8469V31.6619H29.4769V29.4769Z" fill={color} />
    <path d="M29.4769 3.185H31.6619V5.37H29.4769V3.185Z" fill={color} />
    <path
      d="M29.4769 16.3238H25.0925V18.5231H22.9075V16.3238H18.5231V18.5231H16.3238V22.8931H18.5231V25.0925H20.7081V27.2775H22.9075V29.4769H25.0925V27.2775H27.2775V25.0925H29.4769V22.8931H31.6619V18.5231H29.4769V16.3238Z"
      fill={color}
    />
    <path d="M18.5231 31.6619H29.4769V33.8469H18.5231V31.6619Z" fill={color} />
    <path d="M18.5231 1H29.4769V3.185H18.5231V1Z" fill={color} />
    <path d="M16.3238 33.8469H18.5231V36.0462H16.3238V33.8469Z" fill={color} />
    <path d="M14.1388 29.4769H18.5231V31.6619H14.1388V29.4769Z" fill={color} />
    <path d="M16.3238 3.185H18.5231V5.37H16.3238V3.185Z" fill={color} />
    <path d="M14.1388 36.0463H16.3238V38.2313H14.1388V36.0463Z" fill={color} />
    <path d="M11.9537 38.2313H14.1387V40.4163H11.9537V38.2313Z" fill={color} />
    <path d="M9.75436 27.2775H14.1387V29.4769H9.75436V27.2775Z" fill={color} />
    <path d="M9.75436 40.4163H11.9537V42.6156H9.75436V40.4163Z" fill={color} />
    <path
      d="M7.56937 25.0925H5.37V27.2775H9.75437V9.75437H38.2312V27.2775H42.6156V25.0925H40.4306V16.3237H42.6156V14.1387H40.4306V7.56937H33.8469V5.37H31.6619V7.56937H16.3237V5.37H14.1387V7.56937H7.56937V14.1387H5.37V16.3237H7.56937V25.0925Z"
      fill={color}
    />
    <path d="M3.185 42.6156H5.37V44.8006H3.185V42.6156Z" fill={color} />
    <path d="M3.185 16.3238H5.37V18.5231H3.185V16.3238Z" fill={color} />
    <path
      d="M3.185 25.0925H5.37V22.8931H3.185V18.5231H1V42.6156H3.185V25.0925Z"
      fill={color}
    />
  </svg>
);
export const LinkedInPixelIcon = ({ boxSize, color }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={boxSize}
    height={boxSize}
    viewBox="0 0 48 48"
    fill="none"
  >
    <path d="M44.8006 5.38437H47V42.6156H44.8006V5.38437Z" fill={color} />
    <path d="M42.6156 42.6156H44.8006V44.815H42.6156V42.6156Z" fill={color} />
    <path d="M42.6156 3.185H44.8006V5.38437H42.6156V3.185Z" fill={color} />
    <path d="M40.4163 7.56937H42.6156V40.4306H40.4163V7.56937Z" fill={color} />
    <path d="M5.37 44.815H42.6156V47H5.37V44.815Z" fill={color} />
    <path d="M7.5694 40.4306H40.4163V42.6156H7.5694V40.4306Z" fill={color} />
    <path
      d="M33.8469 22.9075H31.6619V20.7081H27.2775V22.9075H25.0925V20.7081H20.7081V33.8613H25.0925V27.2919H27.2775V25.0925H29.4769V27.2919H31.6619V33.8613H36.0463V25.0925H33.8469V22.9075Z"
      fill={color}
    />
    <path d="M11.9394 20.7081H16.3238V33.8613H11.9394V20.7081Z" fill={color} />
    <path d="M11.9394 14.1388H16.3238V18.5231H11.9394V14.1388Z" fill={color} />
    <path d="M7.5694 5.38437H40.4163V7.56937H7.5694V5.38437Z" fill={color} />
    <path d="M5.37 1H42.6156V3.185H5.37V1Z" fill={color} />
    <path d="M5.37 7.56937H7.56937V40.4306H5.37V7.56937Z" fill={color} />
    <path d="M3.185 42.6156H5.37V44.815H3.185V42.6156Z" fill={color} />
    <path d="M3.185 3.185H5.37V5.38437H3.185V3.185Z" fill={color} />
    <path d="M1 5.38437H3.185V42.6156H1V5.38437Z" fill={color} />
  </svg>
);
export const GitHubPixelIcon = ({ boxSize, color }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={boxSize}
    height={boxSize}
    viewBox="0 0 48 48"
    fill="none"
  >
    <path d="M15 0H12V3H15V0Z" fill={color} />
    <path d="M18 0H15V3H18V0Z" fill={color} />
    <path d="M21 0H18V3H21V0Z" fill={color} />
    <path d="M24 0H21V3H24V0Z" fill={color} />
    <path d="M27 0H24V3H27V0Z" fill={color} />
    <path d="M30 0H27V3H30V0Z" fill={color} />
    <path d="M33 0H30V3H33V0Z" fill={color} />
    <path d="M36 0H33V3H36V0Z" fill={color} />
    <path d="M12 3H9V6H12V3Z" fill={color} />
    <path d="M15 3H12V6H15V3Z" fill={color} />
    <path d="M18 3H15V6H18V3Z" fill={color} />
    <path d="M21 3H18V6H21V3Z" fill={color} />
    <path d="M24 3H21V6H24V3Z" fill={color} />
    <path d="M27 3H24V6H27V3Z" fill={color} />
    <path d="M30 3H27V6H30V3Z" fill={color} />
    <path d="M33 3H30V6H33V3Z" fill={color} />
    <path d="M36 3H33V6H36V3Z" fill={color} />
    <path d="M39 3H36V6H39V3Z" fill={color} />
    <path d="M9 6H6V9H9V6Z" fill={color} />
    <path d="M12 6H9V9H12V6Z" fill={color} />
    <path d="M15 6H12V9H15V6Z" fill={color} />
    <path d="M18 6H15V9H18V6Z" fill={color} />
    <path d="M21 6H18V9H21V6Z" fill={color} />
    <path d="M24 6H21V9H24V6Z" fill={color} />
    <path d="M27 6H24V9H27V6Z" fill={color} />
    <path d="M30 6H27V9H30V6Z" fill={color} />
    <path d="M33 6H30V9H33V6Z" fill={color} />
    <path d="M36 6H33V9H36V6Z" fill={color} />
    <path d="M39 6H36V9H39V6Z" fill={color} />
    <path d="M42 6H39V9H42V6Z" fill={color} />
    <path d="M6 9H3V12H6V9Z" fill={color} />
    <path d="M9 9H6V12H9V9Z" fill={color} />
    <path d="M12 9H9V12H12V9Z" fill={color} />
    <path d="M18 9H15V12H18V9Z" fill={color} />
    <path d="M21 9H18V12H21V9Z" fill={color} />
    <path d="M24 9H21V12H24V9Z" fill={color} />
    <path d="M27 9H24V12H27V9Z" fill={color} />
    <path d="M30 9H27V12H30V9Z" fill={color} />
    <path d="M33 9H30V12H33V9Z" fill={color} />
    <path d="M39 9H36V12H39V9Z" fill={color} />
    <path d="M42 9H39V12H42V9Z" fill={color} />
    <path d="M45 9H42V12H45V9Z" fill={color} />
    <path d="M6 12H3V15H6V12Z" fill={color} />
    <path d="M9 12H6V15H9V12Z" fill={color} />
    <path d="M12 12H9V15H12V12Z" fill={color} />
    <path d="M39 12H36V15H39V12Z" fill={color} />
    <path d="M42 12H39V15H42V12Z" fill={color} />
    <path d="M45 12H42V15H45V12Z" fill={color} />
    <path d="M6 15H3V18H6V15Z" fill={color} />
    <path d="M9 15H6V18H9V15Z" fill={color} />
    <path d="M12 15H9V18H12V15Z" fill={color} />
    <path d="M39 15H36V18H39V15Z" fill={color} />
    <path d="M42 15H39V18H42V15Z" fill={color} />
    <path d="M45 15H42V18H45V15Z" fill={color} />
    <path d="M3 18H0V21H3V18Z" fill={color} />
    <path d="M6 18H3V21H6V18Z" fill={color} />
    <path d="M9 18H6V21H9V18Z" fill={color} />
    <path d="M42 18H39V21H42V18Z" fill={color} />
    <path d="M45 18H42V21H45V18Z" fill={color} />
    <path d="M48 18H45V21H48V18Z" fill={color} />
    <path d="M3 21H0V24H3V21Z" fill={color} />
    <path d="M6 21H3V24H6V21Z" fill={color} />
    <path d="M9 21H6V24H9V21Z" fill={color} />
    <path d="M42 21H39V24H42V21Z" fill={color} />
    <path d="M45 21H42V24H45V21Z" fill={color} />
    <path d="M48 21H45V24H48V21Z" fill={color} />
    <path d="M3 24H0V27H3V24Z" fill={color} />
    <path d="M6 24H3V27H6V24Z" fill={color} />
    <path d="M9 24H6V27H9V24Z" fill={color} />
    <path d="M42 24H39V27H42V24Z" fill={color} />
    <path d="M45 24H42V27H45V24Z" fill={color} />
    <path d="M48 24H45V27H48V24Z" fill={color} />
    <path d="M3 27H0V30H3V27Z" fill={color} />
    <path d="M6 27H3V30H6V27Z" fill={color} />
    <path d="M9 27H6V30H9V27Z" fill={color} />
    <path d="M42 27H39V30H42V27Z" fill={color} />
    <path d="M45 27H42V30H45V27Z" fill={color} />
    <path d="M48 27H45V30H48V27Z" fill={color} />
    <path d="M3 30H0V33H3V30Z" fill={color} />
    <path d="M6 30H3V33H6V30Z" fill={color} />
    <path d="M9 30H6V33H9V30Z" fill={color} />
    <path d="M12 30H9V33H12V30Z" fill={color} />
    <path d="M39 30H36V33H39V30Z" fill={color} />
    <path d="M42 30H39V33H42V30Z" fill={color} />
    <path d="M45 30H42V33H45V30Z" fill={color} />
    <path d="M48 30H45V33H48V30Z" fill={color} />
    <path d="M6 33H3V36H6V33Z" fill={color} />
    <path d="M9 33H6V36H9V33Z" fill={color} />
    <path d="M12 33H9V36H12V33Z" fill={color} />
    <path d="M15 33H12V36H15V33Z" fill={color} />
    <path d="M36 33H33V36H36V33Z" fill={color} />
    <path d="M39 33H36V36H39V33Z" fill={color} />
    <path d="M42 33H39V36H42V33Z" fill={color} />
    <path d="M45 33H42V36H45V33Z" fill={color} />
    <path d="M6 36H3V39H6V36Z" fill={color} />
    <path d="M9 36H6V39H9V36Z" fill={color} />
    <path d="M15 36H12V39H15V36Z" fill={color} />
    <path d="M18 36H15V39H18V36Z" fill={color} />
    <path d="M21 36H18V39H21V36Z" fill={color} />
    <path d="M30 36H27V39H30V36Z" fill={color} />
    <path d="M33 36H30V39H33V36Z" fill={color} />
    <path d="M36 36H33V39H36V36Z" fill={color} />
    <path d="M39 36H36V39H39V36Z" fill={color} />
    <path d="M42 36H39V39H42V36Z" fill={color} />
    <path d="M45 36H42V39H45V36Z" fill={color} />
    <path d="M9 39H6V42H9V39Z" fill={color} />
    <path d="M12 39H9V42H12V39Z" fill={color} />
    <path d="M33 39H30V42H33V39Z" fill={color} />
    <path d="M36 39H33V42H36V39Z" fill={color} />
    <path d="M39 39H36V42H39V39Z" fill={color} />
    <path d="M42 39H39V42H42V39Z" fill={color} />
    <path d="M12 42H9V45H12V42Z" fill={color} />
    <path d="M15 42H12V45H15V42Z" fill={color} />
    <path d="M18 42H15V45H18V42Z" fill={color} />
    <path d="M21 42H18V45H21V42Z" fill={color} />
    <path d="M33 42H30V45H33V42Z" fill={color} />
    <path d="M36 42H33V45H36V42Z" fill={color} />
    <path d="M39 42H36V45H39V42Z" fill={color} />
    <path d="M15 45H12V48H15V45Z" fill={color} />
    <path d="M18 45H15V48H18V45Z" fill={color} />
    <path d="M21 45H18V48H21V45Z" fill={color} />
    <path d="M33 45H30V48H33V45Z" fill={color} />
    <path d="M36 45H33V48H36V45Z" fill={color} />
  </svg>
);
export const InstagramPixelIcon = ({ boxSize, color }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={boxSize}
    height={boxSize}
    viewBox="0 0 48 48"
    fill="none"
  >
    <path
      d="M44.8006 5.38437V16.3381H29.4769V18.5231H31.6619V20.7081H33.8469V18.5231H44.8006V42.6156H47V5.38437H44.8006Z"
      fill={color}
    />
    <path d="M42.6156 42.6156H44.8006V44.815H42.6156V42.6156Z" fill={color} />
    <path d="M42.6156 3.185H44.8006V5.38437H42.6156V3.185Z" fill={color} />
    <path d="M5.37 44.815H42.6156V47H5.37V44.815Z" fill={color} />
    <path d="M38.2313 7.56937H40.4163V11.9537H38.2313V7.56937Z" fill={color} />
    <path d="M33.8469 5.38437H38.2312V7.56937H33.8469V5.38437Z" fill={color} />
    <path d="M33.8469 20.7081H36.0462V31.6619H33.8469V20.7081Z" fill={color} />
    <path d="M33.8469 11.9537H38.2312V14.1387H33.8469V11.9537Z" fill={color} />
    <path d="M31.6619 31.6619H33.8469V33.8612H31.6619V31.6619Z" fill={color} />
    <path d="M31.6619 7.56937H33.8469V11.9537H31.6619V7.56937Z" fill={color} />
    <path d="M29.4769 33.8613H31.6619V36.0463H29.4769V33.8613Z" fill={color} />
    <path
      d="M18.5231 22.9075H16.3237V29.4769H18.5231V31.6619H20.7081V33.8613H27.2775V31.6619H29.4769V29.4769H31.6619V22.9075H29.4769V20.7081H27.2775V18.5231H20.7081V20.7081H18.5231V22.9075ZM22.8931 22.9075H27.2775V27.2919H25.0925V25.0925H22.8931V22.9075Z"
      fill={color}
    />
    <path d="M18.5231 14.1388H29.4769V16.3381H18.5231V14.1388Z" fill={color} />
    <path d="M18.5231 36.0463H29.4769V38.2313H18.5231V36.0463Z" fill={color} />
    <path d="M16.3237 33.8613H18.5231V36.0463H16.3237V33.8613Z" fill={color} />
    <path d="M14.1387 31.6619H16.3237V33.8612H14.1387V31.6619Z" fill={color} />
    <path d="M11.9394 20.7081H14.1388V31.6619H11.9394V20.7081Z" fill={color} />
    <path d="M3.185 42.6156H5.37V44.815H3.185V42.6156Z" fill={color} />
    <path
      d="M3.185 18.5231H5.37V20.7081H11.9394V18.5231H14.1388V20.7081H16.3237V18.5231H18.5231V16.3381H16.3237V3.185H42.6156V1H5.37V3.185H3.185V5.38438H5.37V16.3381H3.185V5.38438H1V42.6156H3.185V18.5231ZM11.9394 3.185H14.1388V16.3381H11.9394V3.185ZM7.56938 3.185H9.75438V16.3381H7.56938V3.185Z"
      fill={color}
    />
  </svg>
);

const Socials = ({
  boxSize = "24",
  color,
  spacing = "2"
}: Partial<IconProps> & { spacing?: string }) => {
  const theme = useTheme();

  const iconColor = color || theme.colors.brand.charcoal[0];

  return (
    <HStack spacing={spacing}>
      <EmailPixelIcon boxSize={boxSize} color={iconColor} />
      <LinkedInPixelIcon boxSize={boxSize} color={iconColor} />
      <GitHubPixelIcon boxSize={boxSize} color={iconColor} />
      <InstagramPixelIcon boxSize={boxSize} color={iconColor} />
    </HStack>
  );
};

export default Socials;

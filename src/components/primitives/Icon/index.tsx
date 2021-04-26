import React from 'react';
import {
  border,
  color,
  flexbox,
  layout,
  space,
  typography,
  position,
} from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
  customTypography,
  customPosition,
} from '../../../utils/customProps';
import styled from 'styled-components/native';
import { useThemeProps } from '../../../hooks';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

import type { IIconProps, IconType } from './types';
import SVGIcon from './SVGIcon';

const componentMap = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
};

function getStyledIconComponent(type: IconType) {
  return styled(componentMap[type])<IIconProps>(
    color,
    space,
    layout,
    flexbox,
    border,
    typography,
    position,
    customPosition,
    customBorder,
    customBackground,
    customOutline,
    customShadow,
    customExtra,
    customLayout,
    customTypography
  );
}

const Icon = ({ type, name, style, ...props }: IIconProps, ref?: any) => {
  const { size, ...newProps } = useThemeProps('Icon', props);
  if (!name) {
    return <SVGIcon {...props} style={style} />;
  }
  const Component = getStyledIconComponent(type ?? 'MaterialIcons');
  const tempStyle = style as any;
  return (
    <Component
      name={name}
      {...newProps}
      ref={ref}
      style={[tempStyle, { fontSize: parseInt(size, 10) }]}
    />
  );
};

export type { IIconProps, IconType };
export { createIcon } from './createIcon';
export default React.memo(React.forwardRef(Icon));

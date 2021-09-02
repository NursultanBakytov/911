import React from 'react'
import { View } from 'react-native' 
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg'

export default ({ style={} }) => (
  <View style={style}>
    <Svg width="100%" height="100%" viewBox="0 0 86 87">
      <Circle cx={43} cy={43} r={43} fill="#FF842C" />
      <Path
        d="M65.5 31.5c0-2.475-2.025-4.5-4.5-4.5H25a4.513 4.513 0 00-4.5 4.5v27c0 2.475 2.025 4.5 4.5 4.5h36c2.475 0 4.5-2.025 4.5-4.5v-27zm-4.5 0L43 42.727 25 31.5h36zm0 27H25V36l18 11.25L61 36v22.5z"
        fill="#FFFFFF"
      />
    </Svg>
  </View>
);
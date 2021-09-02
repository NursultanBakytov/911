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
    <Svg width="100%" height="100%" viewBox="0 0 16 16">
      <Path 
        d="M8.00002 13.9999C8.7364 13.9999 9.33335 13.403 9.33335 12.6666C9.33335 11.9302 8.7364 11.3333 8.00002 11.3333C7.26364 11.3333 6.66669 11.9302 6.66669 12.6666C6.66669 13.403 7.26364 13.9999 8.00002 13.9999Z" 
        fill="#40C9FF"/>
      <Path 
        d="M6.66669 2H9.33335V10H6.66669V2Z" 
        fill="#40C9FF"/>
    </Svg>
  </View>
);
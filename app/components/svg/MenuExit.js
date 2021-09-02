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
        d="M6.72667 10.3933L7.66667 11.3333L11 8L7.66667 4.66667L6.72667 5.60667L8.44667 7.33333H2V8.66667H8.44667L6.72667 10.3933ZM12.6667 2H3.33333C2.59333 2 2 2.6 2 3.33333V6H3.33333V3.33333H12.6667V12.6667H3.33333V10H2V12.6667C2 13.4 2.59333 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2Z" 
        fill="#7B7F98"/>
    </Svg>
  </View>
);
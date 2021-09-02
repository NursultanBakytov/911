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
    <Svg width="100%" height="100%" viewBox="0 0 33 8">
      <Path 
        d="M0.646446 4.35355C0.451183 4.15829 0.451183 3.84171 0.646446 3.64644L3.82843 0.464464C4.02369 0.269201 4.34027 0.269201 4.53553 0.464464C4.7308 0.659726 4.7308 0.976308 4.53553 1.17157L1.70711 4L4.53553 6.82842C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.73079 4.02369 7.73079 3.82843 7.53553L0.646446 4.35355ZM33 4.5L1 4.5L1 3.5L33 3.5L33 4.5Z" 
        fill="#7B7F98"/>
    </Svg>
  </View>
);
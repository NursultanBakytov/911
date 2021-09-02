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

export default ({ style={}, colorFill="#7B7F98" }) => (
  <View style={style}>
    <Svg width="100%" height="100%" viewBox="0 0 12 8">
      <Path 
        d="M12 2.00003L10.59 0.590027L6 5.17003L1.41 0.590026L-6.16331e-08 2.00003L6 8.00003L12 2.00003Z" 
        fill={colorFill} />
    </Svg>
  </View>
);
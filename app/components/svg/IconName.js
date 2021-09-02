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

export default ({ style={}, colorFill="#FF842C" }) => (
  <View style={style}>
    <Svg width="100%" height="100%" viewBox="0 0 16 16">
      <Path
        d="M8 4c.733 0 1.333.6 1.333 1.333 0 .734-.6 1.334-1.333 1.334s-1.333-.6-1.333-1.334C6.667 4.6 7.267 4 8 4zm0 6.667c1.8 0 3.867.86 4 1.333H4c.153-.48 2.207-1.333 4-1.333zm0-8A2.666 2.666 0 108 8a2.666 2.666 0 100-5.333zm0 6.666c-1.78 0-5.333.894-5.333 2.667v1.333h10.666V12c0-1.773-3.553-2.667-5.333-2.667z"
        fill={colorFill}
      />
    </Svg>
  </View>
);
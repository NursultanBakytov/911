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
  Mask
} from 'react-native-svg'

export default ({ style = {}, ...props }) => (
  <View style={style}>
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.636 6.636L12 .272l6.364 6.364a9 9 0 11-12.728 0z"
        fill={'#ff859d'}
      />
    </Svg>
  </View>
)

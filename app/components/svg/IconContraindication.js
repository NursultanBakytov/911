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
        d="M13.0067 2.05333L2.05333 13.0067C2.11333 13.2333 2.23333 13.44 2.39333 13.6067C2.56 13.7667 2.76667 13.8867 2.99333 13.9467L13.9533 2.99333C13.8267 2.53333 13.4667 2.17333 13.0067 2.05333ZM7.92 2L2 7.92V9.80667L9.80667 2H7.92ZM3.33333 2C2.6 2 2 2.6 2 3.33333V4.66667L4.66667 2H3.33333ZM12.6667 14C13.0333 14 13.3667 13.8533 13.6067 13.6067C13.8533 13.3667 14 13.0333 14 12.6667V11.3333L11.3333 14H12.6667ZM6.19333 14H8.08L14 8.08V6.19333L6.19333 14Z" 
        fill="#FB65FE"/>
    </Svg>
  </View>
);
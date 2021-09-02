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

export default ({ style={}, fillColor="#0BCDCF" }) => (
  <View style={style}>
    <Svg width="100%" height="100%" viewBox="0 0 52 52">
      <Path 
        d="M26 0C11.664 0 0 11.663 0 26C0 40.337 11.664 52 26 52C40.336 52 52 40.337 52 26C52 11.663 40.336 0 26 0ZM26 50C12.767 50 2 39.233 2 26C2 12.767 12.767 2 26 2C39.233 2 50 12.767 50 26C50 39.233 39.233 50 26 50Z" 
        fill={fillColor} />
      <Path 
        d="M22.25 33.65L15.6 27L13.3833 29.2167L22.25 38.0834L41.25 19.0834L39.0333 16.8667L22.25 33.65Z" 
        fill={fillColor} />
    </Svg>
  </View>
);
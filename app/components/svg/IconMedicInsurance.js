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
        d="M14 2H1.99996C1.26663 2 0.666626 2.6 0.666626 3.33333V12.6667C0.666626 13.4 1.26663 14 1.99996 14H14C14.7333 14 15.3333 13.4 15.3333 12.6667V3.33333C15.3333 2.6 14.7333 2 14 2ZM14 12.6667H1.99996V3.33333H14V12.6667ZM3.33329 6.66667H9.33329V8H3.33329V6.66667ZM3.33329 4.66667H9.33329V6H3.33329V4.66667Z" 
        fill="#40C9FF"/>
    </Svg>
  </View>
);
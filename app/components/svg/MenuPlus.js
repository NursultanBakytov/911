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
    <Svg width="100%" height="100%" viewBox="0 0 18 18">
      <Path 
        d="M9 17.9954C13.9706 17.9954 18 13.9686 18 9.00133C18 4.03403 13.9706 0.00723267 9 0.00723267C4.02944 0.00723267 0 4.03403 0 9.00133C0 13.9686 4.02944 17.9954 9 17.9954Z" 
        fill="#FB65FE"/>
      <Path 
        d="M14.0228 8.01559H3.97968V9.98435H14.0228V8.01559Z" 
        fill="#FFFFFF"/>
      <Path 
        d="M9.98438 3.97968H8.01562V14.0228H9.98438V3.97968Z" 
        fill="#FFFFFF"/>
    </Svg>
  </View>
);
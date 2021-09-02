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
        d="M11.7733 5.28676L7.99996 1.51343L4.22663 5.28676C2.14663 7.36676 2.14663 10.7468 4.22663 12.8268C5.26663 13.8668 6.63329 14.3868 7.99996 14.3868C9.36663 14.3868 10.7333 13.8668 11.7733 12.8268C13.8533 10.7468 13.8533 7.36676 11.7733 5.28676ZM7.99996 13.0601C6.93329 13.0601 5.92663 12.6468 5.17329 11.8868C4.41329 11.1268 3.99996 10.1268 3.99996 9.06009C3.99996 7.99343 4.41329 6.98676 5.17329 6.23343L7.99996 3.40009V13.0601Z" 
        fill="#FB65FE"/>
    </Svg>
  </View>
);
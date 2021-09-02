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
    <Svg width="100%" height="100%" viewBox="0 0 22 28">
      <Path 
        d="M19 0.666656H2.99998C1.53331 0.666656 0.333313 1.86666 0.333313 3.33332V24.6667C0.333313 26.1333 1.53331 27.3333 2.99998 27.3333H19C20.4666 27.3333 21.6666 26.1333 21.6666 24.6667V3.33332C21.6666 1.86666 20.4666 0.666656 19 0.666656ZM9.66665 3.33332V9.99999L8.33331 8.99999L6.99998 9.99999V3.33332H9.66665ZM19 24.6667H2.99998V3.33332H4.33331V15.3333L8.33331 12.3333L12.3333 15.3333V3.33332H19V24.6667ZM10.04 21.9467L7.66665 19.08L4.33331 23.3333H17.6666L13.3733 17.6533L10.04 21.9467Z" 
        fill="#8364FF"/>
    </Svg>
  </View>
);
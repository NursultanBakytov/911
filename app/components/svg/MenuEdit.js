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
    <Svg width="100%" height="100%" viewBox="0 0 21 21">
      <Path 
        d="M2.625 15.0938V18.375H5.90625L15.5837 8.6975L12.3025 5.41625L2.625 15.0938ZM5.18 16.625H4.375V15.82L12.3025 7.8925L13.1075 8.6975L5.18 16.625ZM18.1212 4.92625L16.0738 2.87875C15.8988 2.70375 15.68 2.625 15.4525 2.625C15.225 2.625 15.0062 2.7125 14.84 2.87875L13.2388 4.48L16.52 7.76125L18.1212 6.16C18.4625 5.81875 18.4625 5.2675 18.1212 4.92625Z" 
        fill="#999999"/>
    </Svg>
  </View>
);
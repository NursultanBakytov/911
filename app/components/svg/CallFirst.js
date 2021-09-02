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
    <Svg width="100%" height="100%" viewBox="0 0 112 112">
      <Circle cx={56} cy={52} r={45} fill="#FF5858" />
      <Path
        d="M55.731 65V42.817h-5.11l1.675-2.597h6.34V65h-2.905z"
        fill="#FFFFFF"
      />
    </Svg>
  </View>
);
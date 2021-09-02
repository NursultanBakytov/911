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
    <Svg width="100%" height="100%" viewBox="0 0 16 17">
      <Path
        d="M12.667 2.758H12V1.465h-1.333v1.293H5.333V1.465H4v1.293h-.667c-.74 0-1.326.582-1.326 1.292L2 13.098c0 .71.593 1.292 1.333 1.292h9.334c.733 0 1.333-.582 1.333-1.292V4.05c0-.71-.6-1.292-1.333-1.292zm0 10.34H3.333V5.989h9.334v7.109zm-8-5.816H8v3.23H4.667v-3.23z"
        fill="#519DFF"
      />
    </Svg>
  </View>
);
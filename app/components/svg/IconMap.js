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

/*
"#FF842C" orange
"#FB65FE" purple
"#FFCF17" yellow
*/

export default ({ style={}, colorFill="#FF842C" }) => (
  <View style={style}>
    <Svg width="100%" height="100%" viewBox="0 0 16 16">
      <Path
        d="M8 1.333A4.663 4.663 0 003.333 6C3.333 9.5 8 14.667 8 14.667S12.667 9.5 12.667 6A4.663 4.663 0 008 1.333zM4.667 6a3.335 3.335 0 016.666 0c0 1.92-1.92 4.793-3.333 6.587C6.613 10.807 4.667 7.9 4.667 6z"
        fill={colorFill}
      />
      <Path
        d="M8 7.667a1.667 1.667 0 100-3.334 1.667 1.667 0 000 3.334z"
        fill={colorFill}
      />
    </Svg>
  </View>
);
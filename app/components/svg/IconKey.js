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
"#40C9FF" blue light 
"#519DFF" blue dark
*/

export default ({ style={}, colorFill="#40C9FF" }) => (
  <View style={style}>
    <Svg width="100%" height="100%" viewBox="0 0 16 16">
      <Path
        d="M14.667 12.667h-4V10H8.88a4.663 4.663 0 01-4.213 2.667A4.672 4.672 0 010 8a4.672 4.672 0 014.667-4.667A4.67 4.67 0 018.88 6H16v4h-1.333v2.667zM12 11.333h1.333V8.667h1.334V7.333H7.96l-.153-.446a3.337 3.337 0 00-3.14-2.22 3.335 3.335 0 000 6.666 3.337 3.337 0 003.14-2.22l.153-.446H12v2.666zM4.667 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-2.667C4.3 7.333 4 7.633 4 8c0 .367.3.667.667.667.366 0 .666-.3.666-.667 0-.367-.3-.667-.666-.667z"
        fill={colorFill}
      />
    </Svg>
  </View>
);
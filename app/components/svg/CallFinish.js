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
    <Svg width="100%" height="100%" viewBox="0 0 70 70">
      <Circle cx={35} cy={35} r={35} fill="#FF5858" />
      <Path
        d="M47.46 36.54c-.95-.83-1.97-1.55-3.04-2.14V32c1.61.79 3.14 1.8 4.55 3.03l-1.51 1.51zm-21.88-2.16c-1.09.61-2.11 1.33-3.05 2.15l-1.49-1.49c1.41-1.23 2.94-2.24 4.55-3.05l-.01 2.39zM48.5 39.5L52 36c.55-.55.55-1.45 0-2-9.39-9.39-24.61-9.39-34 0-.55.55-.55 1.45 0 2l3.49 3.49c.55.55 1.45.55 2 0 1.24-1.24 2.65-2.25 4.14-3 .14-.06.26-.16.36-.26.26-.26.41-.61.42-1v-4.4c4.28-1.38 8.91-1.39 13.18 0v4.4c0 .56.31 1.03.77 1.27 1.49.75 2.89 1.75 4.14 3 .55.55 1.45.55 2 0z"
        fill="#FFFFFF"
      />
    </Svg>
  </View>
);
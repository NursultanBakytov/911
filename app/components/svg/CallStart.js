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
    <Svg width="100%" height="100%" viewBox="0 0 86 86">
      <Circle cx={43} cy={43} r={43} fill="#FF5858" />
      <Path
        d="M33.445 30.75c.105 1.557.367 3.08.788 4.532l-2.1 2.1a25.945 25.945 0 01-1.33-6.632h2.642zM50.7 51.785c1.487.42 3.01.683 4.55.788v2.607a26.996 26.996 0 01-6.65-1.313l2.1-2.082zM35.125 27.25H29c-.962 0-1.75.788-1.75 1.75 0 16.432 13.318 29.75 29.75 29.75.962 0 1.75-.788 1.75-1.75v-6.108c0-.962-.788-1.75-1.75-1.75-2.17 0-4.288-.35-6.248-.997a1.47 1.47 0 00-.542-.088c-.455 0-.892.175-1.242.508l-3.85 3.85c-4.953-2.538-9.013-6.58-11.533-11.532l3.85-3.85c.49-.49.63-1.173.438-1.785A19.88 19.88 0 0136.875 29c0-.962-.788-1.75-1.75-1.75z"
        fill="#FFFFFF"
      />
    </Svg>
  </View>
);
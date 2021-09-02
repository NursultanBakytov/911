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
        d="M6 9.167c-1.56 0-4.667.78-4.667 2.333v1.167h9.334V11.5c0-1.553-3.107-2.333-4.667-2.333zm-3.107 2.166c.56-.386 1.914-.833 3.107-.833 1.193 0 2.547.447 3.107.833H2.893zM6 8a2.336 2.336 0 002.333-2.333A2.336 2.336 0 006 3.333a2.336 2.336 0 00-2.333 2.334A2.336 2.336 0 006 8zm0-3.333c.553 0 1 .446 1 1 0 .553-.447 1-1 1-.553 0-1-.447-1-1 0-.554.447-1 1-1zm4.693 4.54C11.467 9.767 12 10.513 12 11.5v1.167h2.667V11.5c0-1.347-2.334-2.113-3.974-2.293zM10 8a2.336 2.336 0 002.333-2.333A2.336 2.336 0 0010 3.333c-.36 0-.693.087-1 .234.42.593.667 1.32.667 2.1S9.42 7.173 9 7.767c.307.146.64.233 1 .233z"
        fill="#FF842C"
      />
    </Svg>
  </View>
);
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
        d="M14.6667 2H1.33333C0.6 2 0 2.6 0 3.33333V12.6667C0 13.4 0.6 14 1.33333 14H14.6667C15.4 14 15.9933 13.4 15.9933 12.6667L16 3.33333C16 2.6 15.4 2 14.6667 2ZM14.6667 12.6667H1.33333V3.33333H14.6667V12.6667ZM14 4H9.33333V7.33333H14V4ZM13.3333 5.33333L11.6667 6.5L10 5.33333V4.66667L11.6667 5.83333L13.3333 4.66667V5.33333ZM6 8C7.1 8 8 7.1 8 6C8 4.9 7.1 4 6 4C4.9 4 4 4.9 4 6C4 7.1 4.9 8 6 8ZM6 5.33333C6.36667 5.33333 6.66667 5.63333 6.66667 6C6.66667 6.36667 6.36667 6.66667 6 6.66667C5.63333 6.66667 5.33333 6.36667 5.33333 6C5.33333 5.63333 5.63333 5.33333 6 5.33333ZM10 11.06C10 9.39333 7.35333 8.67333 6 8.67333C4.64667 8.67333 2 9.39333 2 11.06V12H10V11.06ZM3.65333 10.6667C4.14667 10.3333 5.13333 10 6 10C6.86667 10 7.84667 10.3267 8.34667 10.6667H3.65333Z" 
        fill="#519DFF"
      />
    </Svg>
  </View>
);
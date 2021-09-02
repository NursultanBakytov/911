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
        d="M63.216 62.163V65H48.143l5.28-6.272c.354-.41.861-1.008 1.522-1.794 4.067-4.82 6.1-8.186 6.1-10.1 0-1.288-.455-2.336-1.366-3.145-.9-.82-2.085-1.23-3.555-1.23-1.584 0-2.797.444-3.64 1.332-.843.878-1.265 2.148-1.265 3.812v.29h-2.803c0-.08-.005-.194-.017-.342a4.736 4.736 0 01-.017-.324c0-2.37.69-4.21 2.068-5.52 1.379-1.322 3.304-1.983 5.777-1.983 2.426 0 4.323.615 5.69 1.846 1.38 1.219 2.068 2.916 2.068 5.093 0 1.572-.467 3.201-1.401 4.887-.923 1.675-2.564 3.8-4.922 6.375l-3.93 4.238h9.484z"
        fill="#FFFFFF"
      />
    </Svg>
  </View>
);
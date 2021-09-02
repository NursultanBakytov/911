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
    <Svg width="100%" height="100%" viewBox="0 0 114 114">
      <Path 
        d="M52.5385 33.8333H61.9476V43.2429H52.5385V33.8333ZM52.5385 52.6526H61.9476V80.8816H52.5385V52.6526ZM57.2431 10.3091C31.2738 10.3091 10.1973 31.3867 10.1973 57.3574C10.1973 83.3281 31.2738 104.406 57.2431 104.406C83.2123 104.406 104.289 83.3281 104.289 57.3574C104.289 31.3867 83.2123 10.3091 57.2431 10.3091ZM57.2431 94.9961C36.4959 94.9961 19.6064 78.1057 19.6064 57.3574C19.6064 36.6091 36.4959 19.7188 57.2431 19.7188C77.9903 19.7188 94.8797 36.6091 94.8797 57.3574C94.8797 78.1057 77.9903 94.9961 57.2431 94.9961Z" 
        fill="#40C9FF"/>
    </Svg>
  </View>
);
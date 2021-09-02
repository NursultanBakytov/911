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
    <Svg width="100%" height="100%" viewBox="0 -100 600 600">
    <Path d="M249-70C110.9-70-1,41.9-1,180s111.9,250,250,250s250-111.9,250-250S387.1-70,249-70z M413.2,344.1
			c-38.4-34.2-83.2-49-93.2-52c-28.3-23.7-16.8-50.1,3.8-87.5c3.1-5.7,6.2-11.2,8.8-16.5c15.3-30.6,12.6-50,10.3-57.8
			c6-22,11.2-83.2-19.6-116.5C304.9-6,278-11.8,243.1-3.4c-36.8,0.2-63.5,11.6-79.5,33.8c-27.6,38.3-13.1,95.6-9.1,109.1
			c-7.8,27.6,8.1,46.7,11.4,50.3c3.8,5.2,45.8,65.6,10.6,102.9l-12,5.3c-36.4,16.1-61.6,27.3-82.4,43.2
			C41.8,299.5,16.9,242.7,16.9,180C16.9,51.8,120.8-52.1,249-52.1S481.1,51.8,481.1,180C481.1,244.1,455.2,302.1,413.2,344.1z"
      fill="#999999"  
    />
    </Svg>
  </View>
);
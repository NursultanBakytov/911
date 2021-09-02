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
    <Svg width="100%" height="100%" viewBox="0 0 100 70">
      <G clipPath="url(#prefix__clip02)">
        <Path
          d="M47.574 6.962C45.886 5.063 45.886 0 45.886 0h24.895c6.088 0 12.447 3.165 12.447 3.165C91.245 6.54 100 15.699 100 26.477v15.4c0 10.778-8.737 19.515-19.515 19.515h-4.92c4.225-4.855 7.452-10.546 7.452-16.6 0-17.523-18.16-23.933-27.035-13.129-6.74-8.188-20.094-6.002-24.947 4.413H5.591a5.59 5.59 0 110-11.181H48.1c.528 0 .739-1.266 0-1.266h-31.54a5.59 5.59 0 010-11.182h49.307c1.01 0 .904-1.476-.15-1.476h-10.76c-3.088 0-5.696-2.11-7.384-4.009zM30.35 37.764H12.553a5.59 5.59 0 000 11.181h17.156a18.276 18.276 0 01-.49-4.153c0-2.609.409-4.956 1.132-7.028zm-.304 12.447H25a5.59 5.59 0 100 11.181h11.596c-2.908-3.376-5.338-7.156-6.55-11.181z"
          fill="#519DFF"
        />
        <Path
          d="M75.19 47.18c0 12.548-19.41 22.916-19.41 22.916S36.564 59.727 36.564 47.18c0-12.548 13.235-16.648 19.215-9.401 6.371-7.737 19.41-3.147 19.41 9.4z"
          fill="#FFB641"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip02">
          <Path fill="#fff" d="M0 0h100v70.095H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  </View>
);
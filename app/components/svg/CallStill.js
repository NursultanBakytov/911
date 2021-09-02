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
    <Svg width="100%" height="100%" viewBox="0 0 86 87">
      <G clipPath="url(#prefix__clip0)">
        <Circle cx={43} cy={43} r={43} fill="#FF842C" />
        <Path
          d="M30.233 28.625l-2.35 2.226 7.267 6.882-.483.474H28v9.47h6.667L43 55.572V45.168l6.967 6.598c-1.084.774-2.3 1.39-3.634 1.752v3.252a15.26 15.26 0 006.017-2.762l3.417 3.236 2.35-2.226-27.884-26.393zm9.434 19.321l-3.617-3.425h-4.717v-3.157h4.717l1.467-1.39 2.15 2.037v5.935zm15-5.004c0 1.295-.25 2.542-.684 3.694l2.55 2.415A13.49 13.49 0 0058 42.942c0-6.756-4.983-12.407-11.667-13.843v3.251c4.817 1.358 8.334 5.588 8.334 10.592zM43 30.314l-3.133 2.968L43 36.249v-5.935zm7.5 12.628c0-2.794-1.7-5.193-4.167-6.361v2.825l4.134 3.915c.016-.126.033-.252.033-.379z"
          fill="#FFFFFF"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#FFFFFF" transform="translate(0 .303)" d="M0 0h86v86H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  </View>
);
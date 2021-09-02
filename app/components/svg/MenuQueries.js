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
      <G clipPath="url(#prefix__clip04)">
        <Path d="M105.857 33.9288C105.857 39.0287 104.345 44.0141 101.511 48.2546C98.678 52.495 94.6508 55.8 89.9391 57.7517C85.2274 59.7033 80.0428 60.214 75.0408 59.219C70.0389 58.2241 65.4443 55.7682 61.8381 52.162C58.2319 48.5558 55.7761 43.9613 54.7811 38.9593C53.7862 33.9574 54.2968 28.7727 56.2485 24.061C58.2001 19.3493 61.5052 15.3221 65.7456 12.4887C69.986 9.65537 74.9714 8.14307 80.0714 8.14307" 
          fill="#FFFFFF"
          stroke="#519DFF"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round" />
        <Path d="M105.857 13.5713L82.4618 37.0562C82.1642 37.3553 81.8109 37.5927 81.4219 37.7546C81.0329 37.9165 80.616 37.9999 80.1949 37.9999C79.7738 37.9999 79.3569 37.9165 78.9679 37.7546C78.579 37.5927 78.2256 37.3553 77.9281 37.0562L70.5715 29.6745" 
          fill="#FFFFFF"
          stroke="#519DFF"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round" />
        <Path d="M38.5428 111.286L40.7142 85.453H51.5714V70.384C51.5714 64.6747 49.2836 59.1992 45.2114 55.1621C41.1392 51.125 35.6161 48.8569 29.8571 48.8569C24.0981 48.8569 18.575 51.125 14.5028 55.1621C10.4306 59.1992 8.14282 64.6747 8.14282 70.384V85.453H19L21.1714 111.286H38.5428Z" 
          fill="#FFFFFF"
          stroke="#519DFF"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round"/>
        <Path d="M28.5001 38.0002C36.7449 38.0002 43.4287 31.3165 43.4287 23.0716C43.4287 14.8268 36.7449 8.14307 28.5001 8.14307C20.2553 8.14307 13.5715 14.8268 13.5715 23.0716C13.5715 31.3165 20.2553 38.0002 28.5001 38.0002Z" 
          fill="#FFFFFF"
          stroke="#519DFF"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round"/>
      </G>
      <Defs>
        <ClipPath id="prefix__clip04">
          <Rect width="114" height="114" fill="#FFFFFF"/>
        </ClipPath>
      </Defs>
    </Svg>
  </View>
);
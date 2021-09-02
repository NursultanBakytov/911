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

export default ({ style={}, colorFill="#FFFFFF" }) => (
  <View style={style}>
    <Svg width="100%" height="100%" viewBox="0 0 83 82">
      <Path d="M0.662598 20.6521H21.0126V0.304321H0.662598V20.6521ZM31.1876 81.6956H51.5376V61.3478H31.1876V81.6956ZM0.662598 81.6956H21.0126V61.3478H0.662598V81.6956ZM0.662598 51.1739H21.0126V30.826H0.662598V51.1739ZM31.1876 51.1739H51.5376V30.826H31.1876V51.1739ZM61.7126 0.304321V20.6521H82.0626V0.304321H61.7126ZM31.1876 20.6521H51.5376V0.304321H31.1876V20.6521ZM61.7126 51.1739H82.0626V30.826H61.7126V51.1739ZM61.7126 81.6956H82.0626V61.3478H61.7126V81.6956Z" 
        fill={colorFill} />
    </Svg>
  </View>
);
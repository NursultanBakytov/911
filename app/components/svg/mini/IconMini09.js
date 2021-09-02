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
    <Svg width="100%" height="100%" viewBox="0 0 37 37">
      <Path 
        d="M12.524 36.9995C8.41104 23.4467 17.1017 18.4981 17.1017 18.4981C16.4936 25.7301 20.6033 31.3643 20.6033 31.3643C22.1149 30.9082 24.9999 28.7768 24.9999 28.7768C24.9999 31.3643 23.4776 36.9963 23.4776 36.9963C23.4776 36.9963 28.8067 32.8758 30.4842 26.0319C32.1596 19.1881 27.293 12.3174 27.293 12.3174C27.5862 17.1613 25.9475 21.9254 22.7369 25.5651C22.8976 25.3797 23.0323 25.1738 23.1358 24.9506C23.7126 23.797 24.6387 20.7988 24.0964 13.8558C23.3331 4.10974 14.5023 0 14.5023 0C15.2635 5.93821 12.9811 7.30632 7.63481 18.5779C2.28848 29.8474 12.524 36.9995 12.524 36.9995Z" 
        fill={colorFill}/>
    </Svg>
  </View>
);
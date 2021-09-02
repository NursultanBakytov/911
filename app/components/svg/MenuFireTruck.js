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

export default ({ style={}, colorFill="#FF5858" }) => (
  <View style={style}>
    <Svg width="100%" height="100%" viewBox="0 0 50 50">
      <Path
        d="M33.817,13.3706H16.3286L14.8817,0.1618L16.3436,0L17.649,11.8969H32.489L33.7934,0.0021L35.2575,0.1618L33.817,13.3706Z"
        fill={colorFill} />
      <Path
        d="M34.0143,6.5219H16.1229V8.9441H34.0143V6.5219Z"
        fill={colorFill} />
      <Path
        d="M34.7452,1.8081H16.1229V4.2282H34.7452V1.8081Z"
        fill={colorFill} />
      <Path
        d="M30.8,35.3915V39.8727H41.1727V11.2559H8.9655V39.8716H19.3404V35.3905L30.8,35.3915ZM34.3894,35.5984C32.7517,35.5984 31.4259,34.2747 31.4259,32.637C31.4259,31.0036 32.7506,29.6746 34.3894,29.6746C36.0239,29.6746 37.355,31.0004 37.355,32.637C37.3529,34.2747 36.0239,35.5984 34.3894,35.5984ZM25.6704,14.4016H39.2596V22.529H25.6704V14.4016ZM10.884,14.4016H24.4678V22.529H10.884V14.4016ZM16.1411,35.3679C14.5034,35.3679 13.1765,34.04 13.1765,32.4055C13.1765,30.77 14.5023,29.4431 16.1411,29.4431C17.7745,29.4431 19.1014,30.7678 19.1014,32.4055C19.1014,34.04 17.7756,35.3679 16.1411,35.3679Z"
        fill={colorFill} />
      <Path
        d="M30.7999,41.5179V44.3581H19.3404V41.5179H7.0866V45.1844H43.0494V41.5179H30.7999Z"
        fill={colorFill} />
      <Path
        d="M30.7999,39.8716H19.3404V41.5178H30.7999V39.8716Z"
        fill={colorFill} />
      <Path
        d="M14.1518,45.1844H8.9643V50H14.1518V45.1844Z"
        fill={colorFill} />
      <Path
        d="M41.1726,45.1844H35.9884V50H41.1726V45.1844Z"
        fill={colorFill} />
      <Path
        d="M46.3398,18.4648H42.0302V26.4721H46.3398V18.4648Z"
        fill={colorFill} />
      <Path
        d="M7.9687,18.4648H3.659V26.4721H7.9687V18.4648Z"
        fill={colorFill} />
    </Svg>
  </View>
);
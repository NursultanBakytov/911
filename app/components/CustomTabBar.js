import React from 'react'
import {
  View, 
  Text,
  TouchableOpacity,
} from 'react-native'

import {
  CallKeyboard,
  CallSOS,
  MenuReport,
} from './Icon'

const Component = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection:'row', borderTopWidth:1, borderTopColor:'#d8dae6' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const colorTab1 = '#FF5858'
        const colorTab2 = '#FF842c'
        const colorTab3 = '#FFCF17'
        const bgTab = !isFocused ? '#FFFFFF' : 
          (index==0) ? colorTab1 : 
          (index==1) ? colorTab2 : colorTab3
        let icon
        if (index==0)
          icon = <CallSOS style={{width:45, height:45, marginTop:10 }} colorFill={ isFocused ? "#FFFFFF" : "#7B7F98" }  />
        else if (index==1)
          icon = <MenuReport style={{width:38, height:38, marginTop:15 }} colorFill={ isFocused ? "#FFFFFF" : "#7B7F98" } />
        else 
          icon = <CallKeyboard style={{width:32, height:32, marginTop:15 }} colorFill={ isFocused ? "#FFFFFF" : "#7B7F98" } />

        return (
          <TouchableOpacity
            accessibilityRole="button"
            key={index}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, backgroundColor: bgTab, alignItems: 'center', height: 70 }}
          >
            {icon}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default Component
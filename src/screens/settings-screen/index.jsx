import React from "react";
import { View } from "react-native";
import { List, Switch, Divider } from "react-native-paper";
// import HelpScreen from "../help-screen";
import { ThemeContext } from "../../stores/store";
export default function SettingsScreen() {
    const {isDarkModeOn,toggleTheme} = React.useContext(ThemeContext)
    
  return (
    <View>
      {/* <HelpScreen /> */}
      <List.Section>
        <List.Subheader>主题</List.Subheader>
        <List.Item
          title="暗黑模式"
          left={(props) => <List.Icon {...props} icon="weather-night" />}
          right={() => (
            <Switch value={isDarkModeOn} onValueChange={toggleTheme} />
          )}
        />
      </List.Section>

      <Divider />

      <List.Section>
        <List.Subheader>关于</List.Subheader>
        <List.Item
          title="Help"
          left={(props) => <List.Icon {...props} icon="help-circle" />}
          onPress={() => navigation.navigate("Help")}
        />
      </List.Section>
      <Divider />
    </View>
  );
}

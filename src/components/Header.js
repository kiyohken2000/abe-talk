import { View, Text, StyleSheet } from "react-native";
import { colors, fontSize } from "@/theme";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>kentyo.fm</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: colors.grayLight,
    backgroundColor: colors.whitesmoke
  },
  label: {
    fontSize: fontSize.middle
  }
})
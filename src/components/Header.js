import { View, Text, StyleSheet } from "react-native";
import { colors, fontSize } from "@/theme";
import { version } from "@/config";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{`Abe Talk version ${version}`}</Text>
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
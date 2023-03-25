import { View, Text, StyleSheet } from "react-native";
import { colors, fontSize } from "@/theme";

export default function RenderTag(props) {
  const { item } = props

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.label}>{item}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  button: {
    backgroundColor: colors.lightPurple,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center'
  },
  label: {
    color: colors.white,
    fontSize: fontSize.middle
  }
})
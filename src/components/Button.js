import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, fontSize } from "@/theme";

export default function Button(props) {
  const { onPress, label, color, labelColor } = props

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor: color}]}
    >
      <Text style={[styles.label, {color: labelColor}]}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    width: '100%'
  },
  label: {
    fontSize: fontSize.large
  }
})
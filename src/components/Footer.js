import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors, fontSize } from "@/theme";
import { useRouter } from "next/router";
import { kenmouUrl } from "@/config";

export default function Footer() {
  const router = useRouter()

  const onLinkPress = () => {
    window.open(kenmouUrl, '_blank')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onLinkPress}
      >
        <Text style={styles.label}>ニュー速(嫌儲)</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: colors.grayLight,
    backgroundColor: colors.whitesmoke
  },
  label: {
    fontSize: fontSize.small,
    color: colors.lightPurple,
    textDecorationLine: 'underline'
  }
})
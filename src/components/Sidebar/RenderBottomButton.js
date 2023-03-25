import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, fontSize } from "@/theme";
import { useRouter } from "next/router";
import { IconContext } from 'react-icons'

export default function RenderBottomButton(props) {
  const { item } = props
  const router = useRouter()
  const isFocus = router.pathname === item.screen

  const onButtonPress = () => {
    router.push(item.screen)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: isFocus?colors.blueLight:null}]}
        onPress={onButtonPress}
      >
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{item.label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    fontSize: fontSize.small,
    color: colors.white
  },
  button: {
    backgroundColor: colors.gray,
    paddingVertical: 5,
    borderRadius: 5,
    width: '50%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  labelContainer: {
  }
})
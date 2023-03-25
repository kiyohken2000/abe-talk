import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors, fontSize } from "@/theme";
import { useRouter } from "next/router";
import { IconContext } from 'react-icons'

export default function RenderSideButton(props) {
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
        <View style={styles.iconContainer}>
          <IconContext.Provider value={{ color: isFocus?colors.darkPurple:colors.white, size: 20 }}>
            {item.icon()}
          </IconContext.Provider>
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{item.label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignItems: 'center'
  },
  button: {
    backgroundColor: colors.gray,
    width: '70%',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  label: {
    color: colors.white,
    fontSize: fontSize.middle
  },
  labelContainer: {
    flex: 2,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center'
  }
})
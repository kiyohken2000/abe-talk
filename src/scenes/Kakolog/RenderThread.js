import { View, Text, StyleSheet } from "react-native";
import { fontSize, colors } from "@/theme";
import RenderIcons from "../Voice/RenderIcons";

export default function RenderThread(props) {
  const { id, title, voiceUrl } = props.item

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.iconsSpace}/>
        <View style={styles.iconsContainer}>
          <RenderIcons
            voiceSource={voiceUrl}
            id={id}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: colors.grayLight,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: fontSize.middle,
  },
  titleContainer: {

  },
  buttonsContainer: {
    paddingTop: 10,
    flexDirection: 'row'
  },
  iconsContainer: {
    flex: 1
  },
  iconsSpace: {
    flex: 3
  }
})
import { View, StyleSheet, Text } from "react-native";
import { colors, fontSize } from "@/theme";
import { IconContext } from 'react-icons'
import { FaQuestionCircle, FaComment } from 'react-icons/fa'
import RenderIcons from "./RenderIcons";

export default function RenderItem(props) {
  const { question, answer, voiceSource, id } = props.item

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.elementContainer}>
          <IconContext.Provider value={{ color: colors.darkPurple, size: 20 }}>
            <FaQuestionCircle/>
          </IconContext.Provider>
          <View style={styles.lebelContainer}>
            <Text style={styles.label} adjustsFontSizeToFit>{question}</Text>
          </View>
        </View>
        <View style={styles.elementContainer}>
          <IconContext.Provider value={{ color: colors.darkPurple, size: 20 }}>
            <FaComment/>
          </IconContext.Provider>
          <View style={styles.lebelContainer}>
            <Text style={styles.label} adjustsFontSizeToFit>{answer}</Text>
          </View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <RenderIcons
          voiceSource={voiceSource}
          id={id}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: colors.grayLight,
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5
  },
  leftContainer: {
    flex: 5
  },
  rightContainer: {
    flex: 1
  },
  elementContainer: {
    flexDirection: 'row'
  },
  lebelContainer: {
    paddingLeft: 5,
    flexShrink: 10
  },
  label: {
    fontSize: fontSize.middle
  }
})
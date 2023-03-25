import { View, StyleSheet, Text } from "react-native";
import { colors } from "@/theme";
import RenderBottomButton from "./RenderBottomButton";
import { items } from "./items";

export default function BottomBar() {
  return (
    <View style={styles.container}>
      {items.map((item, i) => {
        return (
          <RenderBottomButton
            key={i}
            item={item}
          />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkPurple,
    flexDirection: 'row'
  }
})
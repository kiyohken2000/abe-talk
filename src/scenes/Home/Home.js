import { View, StyleSheet } from "react-native"
import Main from "./Main"

export default function Home() {

  return (
    <View style={styles.container}>
      <Main />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
import { useEffect } from "react";
import ScreenTemplate from "@/components/ScreenTemplate";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import { colors, fontSize } from "@/theme";

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    onBackPress()
  }, [])

  const onBackPress = () => {
    router.push('/')
  }

  return (
    <View style={[styles.container]}>
      <View style={styles.labelContainer}>
        <Text>page not found</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          label='ホームに戻る'
          onPress={onBackPress}
          color={colors.darkPurple}
          labelColor={colors.white}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    width: '50%'
  },
  labelContainer: {
    flex: 3,
  }
})
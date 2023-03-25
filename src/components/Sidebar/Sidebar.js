import { View, StyleSheet, TouchableOpacity, useWindowDimensions, Text } from "react-native";
import Image from "next/image";
import { colors } from "@/theme";
import { items } from "./items";
import { useRouter } from "next/router";
import RenderSideButton from "./RenderSideButton";
import PaceSlider from "../PaceSlider";

export default function Sidebar() {
  const router = useRouter()
  const { height, width } = useWindowDimensions()

  const onLogoPress = () => {
    router.push('/')
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <TouchableOpacity
          onPress={onLogoPress}
          style={styles.logoButton}
        >
          <Image
            src="/images/icon.png"
            alt="Sample image"
            width={width * 0.1}
            height={width * 0.1}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.mainContainer}>
        {items.map((item, i) => {
          return (
            <RenderSideButton
              key={i}
              item={item}
            />
          )
        })}
        <View style={styles.sliderContainer}>
          <PaceSlider />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkPurple
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainContainer: {
    flex: 4,
  },
  logoButton: {
    backgroundColor: colors.blueLight,
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sliderContainer: {
    paddingHorizontal: 20
  }
})
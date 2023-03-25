import { colors } from "@/theme";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { Sidebar, BottomBar } from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";

export default function ScreenTemplate(props) {
  const { height, width } = useWindowDimensions()
  const isDesktop = width >= 480
  
  return (
    <View style={[styles.container, { height }]}>
      {isDesktop?
        <View style={styles.sidebarContainer}>
          <Sidebar />
        </View>
        :null
      }
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Header />
        </View>
        <View style={styles.bodyContainer}>
          {props.children}
        </View>
        {!isDesktop?
          <View style={styles.bottomBarContainer}>
            <BottomBar/>
          </View>
          :null
        }
        <View style={styles.footerContainer}>
          <Footer />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'row'
  },
  sidebarContainer: {
    flex: 1
  },
  bottomBarContainer: {
    flex: 1
  },
  mainContainer: {
    flex: 5
  },
  headerContainer: {
    flex: 1
  },
  footerContainer: {
    flex: 1
  },
  bodyContainer: {
    flex: 15
  }
})
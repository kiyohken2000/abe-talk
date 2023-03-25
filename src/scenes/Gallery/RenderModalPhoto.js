import { View, StyleSheet, TouchableOpacity } from "react-native";
import Image from "next/image";
import { IconContext } from 'react-icons'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { colors } from "@/theme";

export default function RenderModalPhoto(props) {
  const { currentPhoto, photos, onNextPhotoPress } = props

  if(!currentPhoto || !photos.length) {
    return (
      <View />
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.sideContainer, {opacity: currentPhoto.id === 0?0:1}]}
        disabled={currentPhoto.id === 0}
        onPress={() => onNextPhotoPress({num: -1})}
      >
        <IconContext.Provider value={{ color: colors.darkPurple, size: 30 }}>
          <FaAngleLeft/>
        </IconContext.Provider>
      </TouchableOpacity>
      <View style={styles.mainContainer}>
        <Image
          src={currentPhoto.photoUrl}
          alt='abe shinzo'
          fill
          style={{ objectFit: 'contain' }}
        />
      </View>
      <TouchableOpacity
        style={[styles.sideContainer, {opacity: photos.slice(-1)[0].id === currentPhoto.id?0:1}]}
        disabled={photos.slice(-1)[0].id === currentPhoto.id}
        onPress={() => onNextPhotoPress({num: 1})}
      >
        <IconContext.Provider value={{ color: colors.darkPurple, size: 30 }}>
          <FaAngleRight/>
        </IconContext.Provider>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20
  },
  sideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainContainer: {
    flex: 7,
  }
})
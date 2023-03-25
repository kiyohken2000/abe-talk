import { useEffect, useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import RenderImage from "./RenderImage";
import { formatPhotos } from "@/utils/functions";
import PhotoModal from "./PhotoModal";

export default function Gallery() {
  const [photos, setPhotos] = useState([])
  const [containerWidth, setContainerWidth] = useState(100)
  const [modalVisible, setModalVisible] = useState(false)
  const [currentPhoto, setCurrentPhoto] = useState('')

  useEffect(() => {
    const fetchData = async() => {
      try {
        const galleryRef = doc(db, 'galery', '7Un7h8FMiveCWJzp4mLX');
        const _res = await getDoc(galleryRef)
        const { count } = _res.data()
        const photosRef = collection(db, 'photos')
        const _photoRes = await getDocs(photosRef)
        const photoItems = _photoRes.docs.map((item) => item.data())
        const _photos = formatPhotos({count, photoItems})
        setPhotos(_photos)
      } catch(e) {
        console.log('error', e)
      }
    }
    fetchData()
  }, [])

  const getWidth = (event) => {
    setContainerWidth(event.nativeEvent.layout.width)
  }

  const onPhotoPress = ({item}) => {
    setCurrentPhoto(photos[item.id])
    setModalVisible(true)
  }

  const onNextPhotoPress = ({num}) => {
    setCurrentPhoto(prev => {
      const result = photos[prev.id + num]
      return result
    })
  }

  return (
    <View
      style={styles.container}
      onLayout={(event) => getWidth(event)}
    >
      <FlatList 
        data={photos}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        renderItem={({item}) => (
          <RenderImage
            item={item}
            width={containerWidth/3}
            onPress={() => onPhotoPress({item})}
          />
        )}
      />
      <PhotoModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        currentPhoto={currentPhoto}
        photos={photos}
        onNextPhotoPress={onNextPhotoPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
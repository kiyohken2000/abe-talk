import { colors } from '@/theme';
import { Modal, View, StyleSheet, Text } from 'react-native';
import Button from '@/components/Button';
import RenderModalPhoto from './RenderModalPhoto';
import RenderTag from './RenderTag';

export default function PhotoModal(props) {
  const { modalVisible, setModalVisible, currentPhoto, photos, onNextPhotoPress } = props

  if(!currentPhoto || !photos.length) {
    return <View/>
  }

  return (
    <Modal
      animationType='fade'
      onRequestClose={() => setModalVisible(false)}
      visible={modalVisible}
      transparent={true}
    >
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.tagContainer}>
            {currentPhoto.tags.map((item, i) => {
              return (
                <RenderTag item={item} key={i} />
              )
            })}
          </View>
          <View style={styles.photoContainer}>
            <RenderModalPhoto
              currentPhoto={currentPhoto}
              photos={photos}
              onNextPhotoPress={onNextPhotoPress}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              label='閉じる'
              onPress={() => setModalVisible(false)}
              color={colors.darkPurple}
              labelColor={colors.white}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.modalBackground
  },
  innerContainer: {
    height: '90%',
    width: '90%',
    backgroundColor: colors.white
  },
  photoContainer: {
    flex: 6
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  tagContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})
import { View, StyleSheet } from "react-native";
import ReactPlayer from 'react-player';

export default function AudioPlayer() {
  return (
    <View style={styles.container}>
      <ReactPlayer
        url={'http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8'}
        controls={true}
        playing={false}
        width={'100%'}
        height={50}
        volume={0.3}
        onStart={() => console.log('on start')}
        onBuffer={() => console.log('on buffer')}
        onBufferEnd={() => console.log('on buffer end')}
        onError={(e) => console.log('on error', e)}
        onEnded={() => console.log('on ended')}
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload',
              crossOrigin: "anonymous"
            },
            forceAudio: true,
            forceHLS: true,
            forceDASH: true
          }
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})
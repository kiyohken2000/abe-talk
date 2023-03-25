import { useState, useEffect, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "@/theme";
import { IconContext } from 'react-icons'
import { FaPlayCircle, FaDownload, FaStopCircle } from 'react-icons/fa'
import axios from "axios";
import Sound from 'react-sound';
import { onSavePress } from "@/utils/functions";
import { getVoiceId } from "@/utils/functions";
import { PaceContext } from "@/contexts/PaceContext";

export default function RenderIcons(props) {
  const { voiceSource, id } = props
  const { pace } = useContext(PaceContext)
  const [isAvailable, setIsAvailable] = useState(false)
  const [SoundStatus, setSoundStatus] = useState('STOPPED');

  useEffect(() => {
    const getVoice = async() => {
      try {
        const _voiceId = getVoiceId({url: voiceSource})
        const res = await axios.get(`/speak-play/${_voiceId}`)
        if(res.status === 200) {
          setIsAvailable(true)
        } else {
          setIsAvailable(false)
        }
      } catch(e) {
        console.log('voice wav not found', e)
        setIsAvailable(false)
      }
    }
    getVoice()
  }, [])

  const handleSoundPlay = () => {
    if(SoundStatus === 'STOPPED') {
      setSoundStatus(Sound.status.PLAYING);
    } else {
      setSoundStatus('STOPPED');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{opacity: isAvailable?1:0.3}}
        disabled={!isAvailable}
        onPress={handleSoundPlay}
      >
        <IconContext.Provider value={{ color: colors.lightPurple, size: 30 }}>
          {SoundStatus === 'STOPPED'?
            <FaPlayCircle/>:
            <FaStopCircle />
          }
        </IconContext.Provider>
      </TouchableOpacity>
      <TouchableOpacity
        style={{opacity: isAvailable?1:0.3}}
        disabled={!isAvailable}
        onPress={() => onSavePress({voiceSource, id})}
      >
        <IconContext.Provider value={{ color: colors.darkPurple, size: 30 }}>
          <FaDownload/>
        </IconContext.Provider>
      </TouchableOpacity>
      <Sound
        url={voiceSource}
        autoLoad={true}
        playStatus={SoundStatus}
        playFromPosition={0}
        onFinishedPlaying={() => setSoundStatus('STOPPED')}
        playbackRate={pace}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})
import { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "@/theme";
import { IconContext } from 'react-icons'
import { FaShareAlt, FaPlayCircle, FaDownload, FaStopCircle } from 'react-icons/fa'
import { onSavePress } from "@/utils/functions";
import Sound from 'react-sound';
import { PaceContext } from "@/contexts/PaceContext";

export default function RenderButtons(props) {
  const { onGeneratePress, voiceUrl, isVoiceExists, id } = props
  const { pace } = useContext(PaceContext)
  const [SoundStatus, setSoundStatus] = useState('STOPPED');

  const handleSoundPlay = () => {
    if(SoundStatus === 'STOPPED') {
      setSoundStatus(Sound.status.PLAYING);
    } else {
      setSoundStatus('STOPPED');
    }
  };

  return (
    <View style={styles.container}>
      {voiceUrl?
        <>
        <TouchableOpacity
          disabled={!isVoiceExists}
          style={{opacity: isVoiceExists?1:0.3}}
          onPress={handleSoundPlay}
        >
          <IconContext.Provider value={{ color: colors.darkPurple, size: 30 }}>
            {SoundStatus === 'STOPPED'?
              <FaPlayCircle/>:
              <FaStopCircle />
            }
          </IconContext.Provider>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={!isVoiceExists}
          style={{opacity: isVoiceExists?1:0.3, paddingLeft: 10}}
          onPress={() => onSavePress({voiceSource: voiceUrl, id})}
        >
          <IconContext.Provider value={{ color: colors.lightPurple, size: 30 }}>
            <FaDownload/>
          </IconContext.Provider>
        </TouchableOpacity>
        </>
        :
        <TouchableOpacity
          onPress={onGeneratePress}
        >
          <IconContext.Provider value={{ color: colors.darkPurple, size: 30 }}>
            <FaShareAlt/>
          </IconContext.Provider>
        </TouchableOpacity>
      }
      <Sound
        url={voiceUrl}
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
  }
})
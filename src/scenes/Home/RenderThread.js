import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { fontSize, colors } from "@/theme";
import axios from "axios";
import { generateVoice, saveVoiceToFirestore, checkVoiceExists } from "./functions";
import RenderButtons from "./RenderButtons";

export default function RenderThread(props) {
  const { id, index, url, title, formatedTitle } = props.item
  const [voiceUrl, setVoiceUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isVoiceExists, setIsVoiceExists] = useState(false)

  useEffect(() => {
    const getVoice = async() => {
      try {
        if(!voiceUrl) return
        const res = await axios.get(voiceUrl)
        if(res.status === 200) {
          setIsVoiceExists(true)
        } else {
          setIsVoiceExists(false)
        }
      } catch(e) {
        console.log('voice wav not found', e)
        setIsAvailable(false)
      }
    }
    getVoice()
  }, [voiceUrl])

  const onGeneratePress = async() => {
    try {
      setIsLoading(true)
      const result = await checkVoiceExists({id})
      if(result) {
        console.log(result)
        setVoiceUrl(result)
      } else {
        const res = await generateVoice({formatedTitle})
        if(res) {
          await saveVoiceToFirestore({voiceUrl: res, id, url, title})
          setVoiceUrl(res)
        }
      }
      setIsLoading(false)
    } catch(e) {
      console.log(e)
      setIsLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {isLoading?
          <View style={{flex: 1, alignItems: 'baseline'}}>
            <ActivityIndicator size='large' color={colors.pink} />
          </View>:
          <RenderButtons
            onGeneratePress={onGeneratePress}
            voiceUrl={voiceUrl}
            isVoiceExists={isVoiceExists}
            id={id}
          />
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: colors.grayLight,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: fontSize.middle,
  },
  titleContainer: {

  },
  buttonsContainer: {
    paddingTop: 10
  }
})
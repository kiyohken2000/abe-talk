import moment from "moment";
import { galleryBaseUrl } from "@/config";
import axios from "axios";
import Blob from "cross-blob";
import { saveAs } from "file-saver";

const getNowTime = () => moment().format('YYYY-MM-DD HH:mm:ss')

const formatPhotos = ({count, photoItems}) => {
  const result = [...Array(count)].map((_, i) => {
    const photoUrl = `${galleryBaseUrl}${i}.jpg`
    const photoProps = photoItems.find(v => v.id === i)
    if(photoProps) {
      return {
        photoUrl,
        id: i,
        like: photoProps.like?photoProps.like:0,
        tags: photoProps.tags
      }
    } else {
      return {
        photoUrl,
        id: i,
        like: 0,
        tags: []
      }
    }
  })
  return result
}

const formatThreads = ({threads}) => {
  const result = threads.map((item, i) => {
    const server = item[2]
    const _url = item[3]
    const id = _url.replace('poverty/', '')
    const title = item[5]
    const regex = /\s*\[[^\]]*\]/g;
    const regex2 = /[^\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF0-9a-zA-Z]/g;
    const _formatedTitle = removeNumericCharacterReferences({str: title})
    const formatedTitle = _formatedTitle.replace(regex, '').replace(regex2, '')
    return {
      id,
      index: i,
      url: `http://${server}.5ch.net/test/read.cgi/${_url}/`,
      title,
      formatedTitle
    }
  })
  return result
}

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const onSavePress = async({voiceSource, id}) => {
  const _voiceId = getVoiceId({url: voiceSource})
  const res = await axios.get(`/speak-play/${_voiceId}`, {responseType:"blob"});
  const blob = new Blob([res.data], {type:"audio/mpeg"});
  saveAs(blob, `${id}.wav`);
}

const removeNumericCharacterReferences = ({str}) => {
  return str.replace(/&#[0-9]+;/g, '');
}

const getVoiceId = ({url}) => {
  return url.replace('https://uberduck-audio-outputs.s3-us-west-2.amazonaws.com/', '')
}

export { getNowTime, formatPhotos, formatThreads, sleep, onSavePress, getVoiceId }
import axios from "axios";
import { covertTacotronAPI, uberduckProps } from "@/config"
import {decode, encode} from 'base-64'
import { sleep } from "@/utils/functions";
import { db } from "@/firebase/firebase";
import { setDoc, serverTimestamp, doc, getDoc } from "firebase/firestore";
if (!global.btoa) {global.btoa = encode;}
if (!global.atob) {global.atob = decode;}

const generateVoice = async({formatedTitle}) => {
  try {
    const convertedTitle = await convertTitle({formatedTitle})
    console.log('convertedTitle', convertedTitle)
    const uuid = await getVoiceId({convertedTitle})
    console.log('uuid', uuid)
    const voiceUrl = await getVoicePolling({uuid})
    console.log('voiceUrl', voiceUrl)
    return voiceUrl
  } catch(e) {
    console.log(e)
    throw new Error("generate voice error");
  }
}

const convertTitle = async({formatedTitle}) => {
  try {
    const res = await axios.post(
      covertTacotronAPI,
      {data: formatedTitle},
      {
        headers: {
          "Content-Type" : "application/json; charset=utf-8"
        }
      }
    )
    const { converted, origin } = res.data
    const result = converted.replace(/ /g, '')
    return result
  } catch(e) {
    console.log(e)
    throw new Error("convert tacotron error");
  }
}

const getVoiceId = async({convertedTitle}) => {
  try {
    const response = await axios.post(
      'https://api.uberduck.ai/speak',
      {
        'pace': 1,
        'voicemodel_uuid': uberduckProps.voiceModelUUID,
        'speech': convertedTitle
      },
      {
        headers: {
          'accept': 'application/json',
          'Authorization': 'Basic ' + btoa(`${uberduckProps.uberduckKey}:${uberduckProps.uberduckSecret}`),
          'content-type': 'application/json'
        }
      }
    );
    return response.data.uuid
  } catch(e) {
    console.log(e)
    throw new Error("get voice id error");
  }
}

const getVoice = async({uuid}) => {
  try {
    const response = await axios.get(
      'https://api.uberduck.ai/speak-status',
      {
        params: {
          'uuid': uuid
        },
        auth: {
          username: uberduckProps.uberduckKey,
          password: uberduckProps.uberduckSecret
        }
      }
    );
    return response.data.path
  } catch(e) {
    console.log('error getVoice', e)
    return null
  }
}

const getVoicePolling = async({uuid}) => {
  console.log('polling start')
  const res1 = await getVoice({uuid})
  if(res1) {
    return res1
  } else {
    console.log('sleep 1')
    await sleep(2*1000);
    const res2 = await getVoice({uuid})
    if(res2) {
      return res2
    } else {
      console.log('sleep 2')
      await sleep(2*1000);
      const res3 = await getVoice({uuid})
      if(res3) {
        return res3
      } else {
        console.log('sleep 3')
        await sleep(2*1000);
        const res4 = await getVoice({uuid})
        if(res4) {
          return res4
        } else {
          console.log('sleep 4')
          await sleep(2*1000);
          const res5 = await getVoice({uuid})
          if(res5) {
            return res5
          } else {
            console.log('sleep 5')
            await sleep(2*1000);
            const res6 = await getVoice({uuid})
            if(res6) {
              return res6
            } else {
              console.log('sleep 6')
              await sleep(2*1000);
              const res7 = await getVoice({uuid})
              if(res7) {
                return res7
              } else {
                console.log('sleep 7')
                await sleep(2*1000);
                const res8 = await getVoice({uuid})
                if(res8) {
                  return res8
                } else {
                  console.log('sleep 8')
                  await sleep(2*1000);
                  const res9 = await getVoice({uuid})
                  if(res9) {
                    return res9
                  } else {
                    console.log('sleep 9')
                    await sleep(2*1000);
                    const res10 = await getVoice({uuid})
                    if(res10) {
                      return res10
                    } else {
                      console.log('polling time out')
                      return null
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

const saveVoiceToFirestore = async({voiceUrl, id, url, title}) => {
  try {
    await setDoc(doc(db, "threads", id), {
      id,
      url,
      title,
      voiceUrl,
      timpstamp: serverTimestamp(),
    });
  } catch(e) {
    console.log(e)
    throw new Error("save voice to firestore error");
  }
}

const checkVoiceExists = async({id}) => {
  try {
    const docRef = doc(db, "threads", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { voiceUrl } = docSnap.data()
      return voiceUrl
    } else {
      return null
    }
  } catch(e) {
    console.log(e)
    throw new Error("check voice exists error");
  }
}

export { generateVoice, saveVoiceToFirestore, checkVoiceExists }
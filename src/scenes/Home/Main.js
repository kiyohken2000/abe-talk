import { useEffect, useState } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import axios from "axios"
import { kenmouAPI } from "@/config"
import { formatThreads } from "@/utils/functions"
import RenderThread from "./RenderThread"

export default function Main() {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [threadArray, setThreadArray] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      try {
        setIsLoading(true)
        setIsError(false)
        const res = await axios.post(
          kenmouAPI,
          {data: 'get thread'},
          {
            headers: {
              "Content-Type" : "application/json; charset=utf-8"
            }
          }
        )
        const { data } = res.data
        const { threads } = JSON.parse(data)
        const result = formatThreads({threads})
        setThreadArray(result)
      } catch(e) {
        console.log('e', e)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  if(isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  if(isError) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      {threadArray.map((item, i) => {
        return (
          <RenderThread
            key={item.id}
            item={item}
          />
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
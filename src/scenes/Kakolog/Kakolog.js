import { useState, useEffect } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { db } from "@/firebase/firebase";
import { collection, getDocs, query, limit, orderBy } from "firebase/firestore";
import RenderThread from "./RenderThread";

export default function Kakolog() {
  const [threadArray, setThreadArray] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      try {
        const threadsCollectionRef = collection(db, 'threads');
        const q = query(threadsCollectionRef, orderBy("timpstamp", "desc"), limit(100))
        const querySnapshot = await getDocs(q)
        const items = querySnapshot.docs.map((doc) => doc.data())
        setThreadArray(items)
      } catch(e) {
        console.log('firebase get error', e)
      }
    }
    fetchData()
  }, []);

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
    flex: 1
  }
})
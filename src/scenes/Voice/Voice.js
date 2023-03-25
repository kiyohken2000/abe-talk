import { useState, useEffect } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { db } from "@/firebase/firebase";
import { collection, getDocs, query, limit, orderBy } from "firebase/firestore";
import RenderItem from "./RenderItem";

export default function Voice() {
  const [talks, setTalks] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      try {
        const talkCollectionRef = collection(db, 'talk');
        const q = query(talkCollectionRef, orderBy("timpstamp", "desc"), limit(100))
        const querySnapshot = await getDocs(q)
        const items = querySnapshot.docs.map((doc) => doc.data())
        setTalks(items);
      } catch(e) {
        console.log('firebase get error', e)
      }
    }
    fetchData()
  }, []);

  return (
    <ScrollView style={styles.container}>
      {talks.map((item, i) => {
        return (
          <RenderItem
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
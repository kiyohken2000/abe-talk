import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "@/theme";
import { Slider } from "@mui/material";
import { PaceContext } from "@/contexts/PaceContext";

export default function PaceSlider() {
  const { pace, setPace } = useContext(PaceContext)

  const handleChange = (event, newValue) => {
    setPace(newValue);
  };

  return (
    <View style={styles.container}>
      <Slider
        defaultValue={pace}
        aria-label="Pace"
        onChange={handleChange}
        min={0.5}
        max={1.5}
        step={0.1}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
  }
})
import { TouchableOpacity } from "react-native";
import Image from "next/image";

export default function RenderImage(props) {
  const { item, width, onPress } = props

  return (
    <TouchableOpacity
      style={{width, height: width}}
      onPress={onPress}
    >
      <Image
        src={item.photoUrl}
        alt='abe shinzo'
        fill
        style={{ objectFit: 'cover' }}
      />
    </TouchableOpacity>
  )
}
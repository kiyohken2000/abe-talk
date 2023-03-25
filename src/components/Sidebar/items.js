import { FaHome, FaBolt, FaGrinStars, FaHistory, FaAlignJustify } from 'react-icons/fa'

const items = [
  {label: 'スレッド', screen: '/', icon: () => <FaAlignJustify />},
  {label: '過去ログ', screen: '/kakolog', icon: () => <FaHistory /> },
  {label: 'ギャラリー', screen: '/gallery', icon: () => <FaBolt />},
  {label: 'AI晋さん', screen: '/voice', icon: () => <FaGrinStars /> },
]

export { items }
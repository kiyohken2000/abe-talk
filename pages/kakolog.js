import ScreenTemplate from "@/components/ScreenTemplate";
import CommonMeta from "@/components/CommonMeta";
import Kakolog from "@/scenes/Kakolog/Kakolog";

export default function KakologPage() {
  return (
    <>
    <CommonMeta title="過去ログ" description="This is kako log page." />
    <ScreenTemplate>
      <Kakolog/>
    </ScreenTemplate>
    </>
  )
}
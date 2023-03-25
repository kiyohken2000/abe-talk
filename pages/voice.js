import ScreenTemplate from "@/components/ScreenTemplate";
import Voice from "@/scenes/Voice/Voice";
import CommonMeta from "@/components/CommonMeta";

export default function VoicePage() {
  return (
    <>
    <CommonMeta title="AI晋さん" description="This is about page." />
    <ScreenTemplate>
      <Voice/>
    </ScreenTemplate>
    </>
  )
}
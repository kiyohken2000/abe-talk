import ScreenTemplate from "@/components/ScreenTemplate";
import Gallery from "@/scenes/Gallery/Gellery";
import CommonMeta from "@/components/CommonMeta";

export default function GalleryPage() {
  return (
    <>
    <CommonMeta title="ギャラリー" description="This is about page." />
    <ScreenTemplate>
      <Gallery/>
    </ScreenTemplate>
    </>
  )
}
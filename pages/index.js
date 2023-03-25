import CommonMeta from "@/components/CommonMeta"
import Home from "@/scenes/Home/Home"
import ScreenTemplate from "@/components/ScreenTemplate"

export default function Main() {
  return (
    <>
    <CommonMeta title="Abe Talk" description="This is Home page." />
    <ScreenTemplate>
      <Home />
    </ScreenTemplate>
    </>
  )
}
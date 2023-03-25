import CommonMeta from "@/components/CommonMeta";
import NotFound from "@/scenes/NotFound/NotFound";
import ScreenTemplate from "@/components/ScreenTemplate";

export default function Errorpage() {

  return (
    <>
    <CommonMeta title="page not found" description="This is 404 page." />
    <ScreenTemplate>
      <NotFound />
    </ScreenTemplate>
    </>
  )
}
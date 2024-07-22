import Banner from "../components/Banner/Banner";
import BannerFooter from "../components/BannerFotter/BannerFotter";
import FreeCase from "../components/Сase/FreeСase";
import PaidCase from "../components/PaidCase/PaidCase";
import Other from "../components/Other/Other";
import FooterOther from "../components/FooterOther/FooterOther";
import AskQuestions from "../components/AskQuestions/AskQuestions";
import FeedbackSection from "../components/FeedbackSection/FeedbackSection";

// import Button from "../components/Buttons/Button"

export default function Home() {
  return (
    <>
      <Banner />
      <BannerFooter />
      <FreeCase />
      <Other />
      <PaidCase />
      <FooterOther />
      <AskQuestions />
      <FeedbackSection />

      {/* {new Array(150).fill(0).map((_,index)=><h1 key={index}>lol keke</h1>)} */}
    </>
  );
}

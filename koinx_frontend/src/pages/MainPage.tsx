import Btc from "../components/Btc";
import WidgetContainer from "../components/WidgetContainer";
import Toggle from "../components/Toggle.tsx";
import Performance from "../components/Performance.tsx";
import Sentiment from "../components/Sentiment.tsx";
import About from "../components/About.tsx";
import Tokenomics from "../components/Tokenomics.tsx";
import Team from "../components/Team.tsx";
import Promo from "../components/Promo.tsx";
import TrendingCoins from "../components/TrendingCoins.tsx";
function MainPage() {
  return (
    <div className="h-full w-screen bg-slate-200/40">
      <WidgetContainer/>
    <div  className="w-screen lg:flex">
        <div className="lg:w-8/12 lg:ml-14 mx-4">
           <Btc />
           <Toggle/>
           < Performance />
           <Sentiment/>
           <About/>
           <Tokenomics/>
           <Team/>
        </div>
      <div className="lg:w-4/12 lg:mr-14 mx-4">
          <Promo/>
          <TrendingCoins/>
        </div>
    </div>
    </div>
  )
}

export default MainPage
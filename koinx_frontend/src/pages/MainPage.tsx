import Btc from "../components/Btc";
import WidgetContainer from "../components/WidgetContainer";
import Toggle from "../components/Toggle.tsx";
import Performance from "../components/Performance.tsx";
import Sentiment from "../components/Sentiment.tsx";
import About from "../components/About.tsx";
import Tokenomics from "../components/Tokenomics.tsx";

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
        </div>

    </div>
    </div>
  )
}

export default MainPage
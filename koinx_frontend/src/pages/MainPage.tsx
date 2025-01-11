import Btc from "../components/Btc";
import WidgetContainer from "../components/WidgetContainer";
import Toggle from "../components/Toggle.tsx";
function MainPage() {
  return (
    <div className="h-full w-screen bg-slate-200/40">
      <WidgetContainer/>
    <div  className="w-screen lg:flex">
        <div className="lg:w-8/12 lg:ml-14 mx-4">
           <Btc />
           <Toggle/>
        </div>

    </div>
    </div>
  )
}

export default MainPage
import { Routes, Route } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Home from "./pages/Home";
import "./styles/global.css";
import Technologies from "./pages/Technologies";
import Fit from "./pages/Fit"
import Brave from "./pages/Brave"
import Power from "./pages/Power"
import Vapora from "./pages/Vapora"
import Motion from "./pages/Motion"
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Arsenal from "./pages/Arsenal";
import Bergamo from "./pages/Bergamo";
import BradSoftshell from "./pages/BradSoftshell";
import GrandPrix from "./pages/GrandPrix";
import Tempest from "./pages/Tempest";
import Elaprint from "./pages/Elaprint";
import Skin from "./pages/Skin";
import ContactRoute from "./routes/ContactRoute";
import Contact from "./components/common/Contact";
import Features from "./pages/Features";
function App() {
  return (
    <>
    <Routes>
      <Route element={<AppRoutes/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/technologies" element={<Technologies/>} />
       <Route path="/fit" element={<Fit/>} />
       <Route path="/motion" element={<Motion/>} />
       <Route path="/brave" element={<Brave/>} />
       <Route path="/power" element={<Power/>} />
       <Route path="/vapora" element={<Vapora/>} />
       <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
       <Route path="/arsenal" element={<Arsenal/>}/>
       <Route path="/bergamo" element={<Bergamo/>}/>
       <Route path="/bradsoftshell" element={<BradSoftshell/>}/>
       <Route path="/grandprix" element={<GrandPrix/>}/>
       <Route path="/tempest" element={<Tempest/>}/>
       <Route path="/elaprint" element={<Elaprint/>}/>
       <Route path="/skin" element={<Skin/>}/>
       <Route path="/features" element={<Features/>}/>
      </Route>
      <Route element={<ContactRoute/>}>
      <Route path="/contact" element={<Contact/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App

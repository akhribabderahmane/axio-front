import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/shared/Layout";
import Acceuil from "./pages/Acceuil";
import Charge01 from "./pages/Charge01";
import Charge02 from "./pages/Charge02";
import Optimization01 from "./pages/Optimization01";
import Optimization02 from "./pages/Optimization02";
import Historique from "./pages/Historique";
import TransporterList from "./pages/ListTrans";
import DemandList from "./pages/ListDemande";
import OptimisationResult from "./pages/Resultat";
import Planifier from "./pages/PlanifierTrajet";
function App() {
  const isAuth = true;
  if (!isAuth) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    );
  }
  if(isAuth){
    return (<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/acceuil" element={<Acceuil />} />
          <Route path="/charge01" element={<Charge01 />} />
          <Route path="/charge02" element={<Charge02 />} />
          <Route path="/demandes" element={<DemandList/>}/>
          <Route path="/planifier" element={<Planifier/>}/>
          <Route path="/optimization01" element={<Optimization01 />} />
          <Route path="/optimization02" element={<Optimization02 />} />
          <Route path="/historique" element={<Historique />} />
          <Route path="/planifier/resultat" element={<OptimisationResult/>}/>
          <Route path="/transporters" element={<TransporterList/>} />
        </Route>
      </Routes>
    </BrowserRouter>)
  }
  return <div>hiii</div>;
}

export default App;

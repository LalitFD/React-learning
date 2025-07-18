import Index from "./component/Index"
import { Routes, Route } from "react-router-dom";

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>

  </>
}
export default App;

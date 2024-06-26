import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Lists from "./pages/list/Lists";
import Hotel from "./pages/hotel/Hotel";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>/</Route>
        <Route path="/hotels" element={<Lists/>}>/</Route>
        <Route path="/hotels/:id" element={<Hotel/>}>/</Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

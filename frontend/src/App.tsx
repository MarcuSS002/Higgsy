import { Appbar } from "./components/Appbar";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
//import { Dashboard } from "./pages/Dashbaord";
//import { VideoCreator } from "./pages/VideoCreator";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Appbar />
        <Routes>
          {/* <Route path = "/" element = {<LandingPage/>} /> */}
          {/* <Route path="/video-creator" element={<VideoCreator />} /> */}
          <Route path = "/signup" element = {<Signup />} />
          <Route path = "/signin" element = {<Signin />} />
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
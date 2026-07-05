import { Appbar } from "./components/Appbar";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
//import { VideoCreator } from "./pages/VideoCreator";
import { Landing } from "./pages/Landing";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { Dashboard } from "./pages/Dashboard";
import { About } from "./pages/About";
import { Pricing } from "./pages/Pricing";
import { Contact } from "./pages/Contact";
import { Privacy } from "./pages/Privacy";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Appbar />
        <Routes>
          { <Route path = "/" element = {<Landing/>} />}
          {/* <Route path="/video-creator" element={<VideoCreator />} /> */}
          <Route path = "/about" element = {<About />} />
          <Route path = "/pricing" element = {<Pricing />} />
          <Route path = "/contact" element = {<Contact />} />
          <Route path = "/privacy" element = {<Privacy />} />
          <Route path = "/signup" element = {<Signup />} />
          <Route path = "/signin" element = {<Signin />} />
          <Route path = "/dashboard" element = {<Dashboard />} />
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
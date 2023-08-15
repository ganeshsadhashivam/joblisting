import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from "./store";

import { Provider } from "react-redux";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home";
import AddJobDescription from "./components/AddJobDescription";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JobDetails from "./components/JobDetails";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/addjob" element={<AddJobDescription />} />
            <Route path="/jobdetails" element={<JobDetails />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

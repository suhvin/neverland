import Gift from "pages/Gift";
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "../pages/Intro";
import Join from "../pages/Join";
import Start from "../pages/Start";
import Ticket from "../pages/Ticket";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <>
          {/* <Route path="/" element={<p />} /> */}
          {/* <Route path="/" element={<Intro />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/join" element={<Join />} /> */}
          <Route path="/" element={<Start />} />
          <Route path="/gift" element={<Start />} />
          <Route path="/join" element={<Start />} />
          <Route path="/start" element={<Start />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/admin" element={<Ticket />} />
        </>
      </Routes>
    </Router>
  );
};
export default AppRouter;

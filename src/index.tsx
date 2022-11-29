import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import "./styles/fonts/NotoSansKR/font.css";
import "./styles/fonts/Pretendard/web/static/pretendard.css";
import "./styles/fonts/Pretendard/web/static/pretendard-subset.css";

import "./styles/css/variables.css";
import "./styles/css/divs.css";
import "./styles/css/buttons.css";
import "./styles/css/texts.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

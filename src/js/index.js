import React from "react";
import { createRoot } from "react-dom/client";

import Layout from "./layout.js";

const root = createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
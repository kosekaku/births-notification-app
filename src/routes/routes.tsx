import { Routes, Route } from "react-router-dom";
import App from "../App";
import MainCertificate from "../components/certificate/Main";
import { NotFound } from "../components/notfound";

export const RoutesRoot = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/certificate" element={<MainCertificate />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

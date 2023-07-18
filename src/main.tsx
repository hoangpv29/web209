import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductProvider } from "./context/Product.tsx";
import { CouterProvider } from "./context/Counter.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ProductProvider>
    <CouterProvider>
      <App />
    </CouterProvider>
  </ProductProvider>
);

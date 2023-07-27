import Couter from "./components/Couter";
import List from "./components/List";
import Admin from "./pages/Admin";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
// import List from "./components/List";

const App = () => {
  return (
    // <div>
    //     <h2>List Component</h2>
    //     {/* <List /> */}
    //     <Couter />
    // </div>
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;

// closure
// currying

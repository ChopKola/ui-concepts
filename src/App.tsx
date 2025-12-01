import { RouterProvider } from "react-router-dom";
import useAppRouter from "./router";

const App = () => {

    const router = useAppRouter(); 

    return (
      <RouterProvider router={router} />
    );
}

export default App
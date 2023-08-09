import RouteComponent from "./LoginRegister/Route";
import { ToastProvider } from "./LoginRegister/ToastContext";
import { BrowserRouter } from 'react-router-dom';
const App = () => {


  return (
    <ToastProvider>
      <BrowserRouter>
        <RouteComponent />
      </BrowserRouter>
    </ToastProvider>
  );
};




export default App;


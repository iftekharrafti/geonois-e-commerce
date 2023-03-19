import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import router from './Routes/Routes';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="">
        <RouterProvider router={router}>  
          <Main />
        </RouterProvider>
    </div>
  );
}

export default App;

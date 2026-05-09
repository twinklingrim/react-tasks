import { AsteroidsPage } from './pages/AsteroidsPage';
import { DestroymentPage } from './pages/DestroymentPage';
import { AsteroidPage } from './pages/AsteroidPage';
import {BrowserRouter, Route, Routes, Navigate} from "react-router";
import { ActionProvider } from './ActionContext';

function App() {
  return (
    <ActionProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<AsteroidsPage />}/>
      <Route path="/destroyment" element= {<DestroymentPage />}/>
      <Route path="asteroids/:id" element= {<AsteroidPage />}/>
      <Route path="*" element= {<Navigate to="/" />}/>      
    </Routes>
    </BrowserRouter>
    </ActionProvider>
  );
}

export default App
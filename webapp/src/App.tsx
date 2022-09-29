import './assets/css/reset.css';
import './assets/css/colors.css';
import './assets/css/default.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './assets/pages/home';
import WalletsPage from './assets/pages/wallets';

function Index() {
  return <h2>Home</h2>;
}

function Product() {
 return (<h2>This is a page for product with ID:</h2>);
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/wallets" element={<WalletsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

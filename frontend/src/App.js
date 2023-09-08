import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlesPage from './pages/ArticlesPage';
import NavBar from './pages/NavBar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <NavBar/>
        <div id="page-body">
          Welcome to my blogs
          <Routes>
            <Route path='/' element={ <HomePage/>} />
            <Route path='/about' element={<AboutPage/> } />
            <Route path='/articlelist' element={ <ArticlesListPage/>} />
            <Route path='/articlepage' element={<ArticlesPage/> } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

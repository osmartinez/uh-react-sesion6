
import { Route, Routes } from 'react-router-dom';
import NavigationComponent from './components/NavigationComponent/NavigationComponent'
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PostsPage from './pages/PostsPage';

function App() {
  return (
    <div className="App">
      <NavigationComponent></NavigationComponent>
      <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
        <Route exact path="/posts" element={<PostsPage/>}></Route>
        <Route exact path="/about" element={<AboutPage/>}></Route>
        <Route exact path="/login" element={<LoginPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import Courses from './Pages/Courses';
import { Route,Routes } from 'react-router-dom';
import MainComponant from './MainComponant';
import CourseDetails from './Pages/CourseDetails';
import Error from './CebrateComponant/Error';
import Categories from './Pages/Category';
import Dashboard from './Pages/Dashboard';
function App() {
  return (

     <>

     <Routes> 


       <Route path='/category' element={<Categories/>}/>
      <Route path='/' element={<MainComponant/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/details/:id' element={<CourseDetails/>}/>
      <Route path='/details' element={<CourseDetails/>}/>
      <Route path='*' element={<Error/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
     </Routes>
     </>
  );

}

export default App;
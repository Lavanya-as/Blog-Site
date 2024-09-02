
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Post from './Post'
import Header from './Header'




function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={
          <main>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
         </main>
        } />
        <Route path='/login' element={
          <div>Login</div>
        } />
        <Route path='/register' element={
          <div>Register Page</div>
        } />
        <Route path='/author/Lavanya-AS' element={
          <div>Author: Lavanya AS</div>
        } />
      </Routes>
      
    </>
  )
}

export default App






import { NotFound, Pokemons, Saved } from '../pages'
import { Route, Routes } from 'react-router-dom'

function CustomRoutes() {
  return (
    <Routes>
    <Route path='/' element={<Pokemons/>}/>
    <Route path='/saved' element={<Saved/>}/>
    <Route path='*' element={<NotFound/>}/>
   </Routes>
  )
}

export default CustomRoutes

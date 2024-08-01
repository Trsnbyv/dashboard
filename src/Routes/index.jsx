import { Route, Routes } from 'react-router-dom'
import {Overview, Tickets, Ideas, Contacts, Agents, Settings, Articles, Subscription} from '../pages'
function CustomRoutes() {
  return (
 <Routes>
   <Route path='/' element={<Overview/>}/>
   <Route path='/tickets' element={<Tickets/>}/>
   <Route path='/ideas' element={<Ideas/>}/>
   <Route path='/contacts' element={<Contacts/>}/>
   <Route path='/agents' element={<Agents/>}/>
   <Route path='/articles' element={<Articles/>}/>
   <Route path='/settings' element={<Settings/>}/>
   <Route path='/subscription' element={<Subscription/>}/>
 </Routes>
  )
}

export default CustomRoutes

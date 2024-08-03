import { Route, Routes } from 'react-router-dom'
import {Overview, Tickets, Ideas, Contacts, Agents, Settings, Articles, Subscription, AboutIdeas, NewIdeas, NotFound} from '../pages'
function CustomRoutes() {
  return (
 <Routes>
   <Route path='/' element={<Overview/>}/>
   <Route path='/tickets' element={<Tickets/>}/>
   <Route path='/ideas' element={<Ideas/>}>
     <Route index element={<AboutIdeas/>}/>
     <Route path='aboutIdeas' element={<AboutIdeas/>}/>
     <Route path='newIdeas' element={<NewIdeas/>}/>
   </Route>
   <Route path='/contacts/:userId' element={<Contacts/>}/>
   <Route path='/contacts' element={<Contacts/>}/>
   <Route path='/agents/:agentId' element={<Agents/>}/>
   <Route path='/agents' element={<Agents/>}/>
   <Route path='/articles' element={<Articles/>}/>
   <Route path='/settings' element={<Settings/>}/>
   <Route path='/subscription' element={<Subscription/>}/>
   <Route path='*' element={<NotFound/>}/>
 </Routes>
  )
}

export default CustomRoutes

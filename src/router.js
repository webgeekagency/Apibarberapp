import { Router } from 'express';
import Userscontroller from './Controllers/Userscontroller';
import Clientescontroller from './Controllers/Clientescontroller';
import Cortescontroller from './Controllers/Cortescontroller';
const route = new Router();

route.post('/usuarios', Userscontroller.post)
route.get('/usuarios', Userscontroller.get)
route.get('/categoria', Userscontroller.get2)
route.delete('/usuarios/:_id', Userscontroller.delete)
route.put('/usuarios/:_id', Userscontroller.update)


route.get('/clientes', Clientescontroller.get2)
route.get('/idSalao', Clientescontroller.get)
route.post('/clientes', Clientescontroller.post)
route.put('/clientes/:_id', Clientescontroller.updade)
route.delete('/clientes/:_id', Clientescontroller.delete)

route.get('/cortes/idSalao', Cortescontroller.get2)
route.get('/cortes', Cortescontroller.get)
route.get('/cortes', Cortescontroller.get3)
route.post('/cortes', Cortescontroller.post)
route.put('/cortes/:_id', Cortescontroller.update)
route.delete('/cortes/:_id', Cortescontroller.del)
export default route;
import { usersRouter } from './users/users.router';
import {Server} from './server/server'

const server = new Server()
server.bootstrap([usersRouter]).then(server=>{
    console.log('Server is listening on:', server.application.address())
}).catch(error=>{
    console.log('Server failed to Start')
    console.error(error)
    process.exit(1)
})




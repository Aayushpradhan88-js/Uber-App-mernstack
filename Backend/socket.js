const socketIo = require('socket.io');
const userModel = require('./models/user.models');
const captainModel = require('./models/captain.models');

let io;
function initializeSocket(server) {

    io = socketIo(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    });

    io.on('connection', (socket) => {
        console.log(`Client Connected : ${socket.id}`);

        socket.on('join', async (data) => {
            const { userId, userType } = data;

            if (userType === 'user') {
                await userModel.findByIdAndUpdate(userId, {
                    socketId: socket.id,
                });
            } elseif(userType === 'captain'){}
        })

        socket.on('disconnect', () => {
            console.log(`Client disConnected : ${socket.id}`)
        })
    })
}

function sendMessageToSocketId(socketId, message) {
    if (io) {
        io.to(socketId).emit('message', message);
    } else {
        console.log('Socket.io is not initalized');
    }
}

module.exports = { initializeSocket, sendMessageToSocketId };
'use strict'
const socket = io()

const nickname = document.querySelector('#nickname')
const chatList = document.querySelector('.chatting-list')
const chatInput = document.querySelector('.chatting-input')
const sendBtn = document.querySelector('.send-btn')

sendBtn.addEventListener('click', () => {
	const params = {
		name: nickname.value,
		message: chatInput.value,
	}
	socket.emit('chatting', params)
})

// socket.emit('chatting', 'from frontend')
socket.on('chatting', data => {
	console.log(data)
	const li = document.createElement('li')
	li.innerText = `${data.name}님이 ${data.message}`
	chatList.appendChild(li)
})
console.log('socket data', socket)
// console.log('chat js')

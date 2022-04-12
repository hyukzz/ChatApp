'use strict'
const socket = io()

const nickname = document.querySelector('#nickname')
const chatList = document.querySelector('.chatting-list')
const chatInput = document.querySelector('.chatting-input')
const sendBtn = document.querySelector('.send-btn')
const displayContainer = document.querySelector('.display-container')

chatInput.addEventListener('keypress', e => {
	if (e.keyCode === 13) {
		enter()
		chatInput.value = ''
	}
})

function enter() {
	const params = {
		name: nickname.value,
		message: chatInput.value,
	}
	socket.emit('chatting', params)
}

sendBtn.addEventListener('click', enter)

// socket.emit('chatting', 'from frontend')
socket.on('chatting', data => {
	console.log(data)
	// console.log(data)
	// const li = document.createElement('li')
	// li.innerText = `${data.name}님이 ${data.message}`
	// chatList.appendChild(li)
	const { name, message, time } = data
	const item = new LiModel(name, message, time)
	item.makeLi()
	displayContainer.scrollTo(0, displayContainer.scrollHeight)
})
console.log('socket data', socket)
// console.log('chat js')

function LiModel(name, message, time) {
	this.name = name
	this.message = message
	this.time = time

	this.makeLi = () => {
		const li = document.createElement('li')
		li.classList.add(nickname.value === this.name ? 'send' : 'receive')
		const dom = `<span class="profile">
      	<span class="user">${this.name}</span>
      	<img class="image" src="https://placeimg.com/50/50/any" alt="any" />
			</span>
      <span class="message">${this.message}</span>
      <span class="time">${this.time}</span>`
		li.innerHTML = dom
		chatList.appendChild(li)
	}
}

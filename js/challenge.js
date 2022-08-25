const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('comment-input')
    const inputValue = input.value
    console.log(inputValue)
    const comments = document.getElementById('list')
    const li = document.createElement('li')
    li.innerText = inputValue
    comments.appendChild(li)

    form.reset()
})

const counter = document.getElementById('counter')
let num  = 0
let count
document.addEventListener('DOMContentLoaded', () => {
    count = setInterval(function(){
        num+=1
        counter.textContent = num

    }, 1000)
})
const increment = document.getElementById('plus')
increment.addEventListener('click', () => {
    counter.textContent =  num+= 1
})

const decrement = document.getElementById('minus')
decrement.addEventListener('click', () => {
    counter.textContent = num-=1
})

const submit = document.getElementById('submit')
const pause = document.getElementById('pause')
pause.addEventListener('click', () => {
   clearInterval(count)
   pause.innerText = "resume"
    heart.disable= true
       

})
 
const heart = document.getElementById('heart')

heart.addEventListener('click', () => {
     const ul = document.getElementsByClassName('likes')
     const li = document.createElement('li')
     li.innerText = `${num} has been liked ${likes} time`
     ul.appendChild(li)
})

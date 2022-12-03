const card = Array.from(document.querySelectorAll('.card'))
const container = document.querySelector('.container')
const popap = document.createElement('div')
const button = document.querySelector('.btn_create')
const input = document.querySelectorAll('.input_create')
const heart = document.querySelectorAll('.heart')
cardCreate = []
const ArrLorem = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem molestias recusandae unde temporibus saepe iste culpa laborum modi minima libero distinctio esse hic minus, rerum enim atque neque laboriosam non.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eaque similique error itaque. Id consequatur distinctio quis alias amet, porro dicta, cum impedit officiis natus saepe eum ad! Dolorem, repudiandae?','Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas suscipit porro tenetur consequuntur qui est placeat unde veniam aspernatur harum laboriosam laborum sint repellat corporis assumenda, accusamus error eligendi illum.','Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis assumenda nesciunt voluptatum ab reiciendis commodi error facere qui reprehenderit possimus, laboriosam perferendis excepturi. Voluptas sapiente sed beatae numquam ab tenetur?', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quibusdam vel illo cum repellat necessitatibus, saepe molestias impedit neque non nemo repellendus nam maxime voluptates similique autem excepturi maiores fugit!','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse unde quasi eligendi cupiditate quae, omnis accusantium consectetur? Perferendis, suscipit quia ipsa aliquid facilis unde officia velit repudiandae facere quo.','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis omnis mollitia error eveniet iusto sint numquam nostrum magnam maiores aliquid accusantium delectus accusamus ad, illum porro voluptatem cum quas facilis?','Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum similique soluta quis adipisci voluptatibus! Nisi odio quibusdam saepe fugiat, modi recusandae quam omnis, debitis cum porro error, minima voluptate non!','Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum expedita aliquam iste libero fugiat voluptate, fuga, ea iure sint nulla eveniet, deserunt quo. Voluptas earum quisquam illo. Quos, ipsum doloribus?','Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias perspiciatis delectus totam? Necessitatibus, est tenetur doloremque ab error ea officia suscipit culpa, fugit ad provident repudiandae perspiciatis iure ducimus sit!']
console.log(ArrLorem.length)
popap.classList.add('popap')
document.body.append(popap)


popap.innerHTML = `<h1> Заголовок </h1> <img src = ""> <p> Lorem </p>`
card.map((item,index,array) => item.addEventListener('click',(event) => {
addcard(event,item,index)    

}))
const addcard = (event,item,index) => {
    if (event.target.classList.contains('btn_delete')) { 
    item.remove()
    popap.classList.remove('popap_active')
    } else if(event.target.classList.contains('heart')){
        event.target.classList.toggle('heart_active')
    }
    else{
    popap.innerHTML = `<h1> ${item.children[0].innerHTML} </h1>  <img src = "${item.children[1].src}"> <p> ${ArrLorem[index]} </p> <div class = "cancel"> <span style = "transform:rotate(45deg)"> </span>  <span  style = "transform:rotate(-45deg)"> </span> </div>`
    popap.classList.add('popap_active')
    popap.querySelector('.heart').remove()
    }
}
popap.addEventListener('click',(event) => { 
    event.target.classList.contains('cancel')? 
    [popap.classList.remove('popap_active'),event.target.classList.add('cancel_active') ]:
    false
})

const creator = (event) => {
    const cardCreate = document.createElement('div')
    cardCreate.classList.add('card')
    cardCreate.innerHTML = `<h1> ${input[0].value} </h1> <img src = " ${input[1].value} "> <button class="card_btn">Pay</button><button class="btn_delete">Delete</button>`
    container.prepend(cardCreate)
    card.unshift(cardCreate)
    cardCreate.querySelector('.btn_delete').addEventListener('click',()=>{
        cardCreate.remove()
    })
    card.map((item,index) => item.addEventListener('click', (event) => {
        ArrLorem.unshift(input[2].value)
        addcard(event,item,index)
    popap.classList.add('popap_active')
    })
)}



button.addEventListener('click',creator)





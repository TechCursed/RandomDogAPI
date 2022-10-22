
const img = document.getElementById('dogimage')
const btnClick = document.getElementById('btn')

const APIcallFunc = () => {
    
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        img.innerHTML = `<img src = '${json.message}' />`
    })
    
} 

APIcallFunc()


btnClick.onclick = () =>{
    APIcallFunc()

}
const container = document.querySelector('.container')
const API_URL = 'https://rickandmortyapi.com/api/character'

const getData = async ()=>{
  try{
  const response = await fetch(API_URL)
  const data = await response.json()
  data.results.map(personaje =>{
    const div = document.createElement('div')
    div.classList.add('personaje')
    div.innerHTML = `<img src='${personaje.image}'>
    <p>${personaje.name}</p>`
    container.append(div)
  })
  }catch(error){
    console.error(error)
  }
}

getData()

const generationBtn = document.getElementById('generation-btn')
const emailList = document.querySelector('ul')

generationBtn.addEventListener('click', function() {
    emailList.innerHTML = ''
    generationEmail(10)
})

// funzioni
function generationEmail(number){
    for(let i = 0; i < number; i++){
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res) => {
            const email = res.data.response
            console.log(email)
            const emailListItem = myCreateElement('li', [] , email )
            emailList.append(emailListItem)
        })
        .catch((err) => {
            console.log('ops qualcosa è andato storto', err)
            // qui abbiamo accesso all'errore che ha generato la chiamata
        }) 
    
    }
}



// utilities
function myCreateElement(tagnName, classList = [], content = "") {
    // Creo l'elemento
    const el = document.createElement(tagnName);
  
    // Aggiungo le classi
    if (classList.length > 0) {
      el.classList.add(...classList);
    }
  
    // Contenuto
    el.innerHTML = content;
    return el;
  }
document.addEventListener('DOMContentLoaded', function() {
  
  let params = coDesExtract()
  /*Cria variáveis referentes ao */
  let value = params['key']
  let value2 = params['pi']

  let db = coDesConnect('https://portfolio-sem-i.firebaseio.com/')

  db.download('/', function(data) {

    let context = data
    let context2 = data['portfolio'][value2]
    let context3 = data['portfolio'][value2]['projetos'][value]
    console.log(context3)

    /* Referente ao menu */
    coDesReplace('.nav',context)

    /* Referente ao nome da aba */
    coDesReplace('.nome-aba', context3)

    /* Referente à imagem do projeto */
    coDesReplace('.container2', context3)

    /* Referente ao título do projeto */
    coDesReplace('.titulo2', context3)
    
    /* Referente ao grupo, ao local e aos materiais usados (classes vazias foram criadas para isso)*/
    coDesReplace('.grupo', context3)
    coDesReplace('.local', context3)
    coDesReplace('.materiais', context3)

    /* Referente ao local e a descrição */
    coDesReplace('.text', context3)

    /* Referente ao grupo e aos materiais */
    coDesReplace('.cat2', context3)
})

})


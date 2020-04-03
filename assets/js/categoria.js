document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  console.log(value)
  let value2 = document.querySelector(".projeto-link")
  value2.href = 'projeto.html?pi=' + value + '&key={{@key}}'

  let db = coDesConnect('https://portfolio-sem-i.firebaseio.com/')

  db.download('/', function(data) {

    let context = data
    console.log(context)
    let context2 = data['portfolio'][value]
    console.log(context)

    /* Referente ao menu*/
    coDesReplace('.nav',context)

    /* Referente ao nome da aba */
    coDesReplace('.nome-aba', context2)

    /* Referente à apresentação da categoria */
    coDesReplace('.container2', context2)

    /* Referente à lista dos projetos */
    coDesReplace('.testando', context2)
  })
})

document.addEventListener('DOMContentLoaded',function(){

	let db = coDesConnect('https://portfolio-sem-i.firebaseio.com/')

	db.download('/',function(data){
		
		/* Referente ao menu*/
		let context = data

		coDesReplace('.nav',context)

		/* Referente à lista de categorias*/
		coDesReplace('.categorias-pai',context)
	})

})
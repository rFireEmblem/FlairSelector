const fs = require('fs')

async function run(){
	let obj = {}
	let arr = []
	let files = await fs.readdirSync('test')
	for (let i = 0; i < files.length; i++){
		if (!files[i].startsWith('.')){
			let index = files[i].indexOf('-')
			let code = files[i].substring(0, index) + '.png'
			let name = files[i].substring(index+1, files[i].length-4)
			obj[name] = code
			arr.push(`:${name}:`)
			fs.writeFileSync('./flairs.json', JSON.stringify(obj))
			fs.writeFileSync('./codes.txt', arr.join('\n'))
			
		}
	}

}



async function rename(){
	let obj = {}
	let arr = []
	let files = await fs.readdirSync('test')
	for (let i = 0; i < files.length; i++){
		if (!files[i].startsWith('.')){
			let index = files[i].indexOf('-')
			let code = files[i].substring(0, index) + '.png'
			let name = files[i].substring(index+1, files[i].length-4)
			fs.renameSync('./test/'+files[i], './test/'+code)
			
		}
	}

}




rename()
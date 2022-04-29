//Removing the element with ID 'main'
const main = document.getElementById('main')
main.remove()

//Storing h1#victory in variable newHeader
const newHeader = document.createElement('h1')
document.body.append(newHeader)
newHeader.id = 'victory'

//Editing the innerText of h1#victory to read "YOUR-NAME is the champion"
newHeader.innerText = '"YOUR-NAME" is the champion'
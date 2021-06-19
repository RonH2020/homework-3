// Write Your Code Below
myFunc(9,5)
myFunc(0,0)
myFunc(`True`, `False`)
myFunc(`100`, 100)

function myFunc(x ,y) {
    if (x === y) {
        console.log('Strictly equal')   
    }
    else if (x == y) {
        console.log('Equal in value')      
    } 
    else {
        console.log('Not equal')
    }

}

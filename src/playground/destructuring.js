//
// ---- OBJECT DESTRUCTURING

// const person = {
//   name: 'Guido',
//   age: 26,
//   location: {
//     city: 'Quito',
//     temp: 92
//   }
// }

// const { name: firstName = 'Anonymous', age } = person // Looks at the property with the same name
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)




// ---- ARRAY DESTRUCTURING

// const address = ['Av. John F. Kennedy N71-38', 'Quito', 'Pichincha', '17030']

// const [street, city, state = 'New York', zip] = address // Ordered list of variable names
// // const [, , state]

// console.log(`You are in ${city} ${state}.`)



const item = ['Coffee (hot)', '$2.80', '$2.50', '$2.75']
const [ product, , mediumPrice] = item

console.log(`A medium ${product} costs ${mediumPrice}`)

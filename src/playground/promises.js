const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Something went wrong!')
  }, 2000)
})

console.log('before')

promise
  .then((data) => {
   console.log(data)
   return 'some date'
  })
  .then((str) => {
    console.log('does this run?', str) // str passes data from previous callback
  })
  .catch((error) => {
    console.log('error: ', error)
  })

console.log('after')
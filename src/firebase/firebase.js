import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default }

// database.ref('expenses')
//   .on(
//     'value',
//     (snapshot) => {
//       const expenses = []
  
//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         })
//       })
  
//       console.log(expenses)
//     }
//   )

// database.ref('expenses')
//   .on(
//     'child_removed',
//     (snapshot) => {
//       console.log(snapshot.key, snapshot.val())
//     }
//   )
  
// database.ref('expenses')
//   .on(
//     'child_changed',
//     (snapshot) => {
//       console.log(snapshot.key, snapshot.val())
//     }
//   )

  
// // Arrays in firebase
// database.ref('notes').push({
//   title: 'First note',
//   body: 'This is my note' 
// }) 


// const firebaseNotes = {
//   notes: {
//     dm39dssd: {
//       title: 'First note',
//       body: 'This is my note'
//     },
//     sda2d23: {
//       title: 'Another note',
//       body: 'This is my note'
//     }
//   }
// }

// database.ref().set({
//   name: 'Guido Santillan',
//   age: 26,
//   isSingle: false,
//   location: {
//     city: 'Quito',
//     country: 'Ecuador'
//   }
// }).then(() => {
//   console.log('Data is saved')
// }).catch((error) => {
//   console.log('This failed', error)
// })

//// Update fields
// database.ref('age').set(27)
// database.ref('location/city').set('New York')

//// Add new fields
// database.ref('attributes').set({
//   height: 170,
//   weight: 60
// }).then(() => {
//   console.log('second set call worked')
// }).catch((error) => {
//   console.log('Things didnt work for the second error', error)
// })

// console.log('I made a request to change the data')

////  Delete data
// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data was removed')
//   })
//   .catch((error) => {
//     console.log('Didnt work', error)
//   })

// // Efficient way to update data
// database.ref().update({
//   name: 'Mike',
//   age: 29,
//   job: 'Software developer',
//   isSingle: null
// })

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })

// // Read data
// // Only reads one time
// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((error) => {
//     console.log('Error fetching data', error)
//   })

// // See live changes
// const onValueChange = database.ref()
//   .on(
//     'value', 
//     (snapshot) => {
//       console.log(snapshot.val())
//     }, 
//     (error) => {
//       console.log('Error with data fetching', error)
//     }
//   )

// // Unsubscribe from seeing live changes
// database.ref().off(onValueChange)
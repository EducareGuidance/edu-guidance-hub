import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyAePm1o6auG_sxnDoSABhPrCpNJL6FwMc0',
  authDomain: 'fir-d4df2.firebaseapp.com',
  databaseURL: 'https://fir-d4df2-default-rtdb.firebaseio.com',
  projectId: 'fir-d4df2',
  storageBucket: 'fir-d4df2.appspot.com',
  messagingSenderId: '957052307520',
  appId: '1:957052307520:web:5cf59cba4fbd8ee9ddb7a5'
}
const app = initializeApp(firebaseConfig)

// Get a reference to the auth service
const auth = getAuth(app)

export default app
export { auth }

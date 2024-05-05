import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBVRU6pqM6p1DPiLn8xdn2k2vuoqxbOR14',
  authDomain: 'educare-guidance.firebaseapp.com',
  projectId: 'educare-guidance',
  storageBucket: 'educare-guidance.appspot.com',
  messagingSenderId: '607913370565',
  appId: '1:607913370565:web:cc23770225d2f1b073e1ac',
  measurementId: 'G-EDPNTPDWLN'
}

const app = initializeApp(firebaseConfig)

// Get a reference to the auth service
const auth = getAuth(app)

export { auth }

import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCllQmMnLc_G-GI3DsbcXEYp8LTmJWXwLU',
  authDomain: 'netflix-clone-4dea8.firebaseapp.com',
  projectId: 'netflix-clone-4dea8',
  storageBucket: 'netflix-clone-4dea8.appspot.com',
  messagingSenderId: '981162178712',
  appId: '1:981162178712:web:4f0cbeac51ca89b867f8ed',
  measurementId: 'G-3MEGW69ECS',
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
const analytics = getAnalytics(app)
const db = getFirestore(app)
const auth = getAuth()

export default app
export { auth, db, analytics }

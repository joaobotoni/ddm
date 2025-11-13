import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAyn_N8UkFe6ULbWn0BoZXls1J8mpY5RHc",
    authDomain: "aula-9475e.firebaseapp.com",
    projectId: "aula-9475e",
    storageBucket: "aula-9475e.firebasestorage.app",
    messagingSenderId: "555505410474",
    appId: "1:555505410474:web:202812f2d93adce66a0bd3",
    measurementId: "G-2JZ7MSWV11"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default { app, auth }

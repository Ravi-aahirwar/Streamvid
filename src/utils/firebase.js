import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyD_mLh6z4RPmcWW2bLMdZkJNO3YsArGPYA",
    authDomain: "rwa-media-c7773.firebaseapp.com",
    projectId: "rwa-media-c7773",
    storageBucket: "rwa-media-c7773.appspot.com",
    messagingSenderId: "552760186602",
    appId: "1:552760186602:web:7bf3976ebdd90720b16993",
    measurementId: "G-C2V39EGNF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {app,auth}
// export const auth = getAuth(app);
// export default app;
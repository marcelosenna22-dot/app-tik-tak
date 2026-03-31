const firebaseConfig = {
    apiKey: "AIzaSyCkrysWsEGHnp0XjRR7Uj8pd4e420oYqeU",
  authDomain: "app-tik-tak.firebaseapp.com",
  databaseURL: "https://app-tik-tak-default-rtdb.firebaseio.com",
  projectId: "app-tik-tak",
  storageBucket: "app-tik-tak.firebasestorage.app",
  messagingSenderId: "457194424145",
  appId: "1:457194424145:web:6038c37e3044dd495fb570",
  measurementId: "G-CXCG87G9PY"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
const db = firebase.firestore();
const storage = firebase.storage();
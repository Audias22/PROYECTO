// firebase-init.js  — módulo ES (no uses <script> dentro de este archivo)

// SDKs de Firebase por CDN (versión modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth }       from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore }  from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { getDatabase }   from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

// Config de tu proyecto (incluye databaseURL para Realtime DB)
const firebaseConfig = {
  apiKey: "AIzaSyDokAFIRVJRSkuusmS1qYZR_bZK0QMJXoQ",
  authDomain: "unibus-zacapa-prod.firebaseapp.com",
  projectId: "unibus-zacapa-prod",
  storageBucket: "unibus-zacapa-prod.firebasestorage.app",
  messagingSenderId: "406353089667",
  appId: "1:406353089667:web:1f9cf1b2e4867f25f2f7b6",
  databaseURL: "https://unibus-zacapa-prod-default-rtdb.firebaseio.com"
};

// Inicialización única
const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);
const rtdb = getDatabase(app);

// Exponer referencias para usarlas desde otras páginas/módulos
window.__firebase = { app, auth, db, rtdb };

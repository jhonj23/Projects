const firebaseConfig = {
  apiKey: "AIzaSyBAWIXuLoo1EO4qHol2f__5fCAFD63_7JE",
  authDomain: "formweb-f9935.firebaseapp.com",
  databaseURL: "https://formweb-f9935-default-rtdb.firebaseio.com",
  projectId: "formweb-f9935",
  storageBucket: "formweb-f9935.appspot.com",
  messagingSenderId: "614773978477",
  appId: "1:614773978477:web:e83b8e3fd866863ccbd664",
  measurementId: "G-CSG99HC4BV"
};
// Iniciar FireBase// 
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  const db = firebase.firestore();

  const SaveUser = (user)=>{

    db.collection('Estudiantes').doc().set(user)
      .then(function(docRef) {
        alert('Datos ingresados correctamente')
      })
      .catch(function(error){
        alert('Hubo un problema, intentalo nuevamente')
      });
  }

const userform = document.getElementById('user_form');

userform.addEventListener('submit', (e)=>{
  e.preventDefault();
  /*const nombre = userform['nombre']
  console.log(nombre)*/
})


$('#btnenviar').on('click', ()=>{
  let nombre = $('#nombre').val();
  let apellido = $('#apellido').val();
  let cedula = $('#cedula').val();
  let edad = $('#edad').val();

  const user={
    nombre,
    apellido,
    cedula,
    edad
  }

  console.log(nombre)

  SaveUser(user);
})

    
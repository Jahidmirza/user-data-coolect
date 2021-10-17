var firebaseConfig = {
    apiKey: "AIzaSyCMcxbNX9n3YU-MDMXiaVEFw3oKfB5IvXg",
    authDomain: "data-base-4c0df.firebaseapp.com",
    projectId: "data-base-4c0df",
    storageBucket: "data-base-4c0df.appspot.com",
    messagingSenderId: "594866965413",
    appId: "1:594866965413:web:31b52954cfad784b0db64c",
    measurementId: "G-2SZ76TWEYV"
  };
  firebase.initializeApp(firebaseConfig);
  var firebase = firebase.firestore();
  const db = firebase.collection("StudentsData");

  


  let submitForm = document.querySelector('#dbForm');
  submitForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let fName = document.querySelector('#name').value;
    let city = document.querySelector('#city').value;
    let email = document.querySelector('#email').value;
    let number = document.querySelector('#number').value;
    let gender = document.querySelector('#gender').value;
    let paidUnpaid = document.querySelector('#paid_unpaid').value;
    db.doc().set({
        Name: fName,
        City: city,
        Email: email,
        Number: number,
        Gender: gender,
        paidUnpaid: paidUnpaid
    }).then(()=>{
        console.log('data Saved')
    }).catch((error)=>{
        console.log('error')
    })
    submitForm.reset();

  })

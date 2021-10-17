// firebase.database().ref().on("value", (snapshot)=>{
//     document.getElementById('data').innerHTML = "value is the database" +snapshot.val();
// });























// function getInputVal(id) {
//     return document.getElementById(id).value;
// };

// var contactRef = firebase.database().ref().child('contactForm');

// document.getElementById('displayForm').addEventListener('submit', submitForm);

// function submitForm(e) {
//     e.preventDefault();

//     var name = getInputVal('name');
//     var city = getInputVal('city');

//     saveForm(name, city);

//     document.getElementById('displayForm').reset();
// };

// function saveForm(name, city){
//     var newContactRef = contactRef.push();
//     newContactRef.set({
//         Nane: name,
//         City: city
//     });
// };






    // var email = getInputVal('email');
    // var number = getInputVal('number');
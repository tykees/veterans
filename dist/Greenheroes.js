var firebaseConfig = {
    apiKey: "AIzaSyAc2o7j3fAQVQFOJM2OvMEkgubkrerXyLY",
    authDomain: "greenheroesvolunteer.firebaseapp.com",
    databaseURL: "https://greenheroesvolunteer.firebaseio.com",
    projectId: "greenheroesvolunteer",
    storageBucket: "greenheroesvolunteer.appspot.com",
    messagingSenderId: "583860105577",
    appId: "1:583860105577:web:9aee25140f432711020df8",
    measurementId: "G-PNQTV1JHGC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  // Reference messages collection

var messagesRef = firebase.database().ref('messages');


// Listen for form submit

document.getElementById('volunteerform').addEventListener('submit', submitForm);
document.getElementById('donorform').addEventListener('submit', submitForm);

//Submit form
    function submitForm(e){
    e.preventDefault();

    //Get value
    var name = getInputVal('name');
    var specialty = getInputVal('specialty');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    
    //donor form
    var donorname = getInputVal('donorname');
    var amount = getInputVal('amount');

    // Save message
    saveMessage(name, specialty, email, phone, donorname, amount);
    
    //Show alert
    document.querySelector('.alert').style.display = 'block';
    document.querySelector('.alerty').style.display = 'block';


    //Hide alert after 3 seconds
    setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
    document.querySelector('.alerty').style.display = 'none';

    },3000);

    //Clear Form
    document.getElementById('volunteerform').reset();

    // Reset for donor
    document.getElementById('donorform').reset();
}




// Function to get form value

function getInputVal(id){
    return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name, specialty, email, phone, donorname, amount){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
    name: name,
    specialty: specialty,
    email: email,
    phone: phone,
    donorname: donorname,
    amount: amount
    });
}



//Donate Form 


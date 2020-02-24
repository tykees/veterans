// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD130Ej9Emw5lXiiDJ_Dc7Z1tnGNd8RUdM",
    authDomain: "veteransinfo-19eaf.firebaseapp.com",
    databaseURL: "https://veteransinfo-19eaf.firebaseio.com",
    projectId: "veteransinfo-19eaf",
    storageBucket: "veteransinfo-19eaf.appspot.com",
    messagingSenderId: "41629814237",
    appId: "1:41629814237:web:34688cffdc053c08857a34",
    measurementId: "G-2XHQTKB8H7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  

  // Reference messages collection

var messagesRef = firebase.database().ref('veterans');


// Listen for form submit

document.getElementById('veteransform').addEventListener('submit', submitForm);

//Submit form
    function submitForm(e){
    e.preventDefault();

    //Get value
    var fullname = getInputVal('fullname');
    var dob = getInputVal('dob');
    var rank = getInputVal('rank');
    var unit = getInputVal('unit');
    var dor = getInputVal('dor');
    var war = getInputVal('war');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var command = getInputVal('command');
    var location = getInputVal('location');
    var trauma = getInputVal('trauma');
    var disability = getInputVal('disability');


    // Save message
    saveMessage(fullname, dob, rank, unit, dor, war, email, phone, command, location, trauma, disability);
    
    //Show alert
    document.querySelector('.alert').style.display = 'block';

    //Hide alert after 5 seconds
    setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';

    },5000);

    //Clear Form
    document.getElementById('veteransform').reset();
}


// Function to get form value

function getInputVal(id){
    return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(fullname, dob, rank, unit, dor, war, email, phone, command, location, trauma, disability){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
    fullname: fullname,
    dob: dob,
    rank: rank,
    unit: unit,
    dor: dor,
    war: war,
    email: email, 
    phone: phone,
    command: command,
    location: location,
    trauma: trauma,
    disability: disability
    });
}

//Pop over

$(function(){
  $('[data-toggle="popover"]').popover()
});

/*function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function(e) {
        $('#blah').attr('src', e.target.result);
      }
      
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#imgInput").change(function() {
    readURL(this);
  });*/


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyClu7KoNTf3wMu9hH1_E95WTeSvnBqJHqg",
    authDomain: "azure-35db9.firebaseapp.com",
    projectId: "azure-35db9",
    storageBucket: "azure-35db9.appspot.com",
    messagingSenderId: "374340370744",
    appId: "1:374340370744:web:0b66d89044f75f9e4741cd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
let contactInfo = firebase.database().ref("infos");


document.querySelector(".ap-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let date = document.querySelector(".date").value;
    let time = document.querySelector(".time").value;
  console.log(name, email,date,time);

  saveapInfo(name, email,date,time);
  document.querySelector(".ap-form").reset();
}

function saveapInfo(name, email,date,time) {
  let apinfo = contactInfo.push();

  apinfo.set({
    name: name,
    email: email,
    date: date,
    time: time
  });
}



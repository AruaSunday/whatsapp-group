const firebaseConfig = {
    apiKey: "AIzaSyAQwW2F9nV5HeD8r_DkMsFKuChzYyOYRhM",
    authDomain: "whatsappgroupcontact-97133.firebaseapp.com",
    databaseURL: "https://whatsappgroupcontact-97133-default-rtdb.firebaseio.com",
    projectId: "whatsappgroupcontact-97133",
    storageBucket: "whatsappgroupcontact-97133.appspot.com",
    messagingSenderId: "397363240439",
    appId: "1:397363240439:web:1ee49748a28bc70675e2f2"
  };
  // initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("form").addEventListener("submit", submitForm);


function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("fullname");
    var emailid = getElementVal("email");
    var regNumber = getElementVal("reg_no");
    var phoneNumber = getElementVal("phone");    
    var series = getElementVal("series");
  
    saveMessages(name,emailid,regNumber,phoneNumber,series);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("form").reset();

        window.location.href = 'https://chat.whatsapp.com/Eff9Gf6KmbbGSTW0W1YslY';

  }

  document.getElementById('form')
  .add-addEventListener('submit', function(event)
{
    event.preventDefault();

    const fullname =
    document.getElementById('fullname'). value;
    console.log('fullname')

    const email =
    document.getElementById('email'). value;
    console.log('email')

    const reg_no =
    document.getElementByIdreg_number
    console.log('reg_no')

    const phone =
    Document.getElementById('phone')
    console.log('phone')

    const serise  =
    document.getElementById('series'). value;

    const check =
    document.getElementById('checkbox') 

    fetch('http://localhost:3000/submit,', {
        method: 'POST,',
        headers: {
            'Const-Type': 'application/json',
        },
        body: JSON.stringify({name, phone, seres, checkbox}),
    })
    .then(response => response.json())
    .then(data => {
        console.log('success:', data);
    })
    .catch((error) => {
        console.log('erroe:', error);
    });
});
const saveMessages = (name, emailid, phoneNumber,regNumber,series) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      phoneNumber: phoneNumber,
      regNumber: regNumber,
      series: series,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

alert("I am a CSC!");
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
var contactFormDB = firebase.database().ref("classForm");

let existing_data = [];
contactFormDB.once('value', function(snapshot) {
  var data = snapshot.val();
  if (data) {
      Object.keys(data).forEach(function(key) {
          existing_data.push(data[key]);
        });
  }
}, function(error) {
  console.error("Error retrieving data:", error);
});

document.getElementById("form").addEventListener("submit", submitForm);
// document.getElementById("ret").addEventListener("click", async () => {
//   // alert('hgfd')
//   // console.log(await existing_data);
//   existing_data.filter(async function(item) {
//     if (await item.emailid === 'edidiongsamuel14@gmaiil.com' || await item.regNumber === "272/SC/CO/1169" || await item.phoneNumber === "07042221248") {
//       console.log('item',item);
//       if (typeof(item) !== null) {
//         console.log(item);
//       } 
//       return;
//     }else{
//       console.log('free');
//     }
//   });
// });


let submit_btn = document.getElementById("submit");
let alertMessage = document.querySelector(".alert");


document.getElementById('email').addEventListener('change', () => {
  const emailInput = document.getElementById('email').value;

  const emailExists = existing_data.some(item => item.emailid === emailInput);

  if (emailExists) {
    // console.log('Email already exists');
    alertMessage.innerHTML = "Email already exists";
    alertMessage.style.display = "block";
    alertMessage.style.background = "red";
    submit_btn.disabled = true;
    submit_btn.style.opacity = "0.5";
  } else {
    alertMessage.innerHTML = "";
    alertMessage.style.display = "none";
    alertMessage.style.background = "transparent";
    submit_btn.disabled = false;
    submit_btn.style.opacity = "1";
  }
});

document.getElementById('phone').addEventListener('change', () => {
  const phoneInput = document.getElementById('phone').value;

  const phoneExists = existing_data.some(item => item.phoneNumber === phoneInput);

  if (phoneExists) {
    // console.log('Email already exists');
    alertMessage.innerHTML = "Whatsapp contact already exists";
    alertMessage.style.display = "block";
    alertMessage.style.background = "red";
    submit_btn.disabled = true;
    submit_btn.style.opacity = "0.5";
  } else {
    alertMessage.innerHTML = "";
    alertMessage.style.display = "none";
    alertMessage.style.background = "transparent";
    submit_btn.disabled = false;
    submit_btn.style.opacity = "1";
  }
});

document.getElementById('reg_no').addEventListener('change', () => {
  const regNoInput = document.getElementById('reg_no').value;
  const seriesInput = document.getElementById('series').value;

  const seriesSlice = seriesInput.slice(2, 4);
  const series = regNoInput.slice(0, 2);
  const dept = (regNoInput.slice(3, 8)).toUpperCase();
  console.log(dept);

  if (dept !== "SC/CO"){
    alertMessage.innerHTML = "Registration number does not matach CSC department";
    alertMessage.style.display = "block";
    alertMessage.style.background = "red";
    submit_btn.disabled = true;
    submit_btn.style.opacity = "0.5";
  } else {
    alertMessage.innerHTML = "";
    alertMessage.style.display = "none";
    alertMessage.style.background = "transparent";
    submit_btn.disabled = false;
    submit_btn.style.opacity = "1";

    if (series !== seriesSlice) {
      alertMessage.innerHTML = "Registration number does not match series";
      alertMessage.style.display = "block";
      alertMessage.style.background = "red";
      submit_btn.disabled = true;
      submit_btn.style.opacity = "0.5";
    } else {
      alertMessage.innerHTML = "";
      alertMessage.style.display = "none";
      alertMessage.style.background = "transparent";
      submit_btn.disabled = false;
      submit_btn.style.opacity = "1";
  
      const regNoExists = existing_data.some(item => item.regNumber === regNoInput);
  
      if (regNoExists) {
        // console.log('Email already exists');
        alertMessage.innerHTML = "Reg number already exists";
        alertMessage.style.display = "block";
        alertMessage.style.background = "red";
        submit_btn.disabled = true;
        submit_btn.style.opacity = "0.5";
      } else {
        alertMessage.innerHTML = "";
        alertMessage.style.display = "none";
        alertMessage.style.background = "transparent";
        submit_btn.disabled = false;
        submit_btn.style.opacity = "1";
      }
    }
  }
  


});



function submitForm(e) {
    e.preventDefault();
    var name = getElementVal("fullname");
    var emailid = getElementVal("email");
    var regNumber = getElementVal("reg_no");
    var phoneNumber = getElementVal("phone");    
    var series = getElementVal("series");
    
  
    saveMessages(name,emailid,regNumber,phoneNumber,series);
  
    //   enable alert
    alertMessage.innerHTML= "Details Have Been Saved.";
    alertMessage.style.display = "block";
    alertMessage.style.background = "rgb(0, 255, 106)";
    
    //   remove the alert
    setTimeout(() => {
      alertMessage.innerHTML= "";
      alertMessage.style.display = "none";
      alertMessage.style.background = "transparent";
    }, 3000);
  
    //   reset the form
    document.getElementById("form").reset();

        window.location.href = 'https://chat.whatsapp.com/Eff9Gf6KmbbGSTW0W1YslY';

  }



const saveMessages = (name, emailid, regNumber, phoneNumber,series) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      regNumber: regNumber,
      phoneNumber: phoneNumber,
      series: series,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };


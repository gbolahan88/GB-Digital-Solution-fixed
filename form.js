function sendToWhatsapp() {
  let number = "+2349120963553";

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  //let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;

  var url = "https://wa.me/" + number + "?text="
  + "*Name :* " +name+ "%0a"
  + "*Email :* " +email+ "%0a"
  //+ "Subject : " +subject+ "%0a"
  + "*Message :* " +message+ "%0a%0a";

  window.open(url, '_blank').focus();
}

/*function emailSend(){
  
  var userName = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  var messageBody = "Name" + userName +
  "<br/> Email" + email +
  "<br/> Subject" + subject +
  "<br/> Message" + message; 
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "onigbolahan88@gmail.com",
    Password : "5230B8A332E71F1BFCEA7E88F556812AE769",
    To : 'onigbolahan88@gmail.com',
    From : "onigbolahan88@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => alert(message)
);
}*/

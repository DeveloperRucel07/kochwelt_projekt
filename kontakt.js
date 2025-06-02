let Name = document.getElementById('name');
let Usermail = document.getElementById('email');
let Betreff = document.getElementById('betreff');
let Message = document.getElementById('message');
const sendMessageBtn = document.getElementById('sendMessage');

let validator = false;
let check = 0;

sendMessageBtn.addEventListener('click', function() {
    name_user = Name.value
    email_user = Usermail.value
    betreff_user = Betreff.value
    message_user = Message.value
    valideName(name_user);
    valideEmail(email_user);
    valideBetreff(betreff_user);
    valideMessage(message_user)

    if(validator == true && check >= 3) {
        sendmail();
    }
    else{
        alert("Bitte füllen Sie alle Felder aus");
    }

});







function valideName(name){
    if(name.length<2 || name.length< 0){
        Name.classList.add('notvalideinput');
        validator = false;
    }else{
        Name.classList.add('valideinput');
        validator = true;
        check+=1;
    
    }
}
function valideMessage(message){
    if(message.length<2 || message.length< 0){
        Message.classList.add('notvalideinput');
        validator = false;
    }else{
        Message.classList.add('valideinput');
        validator = true;
        check+=1;
    
    }
}
function valideBetreff(betreff){
    if(betreff.length<2 || betreff.length< 0){
        Betreff.classList.add('notvalideinput');
        validator = false;

    }else{
        Betreff.classList.add('valideinput');
        validator = true;
        check+=1;
    }
}


function valideEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regex.test(email)){
    Usermail.classList.add('valideinput')
    validator = true;
    check+=1;
    }else {
        Usermail.classList.add('notvalideinput');
        validator = false;
    }
}

function sendmail(){
    Email.send({
            Host : "smtp.elasticemail.com",
            Username : "petitdassi7@gmail.com",
            Password : "C1901AA911558349DC5FB667DB5F62694C0A",
            To : 'petitdassi7@gmail.com',
            From : "petitdassi7@gmail.com",
            Subject : betreff_user,
            Body : `<h3>Hallo ich bin ${name_user} und meine email adresse ist ${email_user}.<br>Nachricht : ${message_user}</h3>`,
        }).then(
        message => {
            if(message =="OK"){
                Swal.fire({
                title: "Gesendet!",
                icon: "success",
                text: "Vielen Dank für Ihre Nachricht❤️"
                });
            }else{
                Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                });
            }
        }
        );
}




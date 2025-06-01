let Name = document.getElementById('name');
let Email = document.getElementById('email');
let Betreff = document.getElementById('betreff');
let Message = document.getElementById('message');
const sendMessageBtn = document.getElementById('sendMessage');

let validator = false;
let check = 0;

sendMessageBtn.addEventListener('click', function() {
    name_user = Name.value
    email_user = Email.value
    betreff_user = Betreff.value
    message_user = Message.value
    valideName(name_user);
    valideEmail(email_user);
    valideBetreff(betreff_user);

    console.log(valideEmail);

    if(validator == true && check >= 3) {
        alert(name_user+ email_user+ betreff_user+ message_user);
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
    Email.classList.add('valideinput')
    validator = true;
    check+=1;
    }else {
        Email.classList.add('notvalideinput');
        validator = false;
    }
}






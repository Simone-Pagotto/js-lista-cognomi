//raccogliere input

var userSurname = prompt("Qual'è il tuo cognome?");
var surnameList = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
console.log(userSurname, surnameList);
var userPosition;


//logica

surnameList.push(userSurname);
console.log(surnameList);

surnameList.sort();
console.log(surnameList);

for (var i = 0; i < surnameList.length; i++) {
  document.getElementById("ordered-list").innerHTML += '<li>' + surnameList[i] + '</li';
  if (surnameList[i]==userSurname) {
    userPosition = i;
  };
}

userPosition= userPosition +1;

document.getElementById("list-position").innerHTML += userPosition ;

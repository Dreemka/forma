
window.onload = function() {
  yearold = document.getElementById("yearold")
  texta = document.getElementById("comments")
  weightnow = document.getElementById("weightnow")
  weightwant = document.getElementById("weightwant")
  weightloss = document.getElementById("weightloss")
  mass = document.getElementById("mass")
  council = document.getElementById("council")
  email = document.getElementById('email')
  phone = document.getElementById("phone")
  comments = document.getElementById("comments")
  sweetener = document.getElementById("sweetener")
  water = document.getElementById("water")
  milk = document.getElementById("milk")
  vitamins = document.getElementById("vitamins")
}


function send() {

  if (Number(weightwant.value) > Number(weightnow.value))
    alert('Вы хотите, чтобы Ваш котик стал еще толще? Не думаю. Ошибка закралась в поле "Желаемый вес" или "Вес". Измените данные пожалуйста!')

if (30 > texta.value.length)
  alert('Какой то Вы малословный. В комментарии должно быть не менее 30 символов (но и более 120 мы написать не дадим). У Вас сейчас ' + texta.value.length)

// if (120 < texta.value.length)
//     alert(' Оу оу. Я смотрю Вас не остановить. Зачем так много слов? В комментарии должно быть не более 120 (но и не менее 30). У Вас сейчас ' + texta.value.length)

 name = document.getElementById('name').value


  let people = {
  name: name,
  age: yearold.value,
  weight: weightnow.value,
  weightloss: weightloss.checked,
  mass: mass.checked,
  council: council.checked,
  email: email.value,
  phone: phone.value,
  weightwant: weightwant.value,
  sweetener: sweetener.checked,
  water: water.checked,
  milk: milk.checked,
  vitamins: vitamins.checked,


  toString() {
    return `{name: "${this.name}",
    age: ${this.age} ,
    weight: ${this.weight} ,
    weightloss: ${this.weightloss} ,
    weightwant: ${this.weightwant} ,
    mass: ${this.mass} ,
    council: ${this.council},
    email: ${this.email} ,
    phone: ${this.phone},
    sweetener: ${this.sweetener} ,
    water: ${this.water},
    milk: ${this.milk} ,
    vitamins: ${this.vitamins},}`;
  }
};

console.log(people)
}



function clik() {

  let weightloss = document.getElementById('weightloss')
      weight = document.getElementById('weight')
  document.getElementById('weight').style.display = ('flex')
}

function clik2() {

  let weightloss = document.getElementById('weightloss')
      weight = document.getElementById('weight')
  document.getElementById('weight').style.display = ('none')
  weightwant.value = ""
}
function clik3() {

  let weightloss = document.getElementById('weightloss')
      weight = document.getElementById('weight')
  document.getElementById('weight').style.display = ('none')
  weightwant.value = ""

}

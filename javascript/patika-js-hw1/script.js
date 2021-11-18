let username = prompt('Lütfen isminizi giriniz');

document.getElementById('name').innerHTML = username;

const days = [
  'Pazartesi',
  'Salı',
  'Çarşamba',
  'Perşembe',
  'Cuma',
  'Cumartesi',
  'Pazar',
];

setInterval(showTime, 1000);
function showTime() {
  let d = new Date();
  let week = days[d.getDay()];
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();

  let currentD = hour + ':' + min + ':' + sec + ' ' + week;

  document.getElementById('myClock').innerHTML = currentD;
}

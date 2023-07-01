// Promise: Sonucu olumlu veya olumsuz gelecekte belli olan işlemi ifade ediyor bu işlem en sona atılıyor, eş zamanlılar tamamlanıyor en son
// promise'lar çalışıyor ve sonuçlanıyor bu sayede kodun çalışması engellenmiyor.

// const veriGetir = new Promise((resolve, reject) => {
//   const veriGeldiMi = false;
//   if (veriGeldiMi) {
//     resolve('Verimiz burada');
//   } else {
//     reject('Veriyi alamadık');
//   }
// });

// veriGetir.then(res => console.log(res)).catch(err => console.log(err));

const axios = require('axios');

// https://restcountries.eu/rest/v2/all

async function getCountries() {
  //   axios
  //     .get('https://restcountries.eu/rest/v2/all')
  //     .then(res => console.log(res.data[0]))
  //     .catch(err => console.log(err.message));
  const countries = await axios.get('https://restcountries.eu/rest/v2/all');
  console.log(countries.data[0]);
}

getCountries();

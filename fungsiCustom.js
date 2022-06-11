// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (callback) => {
const hasil = [];
fs.readFile(file1, 'utf8', function read(err,data){
    let konten = JSON.parse(data)
    message = konten.message;
    hasil.push(message.split(' ')[1])
    fs.readFile(file2, 'utf8',function read(err,data) {
        konten = JSON.parse(data)
        message = konten[0].message;
        hasil.push(message.split(' ')[1])
        fs.readFile(file3,'utf8', function read(err,data) {
          konten = JSON.parse(data)
          message = konten[0].data.message;
          hasil.push(message.split(' ')[1])
          console.log(hasil)
          callback(err, hasil)
        })
      })
  })
}
// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};

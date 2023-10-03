// reglas de nomenclatura

// No recomendado
const yyyymmdstr = moment().format("YYYY/MM/DD");
let arrayNames = ["Dorelly", "Rosario", "Paola", "Roxana"];
getUserInfo();
getClientData();
gitCustomerRecord();

// Recomendado
const currentDate = moment().format("YYY/MM/DD");
const namesList = ["Dorelly", "Rosario", "Paola", "Roxana"];
getUser();

// Nombrar según el tipo de datos

// No recomendado
const user = ["Dorelly", "Rosario", "Paola", "Roxana"];
const valid = true;
const read = false;
const color = true;
const users = 15;
createUserIfNotExist();
updateUserIfNotEmpty();
sendEmailIfIsValid();
class Data {};
class Manager {};
class Info {};

// Recomendado
const isValid = true;
const canRead = false;
const hasColor = true;
const maxUsers = 50;
const minUsers = 10;
const totalUsers = 15;
createUser();
updateUser();
sendEmail();
getUser();
setUser();
isValidUser();
class User {};
class UserProfile {};
class Account {};

// Regular
const userList = ["Dorelly", "Rosario", "Paola", "Roxana"];

// Bueno
const users = ["Dorelly", "Rosario", "Paola", "Roxana"];

// Excelente
const userNames = ["Dorelly", "Rosario", "Paola", "Roxana"];


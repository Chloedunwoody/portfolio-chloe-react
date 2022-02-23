const mysql = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST || 'localhost',
  user     : process.env.MYSQL_USER || 'root',
  password : process.env.MYSQL_PASSWORD || 'root',
  database : process.env.MYSQL_DATABASE || 'portfolio'
});

connection.connect();

function getHobbies(callback){
    const query = `SELECT * FROM hobbies`;

    connection.query(query, function (error, results) {
        if (error) {
            callback(error);
            return
        }
        callback(null, results);
      });
}
exports.getHobbies = getHobbies;

function getJourney(callback){
    const query = `SELECT * FROM journey`;

    connection.query(query, function (error, results) {
        if (error) {
            callback(error);
            return
        }
        callback(null, results);
      });
}
exports.getJourney = getJourney;

function getProjects(callback){
    const query = `SELECT * FROM projects`;

    connection.query(query, function (error, results) {
        if (error) {
            callback(error);
            return
        }
        callback(null, results);
      });
}
exports.getProjects = getProjects;

function getSkills(callback){
    const query = `SELECT * FROM skills`;

    connection.query(query, function (error, results) {
        if (error) {
            callback(error);
            return
        }
        callback(null, results);
      });
}
exports.getSkills = getSkills;

function getPersonalInfo(callback){
    const query = `SELECT * FROM personalInfo`;

    connection.query(query, function (error, results) {
        if (error) {
            callback(error);
            return
        }
        callback(null, results);
      });
}
exports.getPersonalInfo = getPersonalInfo;
 
connection.end();
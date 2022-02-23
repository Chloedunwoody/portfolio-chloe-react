const express = require("express");
// const path = require('path');

const app = express();

//const database = require('./database');

app.use(express.static('build'));

// Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../frontend/build')));

// Handle GET requests to / route
app.get("/", (req, res) => {
  database.getHobbies((error, hobbies) => {
    if(error){
      res.send({error: error.message})
      return
    }
    res.send({hobbies})
  });

  database.getJourney((error, journey) => {
    if(error){
      res.send({error: error.message})
      return
    }
    res.send({journey})
  });

  database.getProjects((error, projects) => {
    if(error){
      res.send({error: error.message})
      return
    }
    res.send({projects})
  });

  database.getSkills((error, skills) => {
    if(error){
      res.send({error: error.message})
      return
    }
    res.send({skills})
  });

  database.getPersonalInfo((error, personalInfo) => {
    if(error){
      res.send({error: error.message})
      return
    }
    res.send({personalInfo})
  });
});

// // All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
// res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
// });

//const port = process.env.PORT || 3000
app.post('/contactMe' , (req, res)=> {

  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  res.send("posted");
});

//if react router , then add this
// app.get('*', (req,res)=>{
//   res.sendFile(path.join(__dirname, 'build/index.html'))
// })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`);
});
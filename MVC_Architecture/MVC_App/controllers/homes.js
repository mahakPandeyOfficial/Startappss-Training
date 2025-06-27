import { Home } from '../models/home.js';
import { registeredHomes } from '../routes/hostRouter.js';
const getAddHomes = (req, res) => {
    res.render("addHome", { pageTitle: "Add Home" });
  }
  

const postAddHomes = (registeredHomes) => {
return (req, res) => {
    const { houseName, price, location, rating  } = req.body;
    const photoUrl = req.file ? req.file.filename : null;
    console.log("Home registered successfully:", { houseName, price, location, rating, photoUrl }); 
    const home = new Home(houseName, price, location, rating, photoUrl)
    home.save();
    
  
    res.render("homeAdded", { pageTitle: "Home Added Successfully" });
  }
}

//This is Higher order function which is returning anoter function
const getHomes = () => {
  return (req, res) => {
    const registeredHomes = Home.getAll();
    res.render("home", {
      registeredHomes,
      pageTitle: "Airbnb Home"
    });
  };
};

export {getAddHomes, postAddHomes, getHomes};
import { Home } from '../models/home.js';
import { registeredHomes } from '../routes/hostRouter.js';
const getAddHomes = (req, res) => {
    res.render("host/add-home", { pageTitle: "Add Home" });
  }
  

const postAddHomes = (registeredHomes) => {
return (req, res) => {
    const { houseName, price, location, rating  } = req.body;
    const photoUrl = req.file ? req.file.filename : null;
    console.log("Home registered successfully:", { houseName, price, location, rating, photoUrl }); 
    const home = new Home(houseName, price, location, rating, photoUrl)
    home.save();
    
    res.render("host/home-added", { pageTitle: "Home Added Successfully" });
  }
}


export {getAddHomes, postAddHomes};
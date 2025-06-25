
const getAddHomes = (req, res) => {
    res.render("addHome", { pageTitle: "Add Home" });
  }
  

const postAddHomes = (registeredHomes) => {
return (req, res) => {
    const { title, description, price } = req.body;
    const image = req.file ? req.file.filename : null;
  
    console.log("Home registered successfully:", { title, description, price, image });
  
    registeredHomes.push({
      title,
      description,
      price,
      image
    });
  
    res.render("homeAdded", { pageTitle: "Home Added Successfully" });
  }
}

const getHomes = (registeredHomes)=> {
return (req, res, next) => {
    console.log(registeredHomes);
    //res.sendFile(path.join(rootDir, 'views', 'home.html'));     //This is used when not using ejs file
    res.render("home", {registeredHomes: registeredHomes, pageTitle: "airbnb home"} ); // Using EJS to render the home page with the registered homes
}
}

export {getAddHomes, postAddHomes, getHomes};
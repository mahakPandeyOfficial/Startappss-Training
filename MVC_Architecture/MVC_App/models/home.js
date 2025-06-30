//fake database
//FILE AND PATH MODULE FOR HANDLING DATA IN FILE
import fs from 'fs';
import path from 'path';
import { rootDir } from '../utils/pathUtil.js';

let registeredHomes = [];

export class Home {
     constructor(houseName, price, location, rating, photoUrl){
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoUrl = photoUrl;
     }

     save(){
        registeredHomes.push(this);
        const homeDataPath = path.join(rootDir, "data", "home.json");
        fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), err=> {
         console.log("File Writing Concluded", err)
        })
     }

//Add this method to access the array, ths is returning regitered homes and its all property.
  static getAll() {
      // This method reads the home data from the JSON file and returns it as an array of Home objects.
      const homeDataPath = path.join(rootDir, "data", "home.json");
      fs.readFile(homeDataPath, (err, data) => {
         if (!err) {
            registeredHomes =  JSON.parse(data);   // this is used to parse the data from JSON file and convert it into an array of objects.
         }
         return registeredHomes;
        
      });
   return registeredHomes;
   
 }

}

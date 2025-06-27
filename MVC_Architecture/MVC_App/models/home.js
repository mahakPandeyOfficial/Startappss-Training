//fake database
//FILE AND PATH MODULE FOR HANDLING DATA IN FILE
import fs from 'fs';
import path from 'path';
import { rootDir } from '../utils/pathUtil.js';

const registeredHomes = [];

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
   return registeredHomes;
 }

}

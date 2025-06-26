//fake database

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
     }

      // Add this method to access the array
  static getAll() {
   return registeredHomes;
 }

}

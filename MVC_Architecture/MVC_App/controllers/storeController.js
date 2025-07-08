import { Home } from '../models/home.js';
import { registeredHomes } from '../routes/hostRouter.js';


//Index
const getIndex = () => {
  return (req, res) => {
  const registeredHomes = Home.getAll();
  res.render("store/index", {
    registeredHomes,
    pageTitle: "AirBnb",
    currentPage: "index",
  })
}}


//This is Higher order function which is returning anoter function
const getHomes = () => {
  return (req, res) => {
    const registeredHomes = Home.getAll();
    res.render("store/home-list", {
      registeredHomes,
      pageTitle: "Airbnb Home",
      currentPage: "homes",
    });
  };
};

//Get booking Function
const getBooking = (req, res) => {
  res.render("store/booking", {
    pageTitle: "My Booking",
    currentPage:  "bookings"
  });
}

const getFavorites = (req, res) => {
  res.render("store/fav-list", {
    pageTitle : "My Favorites",
    currentPage: "fav-list"
  })

}


export { getHomes, getBooking , getFavorites, getIndex};
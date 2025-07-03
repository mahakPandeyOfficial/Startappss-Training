import { Home } from '../models/home.js';
import { registeredHomes } from '../routes/hostRouter.js';



//This is Higher order function which is returning anoter function
const getHomes = () => {
  return (req, res) => {
    const registeredHomes = Home.getAll();
    res.render("store/home-list", {
      registeredHomes,
      pageTitle: "Airbnb Home"
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

export { getHomes, getBooking };
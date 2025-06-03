# 🛍️ ECommerceApp

A modern and responsive E-Commerce web application built with **React + Vite**, featuring product browsing, cart functionality, user authentication screens, and more. The app uses the **Fake Store API** for product data and is deployed on **Vercel**.

🔗 **Live Demo**: [https://startappss-training.vercel.app/](https://startappss-training.vercel.app/)

---

## 🚀 Features

- ⚡ Fast development and build process with **Vite**
- 🎨 Responsive UI using **Bootstrap**
- 🔀 Page navigation with **React Router DOM**
- 🛒 Cart functionality powered by **Redux**
- 📦 Product data fetched from [Fake Store API](https://api.escuelajs.co/api/v1/products)
- 🧱 Skeleton loaders for better user experience
- 🔧 Redux DevTools support
- 📱 Fully responsive for all screen sizes

---

## 🛠️ Getting Started

### ✅ Step 1: Create a React App using Vite

```bash
npm create vite@latest ECommerceApp
cd ECommerceApp
npm install

```

### 📦 Step 2: Install Essential Packages

# Install Bootstrap for styling
```
npm i bootstrap
```

# Install Font Awesome for icons
```
npm i font-awesome
```

# Install Redux and React-Redux for state management
```
npm i redux react-redux
```

# Install React Router DOM for routing
```
npm i react-router-dom
```

# Install Redux DevTools Extension for debugging
```
npm install --save @redux-devtools/extension
```

# Install Loading Skeletons
```
npm i react-loading-skeleton
```

### 🧱 Components Overview
📂 Main Components
- Navbar - Responsive navigation header

- Home - Landing page showcasing products

- Product - Product listings using API data

- Data Source: https://api.escuelajs.co/api/v1/products

- Displays product attributes like images, price, title, and more

- Includes loading skeletons during data fetching

- About - Static informational page

- Contact - Contact form and details

- Login - UI for user login

- Register - UI for user registration

- Cart - View, add, and remove products in cart

### 🧠 Redux Setup
- Store Configuration: Created a central store using Redux

- Actions: Defined actions to add or remove items from the cart

- Reducers: Handled cart state updates

- Integration: Connected components using react-redux

- DevTools: Enabled debugging with @redux-devtools/extension

### 🛒 Cart Functionality
 - Add products to cart from product page

 - Remove items from the cart

 - View item count and total price

 - Cart state managed globally via Redux

🧑‍💻 Developer Info
Author: Mahak Pandey

GitHub: [mahak
](https://github.com/mahakPandeyOfficial)
Deployed On: Vercel

📄 License
This project is licensed under the MIT License.

🌟 Show Your Support
If you found this project helpful, consider giving it a ⭐️ on GitHub!

You can copy and paste this into your `README.md` file. Let me know if you want to auto-generate badges or include screenshots, contribution guidelines, or API documentation!


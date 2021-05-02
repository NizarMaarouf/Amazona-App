2. Prepare my ide
  1. Code Editor
  2. Web Browser
  3. VS Code Extension
3. Website Template
  1. Create amazona folder
  2. Create template folder
  3. Create index.html
  4. add default HTML code
  5. link to style.css
  6. Create header ,main ,footer
  7. style elements
4. Display Products
  1. Create products div
  2. add product attributes
  3. add link , image ,name ,price
5. Create React App
  1. npx create-react-app frontend
  2. npm start
  3. Remove unused files
  4. copy index.html content to App.js
  5. copy style.css content to index.css
  6. replace class with className
6. Push my app to github
  1. git init
  2. git add README.md
  3. git commit -m "first commit"
  4. git branch -M main
  5. git remote add origin https://github.com/NizarMaarouf/stam.git
  6. git push -u origin main
7. Create Rating and Product Component
   1. create components/Rating.js
   2. create div.rating
   3. style div.rating ,span and last span
   4. Create Product Component
   5. Use Rating component
8 Build Product Screen
   1. Install react-router-dom
   2. Use BrowserRouter and Router for Home Screen
   3. CraeteHomeScreen.js
   4. Add product list code there
   5. Craete ProductScreen.js
   6. Add new Router from product details to App.js
   7. Create 3 colums for product image , info and action
9. Create Node.js Server
   1. run npm init in root folder
   2. Update package.json set type: module
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node package/server.js
   7. require express
   8. create route for / return backend is ready
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start
10. Load Products From Backend
   1. edit HomeScreen.js
   2. define products , loading and error
   3. create useEffect
   4. define async fetchData and call it
   5. install axios
   6. get data from /api/products
   7. show them in the list
   8. create Loading Component
   9. create Message Box Component
   10. use them in HomeScreen
   

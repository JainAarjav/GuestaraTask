# GuestaraTask

##Features
Create, retrieve, update, and search for categories, subcategories, and items.
Flexible relationships between categories, subcategories, and items.
RESTful APIs for easy integration with any frontend.
MongoDB is used as the database.

##How to Run Locally 

##Prerequisites
1.Install Node.js (v16 or higher) and npm.
2.Install MongoDB (or use MongoDB Atlas for a hosted solution).
3.Clone the repository:
git clone https://github.com/<your-repo-name>.git
cd menu-management-backend

##Steps to Run Locally

1.Install dependencies:
    npm install
2.Create a .env file in the root directory and add the following variables:
  MONGO_URI=<your-mongodb-connection-string>
PORT=5000
3. Start the application
    npm run dev
4.Open Postman or any API client and test the application using:

  Base URL: http://localhost:5000

## **Key Endpoints**

| Method | Endpoint                                | Description                           |
|--------|-----------------------------------------|---------------------------------------|
| POST   | `/categories`                           | Create a new category                 |
| GET    | `/categories`                           | Get all categories                    |
| POST   | `/subcategories/:categoryId`            | Create a subcategory under a category |
| GET    | `/subcategories`                        | Get all subcategories                 |
| POST   | `/items/subcategory/:subCategoryId`     | Create an item under a subcategory    |
| GET    | `/items`                                | Get all items                         |
| GET    | `/items/search?name=<itemName>`         | Search items by name                  |

## **Q&A**

### **1. Which database have you chosen and why?**
I chose **MongoDB** because:
- It’s a NoSQL database, well-suited for hierarchical data like categories, subcategories, and items.
- Its flexible schema allows dynamic updates as the data structure evolves.
- MongoDB Atlas provides a managed cloud solution, making deployment and scaling easier.

---

### **2. 3 Things Learned From This Assignment**
1. Implementing **RESTful APIs** with proper structuring of controllers, routes, and models.
2. Deploying a Node.js application on **Render** with environment variables for secure configuration.

---

### **3. What Was the Most Difficult Part of the Assignment?**
The most challenging part was setting up the correct relationships between categories, subcategories, and items, ensuring each entity is referenced properly while keeping the APIs intuitive and flexible.

---

### **4. What Would You Have Done Differently Given More Time?**
- Added **unit tests** with Jest to ensure reliability.
- Implemented **authentication and authorization** to secure the APIs.




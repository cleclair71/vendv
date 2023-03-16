# E-commerce Back End Starter Code

Set up the project:
a. Clone the starter code repository and make your own repository with the starter code.
b. Install necessary packages: npm install mysql2 sequelize dotenv express
c. Create a .env file in the root directory and add your MySQL username, password, and database name.

Create the database schema and seed data:
a. Open MySQL shell and run the commands in the schema.sql file to create the database.
b. Run npm run seed to seed the database with test data.

Create the Sequelize models:
a. Create a models folder in the root directory.
b. Inside the models folder, create the following files: Category.js, Product.js, Tag.js, and ProductTag.js.
c. Define the models in each file as specified in the assignment.

Create associations between the models:
a. In models/index.js, import all the models.
b. Define the associations as specified in the assignment.
c. Export the models.

Set up the Express.js API:
a. Create a routes folder in the root directory.
b. Inside the routes folder, create subfolders for categories, products, and tags.
c. Create route files for each model: categoriesRoutes.js, productsRoutes.js, and tagsRoutes.js.
d. Define the required API routes in each file.
e. In server.js, import and use the routes.

Test the application:
a. Start the application with npm start or node server.js.
b. Open Insomnia Core and test the API routes for categories, products, and tags.

Create a walkthrough video demonstrating the functionality and acceptance criteria:
a. Record a video showing all the API routes working in Insomnia Core.
b. Include GET, POST, PUT, and DELETE routes for categories, products, and tags.
c. Submit a link to the video and add it to the README of your project.
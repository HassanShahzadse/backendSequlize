# Node Express Sequelize Project

This is a Node.js project template for building a web application using Express.js, Sequelize ORM, JSON Web Tokens (JWT), and bcrypt for user authentication and authorization. The project includes functionality for user signup, login, reset password, and role-based authentication. The routes are set up using Express Router.

## Installation

1. Clone the repository or download the project files.
2. Install the dependencies by running the following command in the project directory:

   ```shell
   npm install
   ```

3. Create a `.env` file in the project root directory and define the following environment variables:

   ```plaintext
   SERVER_PORT=8000
   DB_HOST=<your_database_host>
   DB_PORT=<your_database_port>
   DB_NAME=<your_database_name>
   DB_USER=<your_database_username>
   DB_PASSWORD=<your_database_password>
   JWT_SECRET=<your_jwt_secret_key>
   ```

## Usage

To start the application, run the following command in the project directory:

```shell
npm start
```

The server will start running on the specified `SERVER_PORT` in the `.env` file.

## Routes

The following routes are available in the application:

### Auth Routes

- `POST /auth/signup` - User signup route.
- `POST /auth/login` - User login route.
- `POST /auth/reset-password` - User password reset route.

### User Routes

- `GET /users/getUser` - Get all users route (requires authentication).
- `GET /users/getUserById` - Get user by ID route.
- `POST /users/createUser` - Create a new user route.
- `PUT /users/updateUser` - Update user details route.
- `DELETE /users/deleteUser` - Delete user route.
- `GET /users/adminPage` - Admin page route (requires admin role).
- `GET /users/homePage` - Home page route.
- `GET /users/dashboard` - Dashboard route (requires authentication).

Please note that the routes requiring authentication or specific roles are protected by middleware to ensure only authenticated and authorized users can access them.

## Dependencies

The major dependencies used in this project are:

- Express.js: Web application framework for Node.js.
- Sequelize: Promise-based ORM for Node.js.
- JSON Web Token (JWT): Authentication mechanism for securing API endpoints.
- bcrypt: Password hashing library for encrypting user passwords.
- dotenv: Environment variable management.

Make sure to check the `package.json` file for a complete list of dependencies and their versions.

## Database Configuration

The project uses Sequelize ORM to connect to the database. The database configuration can be found in the `config/dbconnection.js` file. Update the configuration settings based on your database setup.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to modify and adapt the project to suit your specific requirements. Happy coding!

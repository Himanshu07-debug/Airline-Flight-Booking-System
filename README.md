# Airline-Flight-Booking-System ✈️🛫

Welcome to the Airline-Flight-Booking-System, a microservice architecture backend API project built using NodeJS, ExpressJS, MySQL, and JavaScript. This project provides advanced flight search and booking functionalities, ensuring modularity and scalability.

## Key Features 🌟

- **Microservices Architecture**: Includes Flights-and-Search Service, FlightAuthService, and FlightBookingService.
- **API Gateway**: Implemented with http-proxy middleware for secure and seamless client request routing.
- **Advanced Search and Booking**: Filter flights by price and time.

## File Structure 📂

The project is organized into four main folders:
1. **Flights-and-Search Service**
2. **FlightAuthService**
3. **FlightBookingService**
4. **API Gateway**

Each service runs on a different port, ensuring modularity and ease of management.

## Getting Started 🚀

### Installation and Setup 🔧

#### For any of the 3 services (Flights-and-Search Service, FlightAuthService, FlightBookingService):

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/Airline-Flight-Booking-System.git
   cd Airline-Flight-Booking-System
   
2. **Install dependencies:**
   ```sh
   npm install

3. **Environment Variables:**
   - Create a .env file in the root directory and add the following:
    ```plaintext
      PORT=[Your Port name]
      DB_SYNC = true
    ```
    
3. **Setup Config.json:**
   - Inside the src/config folder create a new file config.json and then add the following piece of json
   ```plaintext
     {
      "development": {
        "username": <YOUR_DB_LOGIN_NAME>,
        "password": <YOUR_DB_PASSWORD>,
        "database": "Flights_Search_DB_DEV",
        "host": "127.0.0.1",
        "dialect": "mysql"
      }
    }
   ```

4. **Migrations:**
   - Once you've added your db config as listed above, go to the src folder from your terminal and execute npx sequelize db:create and then execute
   ```sh
   sequelize db:create
   npx sequelize db:migrate

5. **Start Server:**
   - npm start

#### For API-Gateway:

1. **Install dependencies:**
   ```sh
   npm install

2. **Environment Variables:**
   - Create a .env file in the root directory and add the following:
    ```plaintext
      PORT = [API_Gateway Port number]
      AUTH_SERVICE = [Auth Service server link - eg : http://localhost:3001]
      BOOKING_SERVICE = [Booking Service server link]
    ```

3. **Start Server:**
   - npm start

## 📬 Contact

Feel free to reach out to me at [himanshusharma2002.2000@gmail.com](mailto:himanshusharma2002.2000@gmail.com) or connect with me on [LinkedIn](https://www.linkedin.com/in/himanshu-sharma-dev).


Thank you for checking out Airline Flight Booking System! If you have any feedback or suggestions, feel free to open an issue or make a pull request.

Happy coding! 😊

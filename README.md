# Eventify

## About the Project
Eventify is a web-based platform designed to enhance community engagement by providing a centralized location for discovering and participating in local events. This project simplifies the process of viewing and posting events without the need for user login or profile management, making it accessible to anyone interested in local events.

## Features
- **Event Listings**: Browse and search for events based on categories such as location, date, and type.
- **Event Posting**: Easily add new events to the platform through a simple form.

## Getting Started

### Prerequisites
- Java JDK 11 or newer
- Node.js
- npm (Node Package Manager)
- MySQL

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/kculbreth36/Eventify.git
   cd Eventify
Set up the MySQL database
Create a database and import the provided commappdb.sql file to set up the initial tables.
Configure Spring application
Navigate to the src/main/resources directory.
Update the application.properties file with your database credentials and any other configurations.
Run the Spring application
Make sure you are in the project root directory.
Use the following command to start the Spring application:
sh
Copy code
./mvnw spring-boot:run
Ensure the application starts successfully and connects to the database.
Install and configure the front-end
Navigate to the front-end directory if it's separate (adjust the path as needed).
Install NPM packages:
sh
Copy code
npm install
If necessary, update any file paths in the front-end configuration to match your local setup.
Run the front-end application
sh
Copy code
npm start
This will typically start the front-end on http://localhost:3000.
Usage

Navigate to http://localhost:3000 in your web browser to start exploring and posting local community events. The interface allows you to view existing events and add new events using a simple form.

Contributing

Contributions to enhance Eventify's functionality or improve its design are welcome. Follow these steps to contribute:

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
Contact

Project Link: https://github.com/kculbreth36/Eventify

All rights reserved. Unauthorized copying of files, via any medium, is strictly prohibited without the explicit permission of the author.

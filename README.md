# FitTrack

FitTrack is a 3-tier web application designed to help users achieve their fitness and nutritional goals. It includes a frontend built with React.js, a backend for processing data, and a load balancer to efficiently distribute client requests across multiple servers.

## Architecture

- **Frontend:** Built using React.js, provides the user interface for interacting with the application. It's responsive and user-friendly, allowing users to track their exercises, nutrition, and more.
- **Backend:** Handles business logic, database operations, and API integration. Ensures data is processed and stored securely.
- **Load Balancer:** Distributes incoming network traffic across multiple backend servers to ensure reliability and high availability.

## Features

- **Exercise Tracker:** Log and track various exercises.
- **Nutrition Tracker:** Monitor dietary intake.
- **Blog:** Access fitness-related articles and tips.
- **Health Calculator:** Tools to calculate BMI, BMR, and other health-related metrics.
- **User Authentication:** Secure login and registration system.

## Technology Stack

- **React.js:** Used for building the frontend.
- **Proxmox:** Virtual environment to view and manage the infrastructure.
- **APIs:** Integrates various external APIs for fetching exercise data, nutrition information, etc.

## Deployment

The application is designed to be accessible on school Wi-Fi, ensuring it is easily available to students and staff. It uses a load balancer to manage traffic, which helps in handling multiple requests without any downtime.

## Getting Started

To run the application on your local machine, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory and install dependencies: npm install
3. Start the development server: npm start
4. Open your browser and visit `http://localhost:3000` to view the application.

## Contact

Bisma Khan - [bismak0220@gmail.com](mailto:bismak0220@gmail.com)


# Ordering Food App

This is a food ordering app that allows users to order food from restaurants. It is built using the MERN stack. The app uses Auth0 for authentication and MongoDB for data storage and management.

The users can search for restaurants, view detailed information about each restaurant, and order food from the restaurant. The app also provides a user profile page where users can view their order history.

The app also provides a page for managing restaurants, allowing users to create and edit they own restaurants.

The app uses Stripe for payment processing and Zod for data validation.

## Stripe

Stripe is on test mode, so if users try to order food, they will be charged a test card.
Use the following card for testing:

```
Test Card Number: 4242 4242 4242 4242
Test Card CVC: 123
Test Card Expiration: 12/26
```

## Technologies Used

- React
- Typescript
- Auth0
- Stripe
- Shadcn UI
- Tailwind CSS
- React Router
- React Hook Form
- React Query
- React Lucide for Icons
- MongoDB
- Zod

## Features

- User authentication using Auth0
- User profile page
- Restaurant management with CRUD operations
- Order management with CRUD operations
- Search functionality for restaurants
- Detailed restaurant information
- Order status tracking
- Protected routes

## Screenshots

- Home Page
  ![Home Page](https://raw.githubusercontent.com/Erik5CA/mern-food-app-frontend/refs/heads/main/src/assets/screenshots/main.jpeg)

- Search Page
  ![Search Page](https://raw.githubusercontent.com/Erik5CA/mern-food-app-frontend/refs/heads/main/src/assets/screenshots/search.jpeg)

- Restaurant Order Page
  ![Restaurant Order Page](https://raw.githubusercontent.com/Erik5CA/mern-food-app-frontend/refs/heads/main/src/assets/screenshots/order.jpeg)

## Installation

1. Clone the repository
2. Install dependencies using `npm install`
3. Create a `.env` file in the root directory and add the following variables:

```
VITE_AUTH0_CLIENT_ID=your_client_id
VITE_AUTH0_DOMAIN=your_domain
VITE_AUTH0_AUDIENCE=your_audience
VITE_AUTH0_CALLBACK_URL=your_callback_url
VITE_API_BASE_URL=your_api_base_url
```

4. Start the server using `npm start`
5. Open the app in your browser at `http://localhost:3000`

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

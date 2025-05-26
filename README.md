## About GenZilla
GenZilla is an ecommerce platform made for Gen Z. It has a collection of products based on the latest trends, including prints, artwork, and lifestyle items. The platform is easy to use, works well on all devices, and offers secure payment options.

## Technologies Used

- **Frontend**: React, Redux Toolkit, Vite, SCSS
- **Backend**: Strapi, SQLite, Cloudinary
- **Payments**: Stripe

##Features
- Built with **React** and **Vite** for fast development and performance.
- **Redux Toolkit** for state management with persistence using `redux-persist`.
- **Stripe Integration** for secure payment processing.
- Responsive design using **SCSS** for styling.
- Dynamic routing with **React Router**.

## Installation

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Clone the Repository
```bash
git clone https://github.com/paragmilmile24/GenZilla-Frontend.git
```

### Install Dependencies

```bash
cd GenZilla-Frontend
npm install
```

### Env file
Create a `.env` file in the `ecommerce-website` directory:
```properties
VITE_SERVER_BASE_URL=http://localhost:1337/api
VITE_SERVER_API_TOKEN=<your_strapi_api_token>
VITE_STRIPE_PUBLISHABLE_KEY=<your_stripe_publishable_key>
```

## Running the Project

### Start the Frontend
```bash
cd GenZilla-Frontend
npm run dev
```

## Deployment

Build the frontend for production:
```bash
cd GenZilla-Frontend
npm run build
```



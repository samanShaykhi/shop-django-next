# Shop Django Next

A modern full-stack e-commerce application built with **Next.js** and **Django REST Framework**.

## Overview

Shop Django Next is a full-stack online store project developed with a decoupled architecture. The frontend is built using Next.js and Redux, while the backend exposes RESTful APIs through Django REST Framework secured with JWT authentication.

The project includes product management, blog articles, user accounts, comments, and order management features.

> 🚧 This project is currently under active development and new features are being added continuously.

---

## Tech Stack

### Frontend

* Next.js
* React
* Redux Toolkit
* Tailwind CSS
* Axios

### Backend

* Django
* Django REST Framework
* JWT Authentication
* SQLite / PostgreSQL

### Development Tools

* Git
* GitHub
* REST API Architecture

---

## Features

### Customer Features

* User Registration & Login
* JWT Authentication
* Browse Products
* Product Details Page
* Add Products to Cart
* Place Orders
* Comment on Products
* Read Blog Articles

### Admin Features

* Manage Products
* Create, Edit and Delete Products
* Manage Blog Articles
* Manage User Comments
* Manage Orders
* Manage Users

---

## Project Structure

```bash
shop-django-next/
│
├── frontend/          # Next.js Application
│
├── backend/           # Django REST API
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/samanShaykhi/shop-django-next.git

cd shop-django-next
```

### Backend Setup

```bash
cd backend

python -m venv venv

source venv/bin/activate
# Windows:
# venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

Backend Server:

```bash
http://127.0.0.1:8000
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend Application:

```bash
http://localhost:3000
```

---

## Environment Variables

Backend:

```env
SECRET_KEY=your_secret_key

DEBUG=True
```

Frontend:

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api
```

---

## API Authentication

Authentication is implemented using JSON Web Tokens (JWT).

Protected routes require a valid access token in the request headers.

---

## Roadmap

* [x] Authentication System
* [x] Product Management
* [x] Article Management
* [x] Order Management
* [x] Comment System
* [ ] Product Search
* [ ] Product Filtering
* [ ] Online Payment Integration
* [ ] Email Notifications
* [ ] Docker Deployment
* [ ] Automated Testing

---

## Screenshots

Screenshots and demo GIFs will be added soon.

---

## Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

---

## License

This project is open-source and available under the MIT License.

---

## Author

**Saman Shaykhi**

GitHub: https://github.com/samanShaykhi

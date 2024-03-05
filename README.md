# Mongo + Express + React + NestJS (MERN)

## Description
Project combines React for building the front-end, NestJS for the back-end, and Material-UI (MUI) for consistent design. With React, I've created a user-friendly interface where users can be easily created and managed. The form for adding users is powered by React, ensuring smooth interactions and real-time updates. Behind the scenes, NestJS manages the server-side operations such as storing and fetching user data, offering a reliable and scalable solution. Material-UI adds a polished look and feel to the interface, making it visually appealing and easy to navigate for users.

## Before Installation

### Version

```
$ Node >= v16
$ TypeScript >= v4
```

### Environment
```bash
# In frontend directory change .env file parameters' values (or leave default ones)
VITE_APP_BASE_URL
VITE_APP_BASE_PREFIX

# In backend directory change .env file parameters' values (or leave default ones)
BASE_PREFIX
PORT
MONGO_HOST
```

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# Run all parts
$ yarn run dev

# Run only frontend
$ yarn run dev:fe

# Run only backend
$ yarn run dev:be
```

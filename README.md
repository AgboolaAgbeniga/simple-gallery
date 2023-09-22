# Simple Gallery

![App Screenshot](./screenshot.png)

## Overview

Simple Gallery is a web application that allows authenticated users to access and manage a gallery of images fetched from the Unsplash API. Users can search for images by keywords and rearrange the order of images using drag-and-drop functionality. This README provides an overview of the project, setup instructions, and usage guidelines.

**Live Demo:** [Simple Gallery](https://simple-gallery-gamma.vercel.app/)

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Authentication: Users can log in using their email and password. Only authenticated users can access the gallery.
- Gallery: Displays a collection of images fetched from the Unsplash API.
- Search: Users can search for images by entering keywords in the search box.
- Drag and Drop: Allows users to rearrange the order of images in the gallery using drag-and-drop functionality.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- Firebase Account: You need a Firebase project for authentication. Create one at [Firebase](https://firebase.google.com/).

## Getting Started

1. Clone the repository:

    ```bash
   git clone https://github.com/your-username/simple-gallery.git

2. Navigate to the project directory:

    ```bash
   cd simple-gall2ery

3. Install dependencies:

   ```bash
   npm install
4. Set up Firebase:

5. Create a Firebase project on the Firebase Console.

6. Set up Firebase Authentication with email and password.

7. Create a .env file in the project root and add your Firebase configuration:

   ```makefile
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   Replace your-api-key, your-auth-domain, and other values with your Firebase project details.

8. Start the development server:

   ```bash
   npm start
The app will be available at http://localhost:3000.

## Usage
- Open the app in your web browser.

- Log in using the provided test credentials:
   ```
   Username: user@example.com
   Password: 1Password

- Explore the gallery, search for images, and try the drag-and-drop functionality to rearrange images.

- Enjoy using Simple Gallery!

# Contributing
Contributions are welcome! To contribute to this project, follow these steps:

- Fork the repository.

- Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
- Make your changes and commit them:

   ```
   git commit -m "Add your commit message here"

- Push your changes to your forked repository:
   ```
   git push origin feature/your-feature-name
- Open a pull request to the main repository.

Your contributions will be reviewed, and once accepted, they will be merged into the project.

# License
This project is licensed under the MIT License - see the LICENSE.md file for details.
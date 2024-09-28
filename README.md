
# Compo_Net 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/talha1230/Compo_Net)
[![Forks](https://img.shields.io/github/forks/talha1230/Compo_Net?style=social)](https://github.com/talha1230/Compo_Net/fork)
[![Node Version](https://img.shields.io/badge/node-14+-brightgreen)](https://nodejs.org/)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/talha1230/Compo_Net)

Compo_Net is an open-source project that showcases various UI components. Inspired by [Aceternity](https://ui.aceternity.com/) and [Uiverse](https://uiverse.io/), this project aims to provide a platform where developers can create, share, and explore UI components.

## Table of Contents 📚

- [Features](#features)
- [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the Project](#running-the-project)
   - [Steps to Deploy on Vercel](#steps-to-deploy-on-vercel)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features ✨

- Showcase various UI components.
- Easy to add new components.
- Responsive design.
- Built with Next.js and Tailwind CSS.
- Open-source and community-driven.

## Getting Started 🚀

### Prerequisites 📋

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation 💻

1. Clone the repository:

    ```sh
    git clone https://github.com/talha1230/Compo_Net.git
    cd Compo_Net
    ```

2. Install dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

### Running the Project 🏃‍♂️

To start the development server, run:

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Steps to Deploy on Vercel 🌐

For a professional deployment with the resources you have, I recommend using Vercel. It is optimized for Next.js, easy to set up, and offers a generous free tier that should be sufficient for your project.

1. **Sign Up**: Go to [Vercel](https://vercel.com/) and sign up using your GitHub account.
2. **Import Project**: Click on "New Project" and import your GitHub repository.
3. **Configure Build Settings**:
    - **Build Command**: `npm run build`
    - **Output Directory**: `.next`
4. **Deploy**: Click "Deploy" and wait for the deployment to complete.

### Additional Resources 📖

- [Azure Static Web Apps Documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- [Azure App Service Documentation](https://docs.microsoft.com/en-us/azure/app-service/)
- [Vercel Documentation](https://vercel.com/docs)

## Project Structure 🗂️

```plaintext
Compo_Net/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Container.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   └── Showcase.tsx
│   └── globals.css
├── build-cache/
├── next-env.d.ts
├── package.json
├── pages/
│   ├── api/
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx
├── .parcel-cache/
├── public/
│   ├── favicon.ico
│   ├── images/
│   │   └── logo.png
│   └── robots.txt
├── README.md
├── src/
│   ├── lib/
│   │   └── utils.ts
│   ├── hooks/
│   │   └── useCustomHook.ts
│   └── types/
│       └── index.d.ts
├── tailwind.config.js
├── tsconfig.json
└── styles/
    └── globals.css
```

## Contributing 🤝

We welcome contributions from the community! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

Please make sure to update tests as appropriate.

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.

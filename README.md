
# Compo_Net

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/talha1230/Compo_Net)
[![Forks](https://img.shields.io/github/forks/talha1230/Compo_Net?style=social)](https://github.com/talha1230/Compo_Net/fork)
[![Node Version](https://img.shields.io/badge/node-14+-brightgreen)](https://nodejs.org/)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/talha1230/Compo_Net)


Compo_Net is an open-source project that showcases various UI components. Inspired by [Aceternity](https://ui.aceternity.com/) and [Uiverse](https://uiverse.io/), this project aims to provide a platform where developers can create, share, and explore UI components.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Showcase various UI components.
- Easy to add new components.
- Responsive design.
- Built with Next.js and Tailwind CSS.
- Open-source and community-driven.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

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

### Running the Project

To start the development server, run:

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```plaintext
Compo_Net/
├── .next/
├── .parcel-cache/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Container.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Skills.tsx
│   │   │   └── Showcase.tsx
│   └── globals.css
├── pages/
│   ├── api/
│   └── index.tsx
├── public/
├── src/
├── styles/
│   └── globals.css
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Contributing

We welcome contributions from the community! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

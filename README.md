# Tasky - Task Management Dashboard for TeachMateAI

## Overview

Tasky is a task management dashboard designed for TeachMateAI. It provides a user-friendly interface for managing tasks, allowing users to create, view, edit, and delete tasks seamlessly. The application is built using Next.js, React, and incorporates various components for a modular and organized structure.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and run Tasky locally, follow these steps:

```bash
git clone https://github.com/yourusername/tasky.git
cd tasky
npm install
npm run dev
```

Make sure you have Node.js and npm installed on your machine.

## Usage

Tasky simplifies task management with an intuitive dashboard. Users can create new tasks, provide details such as title, description, date, completion status, and importance. The application offers a responsive and visually appealing design to enhance the user experience.

```bash
npm start
```

## Components

Tasky is composed of several React components, each serving a specific purpose:

- `RootLayout`: Layout structure for the entire application.
- `Home`: Home page component integrating with Sidebar, Contents, and other elements.
- `AddTask`: Form component for creating new tasks.
- `TaskList`: Component for displaying a list of tasks.
- `TaskCard`: Component representing an individual task with delete and edit functionalities.
- `Contents`: Container for managing task-related components and state.

## Contributing

Contributions to Tasky are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

# Record Registry React.js

This is a mini project that demonstrates a simple React application for managing user data. The application allows users to input and store data, switch between dark and light modes, and delete previously entered data.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Demo](#demo)

## Project Overview

This React application is designed to manage user data through a simple user interface. The primary functionality of the application includes:

- **Input Form**: Users can input their name, age, subscription status, and employment status through a user-friendly form.

- **Data Storage**: The entered data is stored in local storage, allowing the application to retain the data even after the user refreshes or closes the application.

- **Dark Mode**: Users can toggle between dark and light modes for the application interface, providing a customized user experience.

- **Data Display**: The entered data is displayed in a table format, allowing users to view and select individual entries.

- **Deletion**: Users can delete previously entered data entries.

## Features

- **Input Form**: Users can input their name, age, subscription status, and employment status. The form includes various input elements such as text fields, a numeric input for age, a dropdown for subscription status, and a checkbox for employment status.

- **Data Display**: The entered data is displayed in a table with columns for name, age, subscription, and employment status. Users can click on a row to select and highlight it.

- **Data Storage**: The application uses local storage to persist the entered data even after the user closes or refreshes the application.

- **Dark Mode**: Users can toggle between dark and light modes for the application interface. The dark mode provides a visually appealing and comfortable viewing experience in low-light conditions.

- **Deletion**: Users can delete selected data entries using the "Delete" button.

## Usage
### Input Form:

1. Enter your name, age, select your subscription status, and check your employment status.
2. Click the "Insert" button to add your data to the table.

### Dark Mode:

- Toggle between dark and light modes using the "Mode" switch.

### Data Display:

- View your entered data in a table format.
- Click on a row to select and highlight it.

### Deletion:

- Select a row by clicking on it.
- Click the "Delete" button to remove the selected row from the table.

## File Structure
The project directory structure is organized as follows:

- **`App.jsx`**: The main application component that manages the state and functionality of the application.

- **`AgeInput.jsx`**: A component responsible for handling age input with increment and decrement buttons.

- **`CheckEmploy.jsx`**: A component that manages the checkbox for employment status.

- **`DropdownSelect.jsx`**: A component that provides a dropdown selection for subscription status.

- **`FormView.jsx`**: The component responsible for rendering the input form and related components.

- **`NameInput.jsx`**: A component for entering the user's name.

- **`ResultView.jsx`**: The component responsible for displaying the data table.

- **`SwitchMode.jsx`**: A component that provides the dark mode toggle switch.

- **`index.css`**: The CSS file for styling the application.

- **`index.js`**: The entry point of the React application.

## Demo
You can view a live demo of this project [here](https://record-registry.netlify.app/).
![Screenshot](https://github.com/yusup-rd/react-record-registry/assets/71926209/b9b813f1-242c-4089-9de3-c247757d3640)

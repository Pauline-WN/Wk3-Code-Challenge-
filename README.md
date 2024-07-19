# Flatdango Movie Theater

Welcome to Flatdango, a web application that allows users to browse movies and book tickets online at the Flatiron Movie Theater.

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Project Description

Flatdango is an interactive web application that provides users with an easy-to-use interface for viewing a list of movies and booking tickets. The application fetches movie data from a local server running JSON Server and displays it dynamically. Users can see movie details including the poster, title, runtime, showtime, description, and available tickets. They can also purchase tickets, with the available ticket count updating accordingly.

## Features

- Display a list of available movies in a slideshow format.
- Show detailed information for each movie, including:
  - Poster
  - Title
  - Runtime
  - Showtime
  - Description
  - Available tickets
- Dynamically update the available ticket count when tickets are purchased.
- Disable the "Buy Ticket" button when no tickets are available.

## Technologies Used

- HTML
- CSS
- JavaScript
- JSON Server (for local data storage and API simulation)

## Setup and Installation

To set up and run this project locally, follow these steps:

### Prerequisites

- Node.js installed on your machine.

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/flatdango.git
   cd flatdango
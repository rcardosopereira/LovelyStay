# GitHub User Fetcher

This command-line application allows you to fetch information about GitHub users and store it in a PostgreSQL database.

## Requirements

- Node.js
- TypeScript
- PostgreSQL
- pg-promise

## Installation

1. **Clone the repository:**

   ```bash
   git clone git@github.com:rcardosopereira/LovelyStay.git
   ```

2. **Install dependencies:**

   ```bash
   cd LovelyStay
   npm install
   ```

3. **Set up PostgreSQL:**

   - Install PostgreSQL if you haven't already.
   - Create a new database for the application.
   - Run database migrations:

     If using knex.js:
     ```bash
     knex migrate:latest
     ```

4. **Configure database connection:**

   - Open `db.ts` and update the database connection parameters.

## Usage

### Fetch GitHub User Data

To fetch information about a GitHub user and store it in the database:

```bash
npm start fetch <username>
```

Replace `<username>` with the GitHub username you want to fetch.

### Display All Users

To display all users stored in the database:

```bash
npm start list
```

### Display Users by Location

To display users from a specific location:

```bash
npm start list --location <location>
```

Replace `<location>` with the desired location.

## Run Tests

To run tests:

```bash
npm test
```

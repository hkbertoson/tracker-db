# Request Tracker

Web App to track requests and hours

## Run Locally

Clone the project

```bash
  https://github.com/hkbertoson/tracker-db.git
```

Go to the project directory

```bash
  cd tracker-db
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Run Docker

```bash
docker compose build && docker compose up -d
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL="mysql://root:password@localhost:3306/requests?connect_timeout=300"`

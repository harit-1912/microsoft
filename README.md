# Harit Ledger API

A Node.js, Express, and MongoDB backend for account management, authentication, transactions, immutable ledger entries, and email notifications.

## Owner

Harit Prakash  
Email: [haritprakash19@gmail.com](mailto:haritprakash19@gmail.com)  
GitHub: [github.com/harit-1912](https://github.com/harit-1912)

## Run locally

1. Install dependencies with `npm install`.
2. Create a `.env` file from `.env.example`.
3. Add a MongoDB connection string and email provider credentials.
4. Start development mode with `npm run dev`, or use `npm start`.

The API listens on port `3000` by default. `GET /` returns the Harit Ledger service status.

## Main routes

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/accounts`
- `POST /api/accounts`
- `POST /api/transactions`

This repository should only be used and redistributed where you have permission to modify and reuse the source code.

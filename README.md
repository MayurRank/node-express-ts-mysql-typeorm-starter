## Node + Express + TypeScript + MySQL + TypeORM Starter

Well structred example of Node.js API server with TypeScript, MySQL and TypeORM

It can help on easy start for building Node.js API server with authentication setup

## Project Structure

```sh
.
├── src/
│   ├── config                # contains all configs for application
│   ├── constants             # contains all constants
│   ├── entities              # contains typeorm entities
│   ├── helpers               # contains all helpers (like api, encryption, validation etc..) and utils
│   ├── locale                # locale language files
│   ├── middlewares           # contains all middlewares (like authenticate, errorHandler)
│   ├── modules               # contains all modules (like auth, user), routes. main app features logic
│   ├── types                 # contains all types declarations
│   └── index.ts              # main entry file
├── .gitignore                # specifies intentionally untracked files to ignore
├── .nvmrc                    # specifies node version to be used
├── .prettierrc               # prettier config
├── combined.log              # server log | this file will be automatically generated
├── environment.d.ts          # environment variables declarations
├── environment.js            # environment variables to be access from this file
├── error.log                 # error log | this file will be automatically generated
├── nodemon.json              # nodemon config
├── ormconfig.js              # ormconfig config
├── package-lock.json         # package-lock describes dependency tree
├── package.json              # build scripts and dependencies
├── README.md                 # project info
├── tsconfig.json             # typescript config for compiler options and include directory/files
└── tslint.json               # tslint config

```

## Pre-reqs

To build and run this app locally you will need:

- Install [Node.js](https://nodejs.org/en/)
- Install [MySQL](https://dev.mysql.com/doc/mysql-getting-started/en/)

## Getting started

- Clone the repository

```
git clone https://github.com/MayurRank/node-express-ts-mysql-typeorm-starter.git
```

- Install dependencies

```
cd node-express-ts-mysql-typeorm-starter
npm install
```

- Make sure MySQL is configured and running

- Create a `.env` file in the root directory and add your values

```dosini
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=some_password
DB_NAME=some_db_name
TOKEN_SECRET_KEY=secret
```

[more on dotenv](https://github.com/motdotla/dotenv/blob/master/README.md#usage)

- Development

```
npm run dev
```

- Build and run the project

```
npm run start
```

## Note

Migration setup pending..

<p align="center">
  <h3 align="center">Renshou</h3>
  <p align="center">Monitoring system aggregating data on hydrological and air quality hazards.</p>
</p>

---

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

👩🏻‍🌾 Monitoring system aggregating data on hydrological and air quality hazards.

<br>

## 💻 Running Locally

<br>

### Backend

> 💡 Execute every command in the `./backend` directory!

**If you want to make changes** to the **Fastify** app, you need to:

- Install **Node.js**, then projects requirements.

  ```bash
  node install
  ```

- Spin up **MongoDB**.

- Fill out .env file.

- Run `start.js`, entry point for Fastify app.

  ```bash
  npm run serve
  ```

  This will spin up all the necessary containers and expose Renshou service **API** at `http://127.0.0.1:3000`.

<br>

### Frontend

> 💡 Execute every command in the `./frontend` directory!

If **you want to make changes** to the **Vue.js** app, you need to:

- Install **NPM**, then projects requirements.

  ```bash
  npm install
  ```

- To then serve a website, simply type:

  ```bash
  npm run serve
  ```

This will create a development web server at `http://127.0.0.1:8080`.
And It's a lot simpler!

<br>

## 📃 License

This project is licensed under [GPL-3.0](https://choosealicense.com/licenses/gpl-3.0/) .

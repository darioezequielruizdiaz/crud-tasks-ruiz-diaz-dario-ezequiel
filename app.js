import express from "express"
import chalk from "chalk";
import dotenv from "dotenv";
import { startDB } from "./src/config/database.js";
import routerTask from "./src/routers/task.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", routerTask);

// Hacemos que la app escuche el puerto e iniciamos la base de datos
app.listen(PORT, async () => {

    await startDB();
    console.log(`EL servidor se está ejecutando en ${chalk.bgMagenta(`http://localhost:${PORT}/`)}`);
});
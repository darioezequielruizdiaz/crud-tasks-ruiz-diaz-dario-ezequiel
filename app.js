import express from "express"
import chalk from "chalk";
import dotenv from "dotenv";
import { startDB } from "./src/config/database.js";

// importacion de las rutas
import routerTask from "./src/routers/task.routes.js";
import routerUser from "./src/routers/user.routes.js";
import routerProfile from "./src/routers/profile.routes.js";
import routerTag from "./src/routers/tag.routes.js";
import routerTaskTag from "./src/routers/tasktag.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", routerTask);
app.use("/api", routerUser);
app.use("/api", routerProfile);
app.use("/api", routerTag);
app.use("/api", routerTaskTag);

// Hacemos que la app escuche el puerto e iniciamos la base de datos
app.listen(PORT, async () => {

    await startDB();
    console.log(`EL servidor se está ejecutando en ${chalk.bgMagenta(`http://localhost:${PORT}/`)}`);
});
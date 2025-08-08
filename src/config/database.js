import { Sequelize } from "sequelize";
import chalk from "chalk";
import dotenv from 'dotenv'

dotenv.config();

// Intanciamos la clase de Sequelize
export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
)

// Funcion para iniciar la conexion a la base de datos
export const startDB = async () => {
    try {

        await sequelize.authenticate()
        await sequelize.sync()
        console.clear();
        console.log(chalk.bgGreen.black("✅ Conexión exitosa a la base de datos ✅ \n"))

    } catch (error) {

        console.clear();
        console.log("\n" + chalk.red("❌ Error al conectar con la base de datos: ❌"))
        console.log(chalk.redBright("────────────────────────────────────────────"));
        console.log(`${chalk.yellow("🆔 Nombre:")} ${error.name}`);
        console.log(`${chalk.yellow("✉️ Mensaje:")} ${error.message || "No hay mensaje"}`);
        
        if (error.original?.code) {
            console.log(`${chalk.yellow("⚠️ Código:")} ${error.original.code}`)
        }

        console.log(chalk.redBright("────────────────────────────────────────────\n"))
    }
}
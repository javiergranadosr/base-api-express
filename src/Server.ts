import cors from "cors";
import express from "express";
import morgan from "morgan";
import { ConfigServer } from "./config/ConfigServer";
import { UserRouter } from "./routes/UserRouter";

class ServerBootstrap extends ConfigServer {
  private app: express.Application = express();
  private port: number = this.getNumberEnv("PORT") || 8001;

  constructor() {
    super();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(morgan("dev"));

    // TODO: DB CONEXION

    this.app.use("/api/v1/", this.routers());

    this.listen();
  }

  private routers(): Array<express.Router> {
    return [new UserRouter().router];
  }

  private listen() {
    this.app.listen(this.port, () => {
      console.log("listening on port " + this.port);
    });
  }
}

new ServerBootstrap();

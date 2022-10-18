import * as dotenv from "dotenv";

export abstract class ConfigServer {
  constructor() {
    dotenv.config({ path: ".env" });
  }

  protected getEnvironment(key: string): string | undefined {
    return process.env[key];
  }

  protected getNumberEnv(key: string): number {
    return Number(process.env[key]);
  }
}

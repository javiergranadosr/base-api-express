import { Router } from "express";

/**
 * ! CLASE BASE PARA MANEJO DE RUTAS
 * ! (T) = CONTROLADOR
 * ! (M) = MIDDLWARE
 */
export class BaseRouter<T> {
  public router: Router;
  protected controller: T;

  constructor(TController: { new (): T }) {
    this.router = Router();
    this.controller = new TController();
    this.routes();
  }

  protected routes() {}
}

import express from 'express';
import { IApp } from './IApp';

/**
 * Wrapper primario per la creazione di un'applicazione lato server.
 * Si fonda essenzialmente su Express.
 */
export class App implements IApp {
  router: express.Application;

  constructor() {
    this.router = express();
  }

  listen(port: number) {
    return this.router.listen(port);
  }
}

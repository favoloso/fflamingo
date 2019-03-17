import { Server } from 'http';

/**
 * Al momento lasciamo libero l'accesso a `App.app` in modo tale
 * che sia possibile utilizzare direttamente i metodi di Express.
 *
 * Qui però potremo predisporre l'integrazione con framework terzi.
 */
export interface IApp {
  listen(port: number): Server;
}

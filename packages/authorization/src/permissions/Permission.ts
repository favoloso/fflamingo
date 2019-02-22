/**
 * Un permesso autorizzativo permette di accedere a un insieme di operazioni
 * che lo richiedono.
 */
export class Permission<T extends string> {
  static Separator = ':';

  constructor(public name: T) {}

  static create<T extends string>(name: T) {
    return new this(name);
  }
}

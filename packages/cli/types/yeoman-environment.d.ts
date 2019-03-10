export = environment;
declare class environment {
  static createEnv(args?: any, opts?: any, adapter?: any): any;
  static defaultMaxListeners: any;
  static enforceUpdate(env: any): any;
  static init(): void;
  static listenerCount(emitter: any, type: any): any;
  static namespaceToName(namespace: any): any;
  static queues: any;
  static usingDomains: boolean;
  constructor(args?: any, opts?: any, adapter?: any, ...args: any[]);
  arguments: any;
  options: any;
  adapter: any;
  cwd: any;
  store: any;
  runLoop: any;
  sharedFs: any;
  lookups: any;
  aliases: any;
  addListener(type: any, listener: any): any;
  alias(match: any, value: any): any;
  create(namespace: any, options: any): any;
  emit(type: any, args: any): any;
  error(err: any): any;
  eventNames(): any;
  findGeneratorsIn(searchPaths: any): any;
  get(namespaceOrPath: any): any;
  getByPath(path: any): any;
  getGeneratorNames(): any;
  getGeneratorsMeta(): any;
  getMaxListeners(): any;
  getNpmPaths(): any;
  help(name: any): any;
  instantiate(Generator: any, options: any, ...args: any[]): any;
  listenerCount(type: any): any;
  listeners(type: any): any;
  lookup(cb: any): any;
  namespace(filepath: any): any;
  namespaces(): any;
  off(type: any, listener: any): any;
  on(type: any, listener: any): any;
  once(type: any, listener: any): any;
  prependListener(type: any, listener: any): any;
  prependOnceListener(type: any, listener: any): any;
  rawListeners(type: any): any;
  register(name: any, namespace: any): any;
  registerStub(Generator: any, namespace: any, resolved: any): any;
  removeAllListeners(type: any, ...args: any[]): any;
  removeListener(type: any, listener: any): any;
  resolveModulePath(moduleId: any): any;
  run(args: any, options: any, done: any, ...args: any[]): any;
  setMaxListeners(n: any): any;
}
declare namespace environment {
  class EventEmitter {
    // Circular reference from environment.EventEmitter
    static EventEmitter: any;
    static defaultMaxListeners: any;
    static init(): void;
    static listenerCount(emitter: any, type: any): any;
    static usingDomains: boolean;
    addListener(type: any, listener: any): any;
    emit(type: any, args: any): any;
    eventNames(): any;
    getMaxListeners(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    off(type: any, listener: any): any;
    on(type: any, listener: any): any;
    once(type: any, listener: any): any;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    rawListeners(type: any): any;
    removeAllListeners(type: any, ...args: any[]): any;
    removeListener(type: any, listener: any): any;
    setMaxListeners(n: any): any;
  }
  namespace util {
    function duplicateEnv(initialEnv: any): any;
    function log(params: any): any;
  }
}

export type Permissions<T extends string> = T[];

/**
 * Crea un permesso con il nome specificato e ne mantiene il tipo (TS)
 */
export function permission<T extends string>(name: T) {
  return name;
}

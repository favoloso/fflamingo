import yargs from 'yargs';

/**
 * Tipizzazione con inference per i comandi di Yargs.
 */
export const command = <U>(cmd: yargs.CommandModule<{}, U>) => cmd;

export type CommandArguments<U> = U extends yargs.CommandModule<any, infer A>
  ? yargs.Arguments<A>
  : never;

import yargs from 'yargs';

/**
 * Tipizzazione con inference per i comandi di Yargs.
 */
export const command = <U>(cmd: yargs.CommandModule<{}, U>) => cmd;

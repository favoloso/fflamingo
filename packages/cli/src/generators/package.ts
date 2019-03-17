import Generator from 'yeoman-generator';
import { PackageCommandArguments } from 'src/commands/add-cmds/package';
import path from 'path';
import chalk from 'chalk';
// import mkdirp from 'mkdirp';
import findUp from 'find-up';

/**
 * Yeoman generator to scaffold a package (monorepo).
 */
export default class PackageGenerator extends Generator {
  answers!: {
    name: string;
    bundle: 'babel' | 'rollup';
    author: string;
  };
  pkg!: { [key: string]: any };
  path!: string;
  opts: PackageCommandArguments;

  constructor(args: string | string[], opts: PackageCommandArguments) {
    super(args, opts);
    this.opts = opts;
    this.path = opts.dir;
  }

  paths() {
    this.sourceRoot(path.join(__dirname, '../../templates'));

    this.destinationRoot(path.resolve(this.path));
    process.chdir(this.destinationRoot());
  }

  async prompting() {
    this.answers = (await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Nome del package',
        default: this.opts.name || this.determineAppname()
      },
      {
        type: 'list',
        name: 'bundle',
        choices: [
          {
            name: 'Rollup (richiesto se deve essere usato lato browser)',
            value: 'rollup'
          },
          {
            name: 'Babel (nessun bundling, lato Node)',
            value: 'babel'
          }
        ],
        default: this.opts.bundle
      },
      {
        type: 'input',
        name: 'author',
        message: 'Autore',
        default: this.user.git.name()
          ? `${this.user.git.name()} <${this.user.git.email()}>`
          : undefined
      }
    ])) as any;
  }

  async writing() {
    const copy = (fileName: string) => {
      this.fs.copy(
        this.templatePath(`package/${fileName}`),
        this.destinationPath(fileName)
      );
    };

    const copyTpl = (fileName: string, subs: object) => {
      this.fs.copyTpl(
        this.templatePath(`package/${fileName}`),
        this.destinationPath(fileName),
        subs
      );
    };

    // Creazione del `package.json`
    this.pkg = {
      name: this.answers.name,
      author: this.answers.author,
      types: 'lib/index.d.ts'
    };

    // Detect monorepo
    const lernaPath = findUp.sync('lerna.json');
    const isMonorepo = lernaPath != null;
    if (isMonorepo) {
      const lernaDir = path.dirname(lernaPath!);
      console.log(chalk.cyan('Monorepo trovata a ') + chalk.green(lernaDir));

      this.pkg.publishConfig = {
        access: 'public'
      };
    } else {
      /**
       * @todo Supportare la divisione fra monorepo e non monorepo.
       */
      console.log(
        chalk.red(
          'Non è stata trovata una configurazione monorepo. Alcune funzionalità sono sperimentali.'
        )
      );
    }

    switch (this.answers.bundle) {
      case 'babel':
        this.pkg.scripts = babelScripts(isMonorepo);
        break;
      case 'rollup':
        this.pkg.scripts = rollupScripts(isMonorepo);
        break;
    }

    // Common scripts
    this.pkg.scripts.test = 'jest';

    this.fs.writeJSON(this.destinationPath('package.json'), this.pkg);

    // Copia dei file
    copy('tsconfig.json');
    copy('jest.config.js');
    copy('.babelrc');
    this.fs.copy(
      this.templatePath('package/src/**/*'),
      this.destinationPath('src')
    );

    copyTpl('README.md', {
      name: this.answers.name
    });

    if (this.answers.bundle === 'rollup') {
      const rootMode = isMonorepo ? 'upward' : 'root';
      copyTpl('rollup.config.js', { rootMode });
    }
  }
}

/**
 * Creazione comandi per babel
 */
function babelScripts(isMonorepo: boolean) {
  const rootMode = isMonorepo ? ' --root-mode upward' : '';
  return {
    dev: `babel src -w -d lib --copy-files -x '.ts,.tsx'${rootMode}`,
    build: `babel src -d lib --copy-files -x '.ts,.tsx'${rootMode}`,
    'check-types': 'tsc --noEmit'
  };
}

/**
 * Creazione comandi per rollup
 */
function rollupScripts(isMonorepo: boolean) {
  return {
    dev: `rollup -c -w`,
    build: 'yarn build:lib && yarn build:types',
    'build:lib': 'rollup -c',
    'build:types': 'tsc --emitDeclarationOnly',
    'check-types': 'tsc --noEmit'
  };
}

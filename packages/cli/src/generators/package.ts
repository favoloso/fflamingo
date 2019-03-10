import Generator from 'yeoman-generator';

export default class PackageGenerator extends Generator {
  answers!: {
    name: string;
  };
  pkg!: object;

  constructor(args: string | string[], opts: {}) {
    super(args, opts);
  }

  paths() {
    this.sourceRoot('../../templates/');
  }

  async prompting() {
    this.answers = (await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Nome del package ',
        default: this.appname
      }
    ])) as any;

    this.pkg = {
      name: this.answers.name
    };
  }

  async writing() {
    this.fs.copy('package/tsconfig.json', 'tsconfig.json');
  }
}

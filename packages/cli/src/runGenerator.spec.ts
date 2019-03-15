import { runGenerator } from './runGenerator';

jest.mock('yeoman-environment', () => ({
  createEnv: jest.fn().mockReturnValue({
    register: jest.fn(),
    run: (t: any, g: any, cb: any) => {
      cb(null, 'done');
    }
  })
}));

describe('run generator', () => {
  test('should run generator returning a promise', async () => {
    expect(runGenerator('package', {})).resolves.toEqual('done');
  });
});

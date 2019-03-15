import { runGenerator } from './runGenerator';
import { createEnv } from 'yeoman-environment';

jest.mock('yeoman-environment', () => ({
  createEnv: jest.fn().mockReturnValue({
    register: jest.fn(),
    run: jest.fn()
  })
}));

describe('run generator', () => {
  test('should run generator returning a promise', async () => {
    createEnv().run.mockImplementationOnce((a: any, b: any, cb: any) =>
      cb(null, 'done')
    );
    return expect(runGenerator('package', {})).resolves.toBeUndefined();
  });

  test('should reject promise if failed', async () => {
    createEnv().run.mockImplementationOnce((a: any, b: any, cb: any) =>
      cb('err')
    );
    return expect(runGenerator('package')).rejects.toEqual('err');
  });
});

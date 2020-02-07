import { appName, init } from './main.js';
test('init function exists', () => {
  expect(appName).toBe('Neutron');
  expect(init).toBeDefined();
});

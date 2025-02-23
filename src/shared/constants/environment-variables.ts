import packageJson from '../../../package.json';

const { version } = packageJson;

const uri: { [key: string]: string } = {
  development: 'https://jsonplaceholder.typicode.com/todos',
  production: 'https://jsonplaceholder.typicode.com',
  test: 'https://'
};

const NODE_ENV = process.env.NEXT_NODE_ENV;

export { uri, version, NODE_ENV };

export const isRunningOnServer = typeof window === 'undefined' ? true : false;

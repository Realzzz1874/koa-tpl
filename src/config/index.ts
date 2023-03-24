import { DataSourceOptions } from 'typeorm';

export default {
  typeorm: {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'xxx',
    password: 'xxx',
    database: 'test',
    synchronize: true,
    logging: false,
    entities: ['src/entity/*.ts'],
    cli: {
      entitiesDir: 'src/entity',
    },
  } as DataSourceOptions,
};

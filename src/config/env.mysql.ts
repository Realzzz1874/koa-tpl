import { DataSourceOptions } from 'typeorm';

export default {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'A123456..',
  database: 'dev',
  synchronize: true,
  logging: false,
  entities: ['src/entity/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
  },
} as DataSourceOptions;

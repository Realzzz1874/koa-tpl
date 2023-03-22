import { DataSource } from 'typeorm';
import config from '../config/index';

const db = new DataSource(config.typeorm);
export default db;

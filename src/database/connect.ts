import { DataSource } from 'typeorm';
import 'reflect-metadata';
import config from '../config/index';

const db = new DataSource(config.typeorm);
export default db;

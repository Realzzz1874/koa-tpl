import { DataSource } from 'typeorm';
import 'reflect-metadata';
import config from '../config/index';

const db = new DataSource(config.mysql);
export default db;

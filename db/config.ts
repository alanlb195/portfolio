import { defineDb } from 'astro:db';
import { Certificates, Projects } from './tables';

export default defineDb({
  tables: {
    Certificates,
    Projects,
  },
});

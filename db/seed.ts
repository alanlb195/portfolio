import { Certificates, db, Projects, } from 'astro:db';
import { CertificatesSeed } from './seed/CertificatesSeed';
import { ProjectsSeed } from './seed/ProjectsSeed';

// https://astro.build/db/seed
export default async function seed() {

	await db.insert(Certificates).values(CertificatesSeed);

	await db.insert(Projects).values(ProjectsSeed);
}

export interface IUser {
	id: number | null;
	name: string | null;
	first_name: string | null;
	last_name: string | null;
	run: string | null;
	dv: string | null;
	email: string | null;
	job_title: string | null;
	office_location: string | null;
	photo: string | null;
	roles: object | null;
}

export type role = 'USER' | 'OPERATOR' | 'ADMIN';

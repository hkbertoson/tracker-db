export const requestValues = [
	{value: 'Rem', name: 'Rem'},
	{label: 'Add On', name: 'Add'},
	{label: 'Migration', name: 'Migration'},
	{label: 'New Logo', name: 'Logo'},
];

export const statusValues = [
	{value: 'To be Started', name: 'Start'},
	{value: 'Completed', name: 'Complete'},
	{value: 'Awaiting Customer Confirmation', name: 'Waiting'},
	{value: 'Work in Progress', name: 'Progress'},
];

export interface RequestPageProps {
	id: number;
	name: string;
	project_id: string;
	account_name: string;
	status: string;
	request_type: string;
	billing_code: string | null;
	legacy_org: string;
	total_hours_spent: number;
	comment: string;
	last_updated: string;
}

export interface MainPageProps {
	title: string;
	url: URL | string;
}
export interface RequestData {
	id: number;
	name: string;
	project_id: string;
	account_name: string;
	status: string;
	value: string;
}

export interface UserPageProps {
	id: number;
	name: string;
	email: string;
	eid: string;
	legacy_org: string;
	cost_center: string;
	profit_center: string;
	phone_number: string;
}

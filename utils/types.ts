export type InputChangeEventHandler =
	React.ChangeEventHandler<HTMLInputElement>;
export type TextareaChangeEventHandler =
	React.ChangeEventHandler<HTMLTextAreaElement>;
export type SelectChangeEventHandler =
	React.ChangeEventHandler<HTMLSelectElement>;

export const requestValues = [
	{value: 'Rem'},
	{label: 'Add On'},
	{label: 'Migration'},
	{label: 'New Logo'},
];

export const statusValues = [
	{value: 'To be Started'},
	{value: 'Completed'},
	{value: 'Awaiting Customer Confirmation'},
	{value: 'Work in Progress'},
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
export interface RequestData {
	id: number;
	name: string;
	project_id: string;
	account_name: string;
	status: string;
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

export interface RequestData {
	value: string;
}

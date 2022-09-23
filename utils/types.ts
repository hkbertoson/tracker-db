export type InputChangeEventHandler =
	React.ChangeEventHandler<HTMLInputElement>;
export type TextareaChangeEventHandler =
	React.ChangeEventHandler<HTMLTextAreaElement>;
export type SelectChangeEventHandler =
	React.ChangeEventHandler<HTMLSelectElement>;

export const requestValues = [
	{value: 'Rem', label: 'Rem'},
	{label: 'Add On', value: 'Add on'},
	{label: 'Migration', value: 'Migration'},
	{label: 'New Logo', value: 'New Logo'},
];

// export const statusValues = [
// 	{label: 'To be Started', value: 'To Be Started'},
// 	{label: 'Completed', value: 'Completed'},
// 	{
// 		label: 'Awaiting Customer Confirmation',
// 		value: 'Awaiting Customer Confirmation',
// 	},
// 	{label: 'Work in Progress', value: 'Work in Progress'},
// ];
export const statusValues = [
	{value: 'To be Started'},
	{value: 'Completed'},
	{value: 'Awaiting Customer Confirmation'},
	{value: 'Work in Progress'},
];
export interface RequestData {
	id: number;
	name: string;
	project_id: string;
	account_name: string;
	status: string;
}

export interface RequestData {
	value: string;
}

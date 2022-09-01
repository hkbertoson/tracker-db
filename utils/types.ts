export type InputChangeEventHandler =
	React.ChangeEventHandler<HTMLInputElement>;
export type TextareaChangeEventHandler =
	React.ChangeEventHandler<HTMLTextAreaElement>;
export type SelectChangeEventHandler =
	React.ChangeEventHandler<HTMLSelectElement>;

export const requestTypes = [
	{label: 'Rem', value: 'Rem'},
	{label: 'Add On', value: 'Add_on'},
	{label: 'Migration', value: 'Migration'},
	{label: 'New Logo', value: 'New_Logo'},
];

export const statusTypes = [
	{label: 'To be Started', value: 'To_be_Started'},
	{label: 'Completed', value: 'Completed'},
	{
		label: 'Awaiting Customer Confirmation',
		value: 'Awaiting_Customer_Confirmation',
	},
	{label: 'Work in Progress', value: 'Work_in_Progress'},
];

import React, {useState} from 'react';
import {SelectChangeEventHandler} from '../../utils/types';
import Router from 'next/router';

interface A {}

const AddRequest = () => {
	const requestTypes = [
		{label: 'Rem', value: 'Rem'},
		{label: 'Add On', value: 'Add_on'},
		{label: 'Migration', value: 'Migration'},
		{label: 'New Logo', value: 'New_Logo'},
	];

	const statusTypes = [
		{label: 'To be Started', value: 'To_Be_Started'},
		{label: 'Completed', value: 'Completed'},
		{
			label: 'Awaiting Customer Confirmation',
			value: 'Awaiting_Customer_Confirmation',
		},
		{label: 'Work in Progress', value: 'Work_in_Progress'},
	];
	const [name, setName] = useState<string>('');
	const [projectID, setProjectID] = useState<string>('');
	const [accountName, setAccountName] = useState<string>('');
	const [status, setStatus] = useState<string>('');
	const [requestType, setRequestType] = useState<string>('');
	const [totalHours, setTotalHours] = useState<number>(0);

	const submitData = async (e: any) => {
		e.preventDefault();
		try {
			const data = {
				name,
				projectID,
				accountName,
				status,
				requestType,
				totalHours,
			};
			await fetch('/api/requests/add', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify(data),
			});
			await Router.push('/requests');
		} catch (error) {
			console.log(error);
		}
	};

	const updateRequest: SelectChangeEventHandler = (event) => {
		setRequestType(event.currentTarget.value);
	};

	const updateStatus: SelectChangeEventHandler = (event) => {
		setStatus(event.currentTarget.value);
	};

	const updateHours = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTotalHours(parseInt(e.currentTarget.value));
	};

	return (
		<>
			<div className="container flex-auto">
				<form onSubmit={submitData}>
					<h1 className="text-3xl text-center">New Request</h1>
					<div className="text-center grid grid-cols-2 gap-3">
						<input
							className="input input-bordered w-full"
							type="text"
							placeholder="Name"
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
						<input
							className="input input-bordered w-full"
							type="text"
							placeholder="Project ID"
							onChange={(e) => {
								setProjectID(e.target.value);
							}}
						/>
						<input
							className="input input-bordered w-full"
							type="text"
							placeholder="Account Name"
							onChange={(e) => {
								setAccountName(e.target.value);
							}}
						/>
						<input
							className="input input-bordered w-full"
							type="number"
							placeholder="Total Hours Worked"
							onChange={updateHours}
						/>
						<label>
							Request Type:
							<select
								onChange={updateRequest}
								className="select w-full max-w-xs">
								{requestTypes.map((type) => (
									<option key={type.value} value={type.value}>
										{type.label}
									</option>
								))}
							</select>
						</label>
						<label>
							Current Status:
							<select
								onChange={updateStatus}
								className="select w-full max-w-xs">
								{statusTypes.map((type) => (
									<option key={type.value} value={type.value}>
										{type.label}
									</option>
								))}
							</select>
						</label>
						<button
							className="btn btn-primary"
							disabled={
								!name || !projectID || !accountName || !status || !requestType
							}
							type="submit">
							Add
						</button>
					</div>
				</form>
			</div>
		</>
	);
};
export default AddRequest;

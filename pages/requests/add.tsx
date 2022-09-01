import React, {useState} from 'react';
import {
	InputChangeEventHandler,
	SelectChangeEventHandler,
} from '../../utils/types';
import Router from 'next/router';

const AddRequest = () => {
	const requestTypes = [
		{label: 'Rem', value: 'Rem'},
		{label: 'Add On', value: 'Add_On'},
		{label: 'Migration', value: 'Migration'},
		{label: 'New Logo', value: 'New_Logo'},
	];
	const [name, setName] = useState('');
	const [projectID, setProjectID] = useState('');
	const [accountName, setAccountName] = useState('');
	const [status, setStatus] = useState('');
	const [requestType, setRequestType] = useState('');
	const [totalHours, setTotalHours] = useState('');

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

	return (
		<>
			<div className="container flex-auto">
				<form onSubmit={submitData}>
					<h1 className="text-3xl text-center">New Request</h1>
					<div className="text-center grid grid-cols-2 gap-3">
						<input
							className="border border-black"
							type="text"
							placeholder="Name"
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
						<input
							className="border border-black"
							type="text"
							placeholder="Project ID"
							onChange={(e) => {
								setProjectID(e.target.value);
							}}
							value={projectID}
						/>
						<input
							className="border border-black"
							type="text"
							placeholder="Account Name"
							onChange={(e) => {
								setAccountName(e.target.value);
							}}
							value={accountName}
						/>
						<input
							className="border border-black"
							type="text"
							placeholder="Total Hours Worked"
							onChange={(e) => {
								setTotalHours(e.target.value);
							}}
							value={totalHours}
						/>
						<div className="dropdown">
							<select
								className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
								onChange={updateStatus}>
								<option value="Rem">Rem</option>
								<option value="Add_on">Add on</option>
								<option value="New_Logo">New Logo</option>
								<option value="Migration">Migration</option>
							</select>
						</div>
						<label>
							Request Type:
							<select value={requestType} onChange={updateRequest}>
								<option value="Rem">Rem</option>
								<option value="Add_on">Add on</option>
								<option value="New_Logo">New Logo</option>
								<option value="Migration">Migration</option>
							</select>
						</label>
						<label>
							Current Status:
							<select value={status} onChange={updateStatus}>
								<option value="To_Be_Started">To be Started</option>
								<option value="Work_in_Progress">Work in Progress</option>
								<option value="Awaiting_Customer_Confirmation">
									Awaiting Customer Confirmation
								</option>
								<option value="Completed">Completed</option>
							</select>
						</label>
						<button
							className="border border-black bg-red-100 object-center"
							disabled={!name || !projectID}
							type="submit">
							Create
						</button>
					</div>
				</form>
			</div>
			<div className="form-control w-full max-w-xs">
				<label className="label">
					<span className="label-text">What is your name?</span>
				</label>
				<input
					type="text"
					placeholder="Type here"
					className="input input-bordered w-full max-w-xs"
				/>
				<label className="label">
					<span className="label-text">What is the Project ID?</span>
				</label>
				<input
					type="text"
					placeholder="Type here"
					className="input input-bordered w-full max-w-xs"
				/>
				<label className="label">
					<span className="label-text">What is the Account Name?</span>
				</label>
				<input
					type="text"
					placeholder="Type here"
					className="input input-bordered w-full max-w-xs"
				/>
				<label className="label">
					<span className="label-text">Total Hours Worked</span>
				</label>
				<input
					type="text"
					placeholder="Type here"
					className="input input-bordered w-full max-w-xs"
				/>
				<label className="label">
					<span className="label-text">Request Type:</span>
				</label>
				<select className="select w-full max-w-xs">
					<option disabled selected>
						Select
					</option>
					<option>REM</option>
					<option>Add On</option>
					<option>New Logo</option>
					<option>Migration</option>
				</select>
				<label className="label">
					<span className="label-text">Current Status</span>
				</label>
				<select className="select w-full max-w-xs">
					<option disabled selected>
						Select
					</option>
					<option>To be Started</option>
					<option>Work in Progress</option>
					<option>Awaiting Customer Confirmation</option>
					<option>Completed</option>
				</select>
				<button type="button" className="btn btn-primary">
					Create
				</button>
			</div>
		</>
	);
};
export default AddRequest;

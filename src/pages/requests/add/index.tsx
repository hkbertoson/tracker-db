import React, {useState} from 'react';
import {requestTypes, statusTypes} from '../../../utils/types';
import {SelectChangeEventHandler} from '../../../utils/types';
import Router from 'next/router';
import Link from 'next/link';

const AddRequest = () => {
	const [name, setName] = useState('');
	const [projectID, setProjectID] = useState('');
	const [accountName, setAccountName] = useState('');
	const [status, setStatus] = useState('');
	const [requestType, setRequestType] = useState('');
	const [totalHours, setTotalHours] = useState(0);

	const submitData = async (e: any) => {
		e.preventDefault();
		if (
			!name ||
			!projectID ||
			!accountName ||
			!status ||
			!requestType ||
			!totalHours
		) {
			alert('Please fill in all fields');
			return;
		}
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
			<h1 className="text-3xl text-center">
				<Link href="/">New Request</Link>
			</h1>
			<div className="m-auto">
				<form onSubmit={submitData}>
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
						<button className="btn btn-primary" type="submit">
							Add
						</button>
					</div>
				</form>
			</div>
		</>
	);
};
export default AddRequest;

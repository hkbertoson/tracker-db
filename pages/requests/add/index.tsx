import React, {useState} from 'react';
import {
	requestValues,
	statusValues,
	SelectChangeEventHandler,
} from '../../../utils/types';
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

	const updateStatus: SelectChangeEventHandler = (event) => {
		setStatus(event.currentTarget.value);
	};

	const updateRequestType: SelectChangeEventHandler = (event) => {
		setRequestType(event.currentTarget.value);
	};

	const updateHours = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTotalHours(parseInt(e.currentTarget.value));
	};

	return (
		<>
			<h1 className="text-3xl text-center">
				<Link href="/">New Request</Link>
			</h1>
			<div>
				<form onSubmit={submitData}>
					<div className="text-center flex flex-col w-1/2 m-auto gap-1">
						<input
							className="input w-full input-bordered"
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
						<div className="form-control grid grid-cols-3 gap-2">
							<select
								onChange={updateStatus}
								className="select w-full max-w-xs select-bordered"
								value={''}>
								<option value={''} disabled>
									Select Request Status
								</option>
								{requestValues.map((type) => (
									<option key={type.value} value={type.value}>
										{type.label}
									</option>
								))}
							</select>
							<select
								onChange={updateRequestType}
								className="select w-full max-w-xs select-bordered"
								value={''}>
								<option value={''} disabled>
									Select a request type
								</option>
								{statusValues.map((type) => (
									<option key={type.value} value={type.value}>
										{type.label}
									</option>
								))}
							</select>
							<textarea
								className="textarea textarea-bordered"
								placeholder="Comments"></textarea>
						</div>
					</div>
					<div className="flex gap-1 justify-center">
						<button className="btn rounded-full text-lg pl-5" type="submit">
							Add
						</button>
						<Link href="/requests">
							<a
								role="button"
								className="btn btn-warning rounded-full text-lg pl-5">
								Back
							</a>
						</Link>
					</div>
				</form>
			</div>
		</>
	);
};
export default AddRequest;

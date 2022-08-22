import React, {useState} from 'react';
import Router from 'next/router';

const AddRequest = () => {
	const [name, setName] = useState('');
	const [projectID, setProjectID] = useState('');
	const [accountName, setAccountName] = useState('');
	const [status, setStatus] = useState('To_be_Started');
	const [requestType, setRequestType] = useState('');
	const [totalHours, setTotalHours] = useState(0);

	const submitData = async (e: React.SyntheticEvent) => {
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
	return (
		<>
			<div className="container flex-auto">
				<form onSubmit={submitData}>
					<h1 className="text-3xl">New Request</h1>
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
							placeholder="Request Type"
							onChange={(e) => {
								setRequestType(e.target.value);
							}}
							value={requestType}
						/>
						<button
							className="border border-black bg-red-100"
							disabled={!name || !projectID}
							type="submit">
							Create
						</button>
					</div>
				</form>
			</div>
		</>
	);
};
export default AddRequest;

import React, {useReducer, useState} from 'react';
import {
	requestValues,
	statusValues,
	SelectChangeEventHandler,
} from '@/utils/types';
import Router from 'next/router';
import Link from 'next/link';
import {AddButton, BackButton, HomeButton} from '@/components/Buttons';

const AddRequest = () => {
	const initialRequestState = {
		name: '',
		projectID: '',
		accountName: '',
		status: '',
		requestType: '',
		billingCode: '',
		legacyOrg: '',
		totalHours: 0,
	};
	const [requestData, setRequestData] = useState(initialRequestState);

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
				billingCode,
				legacyOrg,
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

	const updateLegacyOrg: SelectChangeEventHandler = (event) => {
		setLegacyOrg(event.currentTarget.value);
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
			<form onSubmit={submitData}>
				<div className="text-center flex flex-col w-1/2 m-auto gap-1">
					<input
						className="input input-bordered w-full"
						type="text"
						placeholder="Name"
						name="name"
						onChange={(e) => {
							setRequestData(e.target.value);
						}}
					/>
					<input
						className="input input-bordered w-full"
						type="text"
						name="projectID"
						placeholder="Project ID"
						onChange={(e) => {
							handleTextChange(e);
						}}
					/>
					<input
						className="input input-bordered w-full"
						type="text"
						name="Account Name"
						placeholder="Account Name"
						onChange={(e) => {
							handleTextChange(e);
						}}
					/>
					<input
						className="input input-bordered w-full"
						type="text"
						placeholder="Billing Code"
						onChange={(e) => {
							handleTextChange(e);
						}}
					/>
					<input
						className="input input-bordered w-full"
						type="number"
						name="Total Hours Worked"
						placeholder="Total Hours Worked"
						onChange={(e) => {
							handleTextChange(e);
						}}
					/>

					<div className="form-control grid grid-cols-3 gap-2">
						<select
							onChange={updateStatus}
							className="select w-full max-w-xs select-bordered"
							defaultValue={'DEFAULT'}>
							<option value="DEFAULT" disabled>
								Select Request Status
							</option>
							{statusValues.map((type) => (
								<option key={type.name} value={type.value}>
									{type.value}
								</option>
							))}
						</select>
						<select
							onChange={updateRequestType}
							className="select w-full max-w-xs select-bordered"
							defaultValue={'DEFAULT'}>
							<option value="DEFAULT" disabled>
								Select a request type
							</option>
							{requestValues.map((type) => (
								<option key={type.name} value={type.value}>
									{type.value}
								</option>
							))}
						</select>
						<select
							onChange={updateLegacyOrg}
							className="select w-full max-w-xs select-bordered"
							defaultValue={'DEFAULT'}>
							<option value="DEFAULT" disabled>
								Select Legacy Org
							</option>
							<option value="CSC">CSC</option>
							<option value="ES">ES</option>
						</select>
						<textarea
							className="textarea textarea-bordered"
							placeholder="Comments"
						/>
					</div>
				</div>
				<div className="flex gap-1 justify-center">
					<HomeButton url="/" title="Home" />
					<BackButton url="/requests" title="Back" />
					<button
						className="btn btn-primary rounded-full text-lg pl-5"
						type="submit">
						Submit
					</button>
				</div>
			</form>
		</>
	);
};
export default AddRequest;

import prisma from '../../lib/prisma';
import Link from 'next/link';
import {useState} from 'react';

export default function RequestPage({data}: any) {
	const requestTypes = [
		{label: 'Rem', value: 'Rem'},
		{label: 'Add On', value: 'Add_On'},
		{label: 'Migration', value: 'Migration'},
		{label: 'New Logo', value: 'New_Logo'},
	];

	const statusTypes = [
		{label: 'To be Started', value: 'To_be_Started'},
		{label: 'Completed', value: 'Completed'},
		{
			label: 'Awaiting Customer Confirmation',
			value: 'Awaiting_Customer_Confirmation',
		},
		{label: 'Work in Progress', value: 'Work_in_Progress'},
	];
	const [name, setName] = useState(data.name);
	const [projectID, setProjectID] = useState(data.project_id);
	const [accountName, setAccountName] = useState(data.account_name);
	const [status, setStatus] = useState(data.status);
	const [requestType, setRequestType] = useState(data.request_type);
	const [totalHours, setTotalHours] = useState(data.total_hours);

	const updateRequest = (event: any) => {
		setRequestType(event.currentTarget.value);
	};

	const updateStatus = (event: any) => {
		setStatus(event.currentTarget.value);
	};
	// const submitData = async (e: any) => {
	// 	e.preventDefault();
	// 	try {
	// 		const data = {
	// 			name,
	// 			projectID,
	// 			accountName,
	// 			status,
	// 			requestType,
	// 			totalHours,
	// 		};
	// 		await fetch('/api/requests/add', {
	// 			method: 'POST',
	// 			headers: {'Content-Type': 'application/json'},
	// 			body: JSON.stringify(data),
	// 		});
	// 		await Router.push('/requests');
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };
	console.log(data);
	return (
		<>
			<h1 className="text-center text-4xl">Request: {data.project_id}</h1>
			<div className="flex flex-col items-center">
				<div className="text-center grid grid-cols-2 gap-3">
					<input
						className="input input-bordered w-full"
						type="text"
						placeholder="Name"
						value={data.name}
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
						value={data.project_id}
					/>
					<input
						className="input input-bordered w-full"
						type="text"
						placeholder="Account Name"
						onChange={(e) => {
							setAccountName(e.target.value);
						}}
						value={data.account_name}
					/>
					<input
						className="input input-bordered w-full"
						type="text"
						placeholder="Total Hours Worked"
						onChange={(e) => {
							setTotalHours(e.target.value);
						}}
						value={data.total_hours}
					/>
					<label>
						Request Type:
						<select
							value={requestType}
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
							value={status}
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
						Update
					</button>
				</div>
				<Link href="/requests">
					<a className="text-2xl btn btn-accent">Back</a>
				</Link>
			</div>
		</>
	);
}

export async function getStaticPaths() {
	const data = await prisma.requests.findMany({});
	const paths = data.map((request) => ({
		params: {id: request.id.toString()},
	}));
	return {paths, fallback: false};
}

export async function getStaticProps({params}: any) {
	const data = await prisma.requests.findUnique({
		where: {id: Number(params.id)},
	});
	return {
		props: {
			data,
		},
	};
}

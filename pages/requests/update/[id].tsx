import prisma from '../../../lib/prisma';
import {
	requestValues,
	SelectChangeEventHandler,
	statusValues,
} from '../../../utils/types';
import Link from 'next/link';
import Router from 'next/router';
import {useState} from 'react';

export default function RequestPage({data}: any) {
	const [name, setName] = useState(data.name);
	const [project_id, setProjectID] = useState(data.project_id);
	const [account_name, setAccountName] = useState(data.account_name);
	const [status, setStatus] = useState(data.status);
	const [request_type, setRequestType] = useState(data.request_type);
	const [total_hours_spent, setTotalHours] = useState(data.total_hours_spent);
	const [billingCode, setBillingCode] = useState(data.billing_code);
	const requestID = data.id;

	const updateRequest: SelectChangeEventHandler = (event) => {
		setRequestType(event.currentTarget.value);
	};

	const updateStatus: SelectChangeEventHandler = (event) => {
		setStatus(event.currentTarget.value);
	};

	const updateHours = (e: any) => {
		setTotalHours(parseInt(e.currentTarget.value));
	};

	const submitData = async (e: any) => {
		e.preventDefault();
		try {
			const data = {
				name,
				project_id,
				account_name,
				status,
				request_type,
				total_hours_spent,
				billingCode,
			};
			await fetch(`/api/requests/update/${requestID}`, {
				method: 'PUT',
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
			<h1 className="text-center text-4xl">
				<Link href="/">{data.project_id}</Link>
			</h1>
			<div className="flex flex-col items-center">
				<div className="text-center grid grid-cols-2 gap-3">
					<input
						className="input input-bordered w-full"
						type="text"
						placeholder="Name"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
					<input
						className="input w-full max-w-xs"
						type="text"
						placeholder="Project ID"
						onChange={(e) => {
							setProjectID(e.target.value);
						}}
						value={project_id}
					/>
					<input
						className="input input-bordered w-full"
						type="text"
						placeholder="Account Name"
						onChange={(e) => {
							setAccountName(e.target.value);
						}}
						value={account_name}
					/>
					<input
						className="input input-bordered w-full"
						type="text"
						placeholder="Billing Code"
						onChange={(e) => {
							setBillingCode(e.target.value);
						}}
						value={billingCode}
					/>
					<input
						className="input input-bordered w-full"
						type="text"
						placeholder="Total Hours Worked"
						onChange={updateHours}
						value={total_hours_spent}
					/>
					<label>
						Request Type:
						<select
							value={request_type}
							onChange={updateRequest}
							className="select w-full max-w-xs">
							{requestValues.map((type) => (
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
							{statusValues.map((type) => (
								<option key={type.value} value={type.value}>
									{type.label}
								</option>
							))}
						</select>
					</label>
				</div>
				<div className="flex items-center">
					<button
						className="btn btn-primary"
						type="submit"
						onClick={submitData}>
						Update
					</button>
					<Link href="/requests">
						<a className="btn btn-accent">Back</a>
					</Link>
				</div>
			</div>
		</>
	);
}
export async function getServerSideProps({params}: any) {
	const data = await prisma.requests.findUnique({
		where: {id: parseInt(params.id)},
	});
	return {props: {data}};
}

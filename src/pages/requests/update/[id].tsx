import prisma from '../../../utils/prisma';
import {
	requestValues,
	SelectChangeEventHandler,
	statusValues,
	RequestPageProps,
} from '../@/utils/types';
import Link from 'next/link';
import Router from 'next/router';
import {useState} from 'react';

export default function RequestPage(data: RequestPageProps) {
	const [name, setName] = useState(data.name);
	const [project_id, setProjectID] = useState(data.project_id);
	const [account_name, setAccountName] = useState(data.account_name);
	const [status, setStatus] = useState(data.status);
	const [request_type, setRequestType] = useState(data.request_type);
	const [total_hours_spent, setTotalHours] = useState(data.total_hours_spent);
	const [billingCode, setBillingCode] = useState(data.billing_code);
	const [legacyOrg, setLegacyOrg] = useState(data.legacy_org);
	const [comment, setComment] = useState(data.comment);
	const requestID = data.id;

	const updateHours = (e: any) => {
		setTotalHours(parseInt(e.currentTarget.value));
	};

	const updateLegacyOrg: SelectChangeEventHandler = (event) => {
		setLegacyOrg(event.currentTarget.value);
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
			<h1 className="text-3xl text-center">
				<Link href="/">{data.project_id}</Link>
			</h1>
			<form onSubmit={submitData}>
				<div className="text-center flex flex-col w-1/2 m-auto gap-1">
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
						className="input w-full input-bordered"
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
						value={billingCode || ''}
					/>
					<input
						className="input input-bordered w-full"
						type="text"
						placeholder="Total Hours Worked"
						onChange={updateHours}
						value={total_hours_spent}
					/>
					<div className="form-control grid grid-cols-3 gap-2">
						<label>
							Request Type:
							<select
								value={request_type}
								onChange={(e) => {
									setRequestType(e.target.value);
								}}
								className="select w-full max-w-xs select-bordered">
								{requestValues.map((type) => (
									<option key={type.value} value={type.value}>
										{type.value}
									</option>
								))}
							</select>
						</label>
						<label>
							Current Status:
							<select
								value={status}
								onChange={(e) => {
									setStatus(e.target.value);
								}}
								className="select w-full max-w-xs select-bordered">
								{statusValues.map((type) => (
									<option key={type.value} value={type.value}>
										{type.value}
									</option>
								))}
							</select>
						</label>
						<label>
							Legacy Org:
							<select
								onChange={updateLegacyOrg}
								className="select w-full max-w-xs select-bordered"
								defaultValue={legacyOrg}>
								<option value="CSC">CSC</option>
								<option value="ES">ES</option>
							</select>
						</label>
						<textarea
							className="textarea textarea-bordered"
							value={comment || ''}
							placeholder="Comments"
							onChange={(e) => {
								setComment(e.target.value);
							}}
						/>
					</div>
				</div>
				<div className="flex gap-1 justify-center">
					<button
						className="btn btn-primary rounded-full text-lg pl-5"
						type="submit">
						Submit
					</button>
					<Link href="/">
						<a className="btn btn-secondary rounded-full text-lg pl-5">Home</a>
					</Link>
					<Link href="/requests">
						<a className="btn btn-warning rounded-full text-lg pl-5">Back</a>
					</Link>
				</div>
			</form>
		</>
	);
}
export async function getServerSideProps({params}: any) {
	const data = await prisma.requests.findUnique({
		where: {id: parseInt(params.id)},
	});
	return {props: data};
}

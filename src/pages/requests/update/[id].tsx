import MainButton from '@/components/Buttons/MainButton';
import prisma from '@/utils/prisma';
import {requestValues, statusValues, RequestPageProps} from '@/utils/types';
import Link from 'next/link';
import Router from 'next/router';
import {useState} from 'react';

export default function RequestPage(data: RequestPageProps) {
	const initialRequestState = {
		name: data.name,
		projectID: data.project_id,
		accountName: data.account_name,
		status: data.status,
		requestType: data.request_type,
		totalHours: data.total_hours_spent,
		legacyOrg: data.legacy_org,
		billingCode: data.billing_code,
		comments: data.comment,
		requestID: data.id,
	};

	const [requestDataState, setRequestDataState] = useState(initialRequestState);
	function handleChange(e: any) {
		e.preventDefault();
		setRequestDataState({
			...requestDataState,
			[e.target.name]: e.target.value,
		});
	}

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
				<Link href="/">New Request</Link>
			</h1>
			<form onSubmit={submitData}>
				<div className="text-center flex flex-col w-1/2 m-auto gap-1">
					<input
						className="input input-bordered w-full"
						type="text"
						placeholder="Name"
						name="name"
						value={requestDataState.name}
						onChange={handleChange}
					/>
					<input
						className="input input-bordered w-full"
						type="text"
						name="projectID"
						placeholder="Project ID"
						value={requestDataState.projectID}
						onChange={handleChange}
					/>
					<input
						className="input input-bordered w-full"
						type="text"
						name="accountName"
						placeholder="Account Name"
						value={requestDataState.accountName}
						onChange={handleChange}
					/>
					<input
						className="input input-bordered w-full"
						type="text"
						placeholder="Billing Code"
						name="billingCode"
						value={requestDataState.billingCode || ''}
						onChange={handleChange}
					/>
					<input
						className="input input-bordered w-full"
						type="number"
						name="totalHours"
						placeholder="Total Hours Worked"
						value={requestDataState.totalHours}
						onChange={handleChange}
					/>
					<div className="flex flex-row gap-1">
						<select
							onChange={handleChange}
							className="flex-grow w-auto"
							name="status"
							value={requestDataState.status}>
							<option value="0" disabled>
								Select Request Status
							</option>
							{statusValues.map((type) => (
								<option key={type.name} value={type.value}>
									{type.value}
								</option>
							))}
						</select>
						<select
							onChange={handleChange}
							className="flex-grow w-auto"
							name="requestType"
							value={requestDataState.requestType}>
							<option value="0" disabled>
								Select a request type
							</option>
							{requestValues.map((type) => (
								<option key={type.name} value={type.value}>
									{type.value}
								</option>
							))}
						</select>
						<select
							onChange={handleChange}
							className="flex-grow w-auto"
							name="legacyOrg"
							value={requestDataState.legacyOrg}>
							<option value="0" disabled>
								Select Legacy Org
							</option>
							<option value="CSC">CSC</option>
							<option value="ES">ES</option>
						</select>
					</div>
					<textarea
						className="textarea textarea-bordered"
						placeholder="Comments"
						name="comments"
						onChange={handleChange}
						value={requestDataState.comments}
					/>
					<label>Created at: {data.created_at.toString()}</label>
					<label>Last Updated: {data.last_updated.toString()}</label>
				</div>

				<div className="flex gap-1 justify-center">
					<MainButton />
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

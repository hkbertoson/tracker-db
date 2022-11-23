import MainButton from '@/components/Buttons/MainButton';
import prisma from '@/utils/prisma';
import {requestValues, statusValues, RequestPageProps} from '@/utils/types';
import Link from 'next/link';
import Router from 'next/router';
import {useState} from 'react';

export default function RequestPage(data: RequestPageProps) {
	const initialRequestState = {
		name: data.name,
		project_id: data.project_id,
		account_name: data.account_name,
		status: data.status,
		request_type: data.request_type,
		total_hours_spent: data.total_hours_spent,
		legacy_org: data.legacy_org,
		wbs: data.wbs,
		comment: data.comment,
	};
	const requestID = data.id;

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
			const data = {...requestDataState};
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
				<Link href="/">Update Request: {data.project_id}</Link>
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
						name="project_id"
						placeholder="Project ID"
						value={requestDataState.project_id}
						onChange={handleChange}
					/>
					<input
						className="input input-bordered w-full"
						type="text"
						name="account_name"
						placeholder="Account Name"
						value={requestDataState.account_name}
						onChange={handleChange}
					/>
					<input
						className="input input-bordered w-full"
						type="text"
						placeholder="Billing Code"
						name="wbs"
						value={requestDataState.wbs || ''}
						onChange={handleChange}
					/>
					<input
						className="input input-bordered w-full"
						type="number"
						name="total_hours_spent"
						placeholder="Total Hours Worked"
						value={requestDataState.total_hours_spent}
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
							name="request_type"
							value={requestDataState.request_type}>
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
							name="legacy_org"
							value={requestDataState.legacy_org}>
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
						name="comment"
						onChange={handleChange}
						value={requestDataState.comment}
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

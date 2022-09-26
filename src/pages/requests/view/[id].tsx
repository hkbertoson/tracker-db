import prisma from '../../../../lib/prisma';
import {RequestPageProps} from '../../../../utils/types';
import Link from 'next/link';

export default function RequestPage(data: RequestPageProps) {
	console.log(data);
	return (
		<>
			<h1 className="text-3xl text-center">
				<Link href="/">{data.project_id}</Link>
			</h1>
			<div className="text-center flex flex-col w-1/2 m-auto gap-1">
				<input
					className="input input-bordered w-full"
					value={'Name : ' + data.name}
					disabled={true}
				/>
				<input
					className="input input-bordered w-full"
					value={'Project ID: ' + data.project_id}
					disabled={true}
				/>
				<input
					className="input input-bordered w-full"
					value={'Account Name: ' + data.account_name}
					disabled={true}
				/>
				<input
					className="input input-bordered w-full"
					value={data.billing_code || 'No Billing Code'}
					disabled={true}
				/>
				<input
					className="input input-bordered w-full"
					value={'Total Hours Spent: ' + data.total_hours_spent}
					disabled={true}
				/>
				<input
					className="input input-bordered w-full"
					value={'Request Type: ' + data.request_type}
					disabled={true}
				/>
				<input
					className="input input-bordered w-full"
					value={'Status: ' + data.status}
					disabled={true}
				/>
				<input
					className="input input-bordered w-full"
					value={'Legacy Org: ' + data.legacy_org}
					disabled={true}
				/>
				<textarea
					className="textarea textarea-bordered"
					value={data.comment || 'No Comments'}
					placeholder="Comments"
					disabled={true}
				/>
			</div>
			<div className="flex gap-1 justify-center">
				<Link href={`/requests/update/${data.id}`}>
					<button
						className="btn btn-primary rounded-full text-lg pl-5"
						type="submit">
						Update
					</button>
				</Link>
				<Link href="/">
					<a className="btn btn-secondary rounded-full text-lg pl-5">Home</a>
				</Link>
				<Link href="/requests">
					<a className="btn btn-warning rounded-full text-lg pl-5">Back</a>
				</Link>
			</div>
		</>
	);
}
export async function getServerSideProps({params}: any) {
	const data = await prisma.requests.findUnique({
		where: {id: parseInt(params.id)},
	});
	return {props: data};
}

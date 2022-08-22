import Link from 'next/link';
import {useState, useEffect} from 'react';
import {GetStaticProps} from 'next';
import prisma from '../../lib/prisma';
import superjson from 'superjson';

export const getStaticProps: GetStaticProps = async () => {
	const data = await prisma.requests.findMany({});
	return {
		props: {
			data,
		},
	};
};

export default function RequestPage({data}) {
	const {data: defaultData = []} = data;
	console.log(data);
	const [requests, setRequest] = useState([]);

	let statusClass: string;
	let wipClass;
	const doneClass = 'bg-green-400';
	const awaitClass = 'bg-amber-300';

	// useEffect(() => {
	// 	const fetchRequests = async () => {
	// 		const res = await fetch('/api/requests');
	// 		const data = await res.json();
	// 		console.log(data);
	// 		setRequest(data);
	// 	};
	// 	fetchRequests();
	// }, [setRequest]);

	return (
		<>
			<div className="container mx-auto px-4 sm:px-8 max-w-3xl">
				<div className="py-8">
					<h2 className="text-2xl leading-tight">Requests</h2>
					<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
						<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
							<table className="min-w-full leading-normal">
								<thead>
									<tr>
										<th
											scope="col"
											className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
											Project ID
										</th>
										<th
											scope="col"
											className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
											Name
										</th>
										<th
											scope="col"
											className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
											Account Name
										</th>
										<th
											scope="col"
											className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
											Status
										</th>
										<th
											scope="col"
											className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"></th>
									</tr>
								</thead>
							</table>
						</div>
					</div>
				</div>
			</div>
			;
		</>
	);
}

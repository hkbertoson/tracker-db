import {useState, useEffect} from 'react';
import Link from 'next/link';

export default function RequestPage() {
	const [requests, setRequest] = useState([]);

	let statusClass: string;
	let wipClass;
	const doneClass = 'bg-green-400';
	const awaitClass = 'bg-amber-300';

	useEffect(() => {
		const fetchRequests = async () => {
			const res = await fetch('/api/requests');
			const data = await res.json();
			console.log(data);
			setRequest(data);
		};
		fetchRequests();
	}, [setRequest]);

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
								{requests.map((request) => {
									// if (request.status === 'completed') {
									// 	statusClass =
									// 		'absolute inset-0 opacity-50 rounded-full bg-amber-500';
									// } else if (request.status === 'work_in_progress') {
									// 	statusClass =
									// 		'absolute inset-0 opacity-50 rounded-full bg-blue-500';
									// }
									return (
										<tbody key={request['id']}>
											<tr>
												<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
													<p className="text-gray-900 whitespace-no-wrap">
														{request['project_id']}
													</p>
												</td>
												<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
													<p className="text-gray-900 whitespace-no-wrap">
														{request['name']}
													</p>
												</td>
												<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
													<p className="text-gray-900 whitespace-no-wrap">
														{request['account_name']}
													</p>
												</td>
												<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
													<span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
														<span
															aria-hidden="true"
															className={statusClass}></span>
														<span className="relative">
															{request['status'].replace(/_/g, ' ')}
														</span>
													</span>
												</td>
												<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
													<Link href="#">
														<a className="text-indigo-600 hover:text-indigo-900">
															Edit
														</a>
													</Link>
												</td>
											</tr>
										</tbody>
									);
								})}
							</table>
						</div>
					</div>
				</div>
			</div>
			;
		</>
	);
}

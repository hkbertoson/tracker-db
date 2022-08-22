{
	props.map((prop) => {
		// if (request.status === 'completed') {
		// 	statusClass =
		// 		'absolute inset-0 opacity-50 rounded-full bg-amber-500';
		// } else if (request.status === 'work_in_progress') {
		// 	statusClass =
		// 		'absolute inset-0 opacity-50 rounded-full bg-blue-500';
		// }
		return (
			<tbody key={prop['id']}>
				<tr>
					<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
						<p className="text-gray-900 whitespace-no-wrap">
							{prop['project_id']}
						</p>
					</td>
					<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
						<p className="text-gray-900 whitespace-no-wrap">{prop['name']}</p>
					</td>
					<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
						<p className="text-gray-900 whitespace-no-wrap">
							{prop['account_name']}
						</p>
					</td>
					<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
						<span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
							<span aria-hidden="true" className={statusClass}></span>
							{/* <span className="relative">
                            {request['status'].replace(/_/g, ' ')}
                        </span> */}
						</span>
					</td>
					<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
						<Link href="#">
							<a className="text-indigo-600 hover:text-indigo-900">Edit</a>
						</Link>
					</td>
				</tr>
			</tbody>
		);
	});
}
q
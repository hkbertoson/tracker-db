import Link from 'next/link';

function Home() {
	return (
		<>
			<h1 className="text-6xl flex justify-center">Request Tracking Page</h1>
			<div className="flex w-full mt-5">
				<div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
					<Link href="/requests">
						<button type="button" className="btn btn-primary">
							View Requests
						</button>
					</Link>
				</div>
				<div className="divider horizontal gap-8"></div>
				<div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
					<Link href="/requests/add">
						<button type="button" className="btn btn-primary">
							Add New Request
						</button>
					</Link>
				</div>
			</div>
		</>
	);
}

export default Home;

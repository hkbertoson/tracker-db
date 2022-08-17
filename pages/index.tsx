import Link from 'next/link';

function Home() {
	return (
		<>
			<h1 className="text-6xl flex justify-center">Request Tracking Page</h1>

			<div className="sm:flex flex-wrap justify-center items-center text-center gap-8">
				<div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
					<h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
						<Link href="/requests">
							<button
								type="button"
								className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-auto transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
								View Requests
							</button>
						</Link>
					</h3>
					<p className="text-md  text-gray-500 dark:text-gray-300 py-4">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
						sunt cupiditate. Sit qui repellat illum! Natus praesentium placeat,
						cumque quidem voluptates iste sint delectus impedit soluta,
						doloribus numquam reiciendis reprehenderit.
					</p>
				</div>
				<div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg dark:bg-gray-800">
					<h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
						<Link href="/requests">
							<button
								type="button"
								className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-auto transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
								disabled>
								Update Request
							</button>
						</Link>
					</h3>
					<p className="text-md text-gray-500 dark:text-gray-300 py-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
						animi sint nam aliquid suscipit ea. Aut facilis a expedita unde
						quasi quaerat? Voluptatum necessitatibus doloribus neque, excepturi
						nam hic consectetur!
					</p>
				</div>
				<div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
					<h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
						<Link href="/add-request">
							<button
								type="button"
								className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-auto transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
								Add New Request
							</button>
						</Link>
					</h3>
					<p className="text-md  text-gray-500 dark:text-gray-300 py-4">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
						officiis numquam, earum quos voluptate, provident quasi magni
						reiciendis molestiae alias praesentium ducimus veritatis tempore
						saepe itaque placeat delectus inventore nesciunt.
					</p>
				</div>
			</div>
		</>
	);
}

export default Home;

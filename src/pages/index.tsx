import {Button} from '@/components/MainPage';

function Home() {
	return (
		<>
			<h1 className="flex justify-center text-6xl">Request Tracking Page</h1>
			<div className="mt-10 grid grid-cols-4">
				<Button title="View Requests" url="/requests" />
				<Button title="Add New Request" url="/requests/add" />
				<Button title="Add New User" url="/users/add" />
				<Button title="View All Users" url="/users" />
			</div>
		</>
	);
}

export default Home;

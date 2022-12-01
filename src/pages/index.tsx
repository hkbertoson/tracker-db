import {Button} from '@/components/MainPage';

function Home() {
	return (
		<div className="w-auto text-center">
			<h1 className="text-6xl">Request Tracking Page</h1>
			<div className="flex flex-row justify-between mt-5">
				<Button title="View Requests" url="/requests" />
				<Button title="Add New Request" url="/requests/add" />
				<Button title="Add New User" url="/users/add" />
				<Button title="View All Users" url="/users" />
				<Button title="Dashboard(Alpha)" url="/dashboard" />
			</div>
		</div>
	);
}

export default Home;

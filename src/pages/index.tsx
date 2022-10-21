import {Button} from 'components/MainPage';

function Home() {
	return (
		<>
			<h1 className="flex justify-center text-6xl">Request Tracking Page</h1>
			<div className="mt-10 grid grid-cols-4">
				<Button title="View Requests" requestLink="/requests" />
				<Button title="Add New Request" requestLink="/requests/add" />
				<Button title="Add New User" requestLink="/users/add" />
				<Button title="View All Users" requestLink="/users" />
			</div>
		</>
	);
}

export default Home;

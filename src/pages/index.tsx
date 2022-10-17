import {MainButton} from '@components/Buttons';

function Home() {
	return (
		<>
			<h1 className="text-6xl flex justify-center">Request Tracking Page</h1>
			<div className="grid grid-cols-4 mt-10 container bg-red-500">
				<MainButton title="View Requests" requestLink="/requests" />
				<MainButton title="Add New Request" requestLink="/requests/add" />
				<MainButton title="Add New User" requestLink="/users/add" />
				<MainButton title="View All Users" requestLink="/users" />
				<iframe
					src="https://gfycat.com/ifr/BlankCooperativeDaddylonglegs"
					width="640"
					height="412"></iframe>
				<p>
					{' '}
					<a href="https://gfycat.com/blankcooperativedaddylonglegs">
						via Gfycat
					</a>
				</p>
			</div>
		</>
	);
}

export default Home;

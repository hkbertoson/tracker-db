import {useState} from 'react';
import Router from 'next/router';
import Link from 'next/link';
import MainButton from '@/components/Buttons/MainButton';

const AddRequest = () => {
	const initialUserState = {
		name: '',
		email: '',
		eid: '',
		legacy_org: '0',
		cost_center: '',
		profit_center: '',
		phone_number: '',
	};
	const [userDataState, setUserDataState] = useState(initialUserState);

	function handleChange(e: any) {
		e.preventDefault();
		setUserDataState({...userDataState, [e.target.name]: e.target.value});
	}

	const submitData = async (e: any) => {
		e.preventDefault();
		try {
			const data = {...userDataState};
			await fetch('/api/users/add', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify(data),
			});
			await Router.push('/requests');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<h1 className="text-3xl text-center">
				<Link href="/">New User</Link>
			</h1>
			<form onSubmit={submitData}>
				<div className="text-center flex flex-col w-1/2 m-auto gap-1">
					<input
						className="input input-bordered w-full"
						type="text"
						placeholder="Name"
						name="name"
						value={userDataState.name}
						onChange={handleChange}
					/>
					<input
						className="input input-bordered w-full"
						type="text"
						name="email"
						placeholder="Email"
						value={userDataState.email}
						onChange={handleChange}
					/>
					<input
						className="input input-bordered w-full"
						type="text"
						name="eid"
						placeholder="EID"
						value={userDataState.eid}
						onChange={handleChange}
					/>
					<input
						className="input input-bordered w-full"
						type="text"
						name="cost_center"
						placeholder="Cost Center"
						value={userDataState.cost_center}
						onChange={handleChange}
					/>
					<input
						className="input input-bordered w-full"
						type="text"
						name="profit_center"
						placeholder="Profit Center"
						value={userDataState.profit_center}
						onChange={handleChange}
					/>
					<input
						className="input input-bordered w-full"
						type="text"
						name="phone_number"
						placeholder="Phone Number"
						value={userDataState.phone_number}
						onChange={handleChange}
					/>
					<div className="flex flex-row gap-1">
						<select
							onChange={handleChange}
							className="flex-grow w-auto"
							name="legacy_org"
							value={userDataState.legacy_org}>
							<option value="0" disabled>
								Select Legacy Org
							</option>
							<option value="CSC">CSC</option>
							<option value="ES">ES</option>
						</select>
					</div>
				</div>

				<div className="flex gap-1 justify-center">
					<MainButton />
				</div>
			</form>
		</>
	);
};
export default AddRequest;

import {Requests} from '../types';
import {useState} from 'react';

type Props = {
	name: Requests;
	project_id: Requests;
};

const AddRequest = () => {
	const [formData, setFormData] = useState<Requests>();
	return (
		<form>
			<label>
				{' '}
				Enter name:
				<input type="text" />
			</label>
		</form>
	);
};
export default AddRequest;

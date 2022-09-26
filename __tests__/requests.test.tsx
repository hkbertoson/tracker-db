import {render, screen} from '@testing-library/react';
import RequestPage from '../src/pages/requests/index';

describe('Requests', () => {
	it('renders a heading', () => {
		render(<RequestPage />);

		const heading = screen.getByRole('heading', {
			name: /Requests/i,
		});

		expect(heading).toBeInTheDocument();
	});
});

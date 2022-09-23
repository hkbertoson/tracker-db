import {render, screen} from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
	it('renders a heading', () => {
		render(<Home />);

		const heading = screen.getByRole('heading', {
			name: /Request Tracking Page/i,
		});

		expect(heading).toBeInTheDocument();
	});
	it('creates a view request button', () => {
		render(<Home />);

		const button = screen.getByRole('button', {
			name: /View Requests/i,
		});

		expect(button).toBeInTheDocument();
	});
	it('creates a add request button', () => {
		render(<Home />);

		const button = screen.getByRole('button', {
			name: /Add New Request/i,
		});

		expect(button).toBeInTheDocument();
	});
	it('creates an add new user button', () => {
		render(<Home />);

		const button = screen.getByRole('button', {
			name: /Add new User/i,
		});

		expect(button).toBeInTheDocument();
	});
	it('creates a view all users button', () => {
		render(<Home />);

		const button = screen.getByRole('button', {
			name: /View All Users/i,
		});

		expect(button).toBeInTheDocument();
	});
});

import { render, screen } from '@testing-library/react';
import DataTable from '../components/DataTable/DataTable';

test('renders table headers', () => {
  render(<DataTable data={[]} />);
  expect(screen.getByText('Loan No')).toBeInTheDocument();
});

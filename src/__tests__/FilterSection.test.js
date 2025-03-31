test('search input updates correctly', async () => {
    const mockFilter = jest.fn();
    render(<FilterSection onFilterChange={mockFilter} />);
    const input = screen.getByLabelText('Search loan number');
    fireEvent.change(input, { target: { value: 'test' } });
    await waitFor(() => expect(mockFilter).toHaveBeenCalled());
  });
  
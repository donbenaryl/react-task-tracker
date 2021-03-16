import { render, screen, fireEvent } from '@testing-library/react';
import Tasks from './Tasks';

test('Add button should exist', () => {
  const { getByRole, getByText } = render(<Tasks />);
  const btn = getByRole('button');
  const addBtn = getByText('Add');

  expect(btn).toBeTruthy();
  expect(addBtn).toBeTruthy();
});

test('Close button should exist when Add button was clicked', () => {
    const { getByRole, getByText } = render(<Tasks />);
    const btn = getByRole('button');
    fireEvent.click(btn);
    
    expect(getByText("Close")).toBeTruthy();
})

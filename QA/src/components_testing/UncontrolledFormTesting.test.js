
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UncontrolledFormTesting from './UncontrolledFormTesting';
test('renders correctly', () => {
    const { container } = render(<UUncontrolledFormTesting />);
    expect(container).toMatchSnapshot();
  });
  
  test('form submission', () => {
  
    const { getByPlaceholderText, getByText } = render(<UncontrolledFormTesting/>);
  
    fireEvent.change(getByPlaceholderText('username'), { target: { value: 'testuser' } });
    fireEvent.change(getByPlaceholderText('password'), { target: { value: 'testpassword' } });
  
    fireEvent.click(getByText('Submit'));
  
    expect(consoleSpy).toHaveBeenCalledWith('Form Submitted', { username: 'testuser', password: 'testpassword' });
  
  });
  
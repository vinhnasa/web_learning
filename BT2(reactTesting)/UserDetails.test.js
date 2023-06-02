import React from 'react';
import { render } from '@testing-library/react';
import UserDetails from './UserDetails';

describe('UserDetails component', () => {
  const info = {
    userName: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
  };

  it('renders user details', () => {
    const { getByText } = render(<UserDetails info={info} />);
    expect(getByText('Username: John Doe')).toBeInTheDocument();
    expect(getByText('Email: johndoe@example.com')).toBeInTheDocument();
    expect(getByText('Phone: 123-456-7890')).toBeInTheDocument();
  });

  it('displays correct user details', () => {
    const { getByText } = render(<UserDetails info={info} />);
    expect(getByText('Username: Jane Doe')).not.toBeInTheDocument();
    expect(getByText('Email: janedoe@example.com')).not.toBeInTheDocument();
    expect(getByText('Phone: 987-654-3210')).not.toBeInTheDocument();
  });

  it('displays correct user name', () => {
    const { getByText } = render(<UserDetails info={info} />);
    expect(getByText('Username: John Doe')).toBeInTheDocument();
  });

  it('displays correct email', () => {
    const { getByText } = render(<UserDetails info={info} />);
    expect(getByText('Email: johndoe@example.com')).toBeInTheDocument();
  });

  it('displays correct phone number', () => {
    const { getByText } = render(<UserDetails info={info} />);
    expect(getByText('Phone: 123-456-7890')).toBeInTheDocument();
  });
});

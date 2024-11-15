import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import OctButton from '../components/ui/Button/Button';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

describe('OctButton', () => {
  it('renders correctly', () => {
    render(<OctButton type="button">Button</OctButton>);
    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  it('has the correct attr', () => {
    render(<OctButton type="submit">Submit</OctButton>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('renders the button with an icon and children', () => {
    render(
      <OctButton type="button" icon={faCoffee}>
        Click Me
      </OctButton>,
    );
    const button = screen.getByRole('button', {name: /click me/i});
    const icon = screen.getByTestId('icon');
    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', async () => {
    const user = userEvent.setup();
    const onClickMock = jest.fn();
    render(
      <OctButton type="button" onClick={onClickMock}>
        Click Me
      </OctButton>,
    );
    const button = screen.getByRole('button', {name: /click me/i});
    await user.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('applies additional props to the button', () => {
    render(
      <OctButton type="button" data-testid="oct-button" aria-label="custom-label">
        Button
      </OctButton>,
    );
    const button = screen.getByTestId('oct-button');
    expect(button).toHaveAttribute('aria-label', 'custom-label');
  });
});

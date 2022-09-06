import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Modal from './modal';

describe('<Modal />', () => {
  it('should render without crashing', () => {
    const portalRoot = document.createElement('div');
    portalRoot.setAttribute('id', 'portal');
    document.body.appendChild(portalRoot);
    render(<Modal isOpen={true} />, portalRoot);
  });

  it('should close modal when clicked', async () => {
    const mockCallback = jest.fn();
    const portalRoot = document.createElement('div');
    portalRoot.setAttribute('id', 'portal');
    document.body.appendChild(portalRoot);
    const { getByTestId } = render(
      <Modal isOpen={true} handleClose={mockCallback} />,
      portalRoot
    );
    const closeModalButton = getByTestId('close');
    fireEvent.click(closeModalButton);
    expect(mockCallback).toBeCalled();
  });
});

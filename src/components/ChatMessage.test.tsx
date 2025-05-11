import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import ChatMessage from './ChatMessage';

describe('ChatMessage', () => {
  it('renders user message correctly', () => {
    const message = 'Hello, this is a user message';
    render(<ChatMessage message={message} isUser={true} />);
    
    expect(screen.getByText(message)).toBeInTheDocument();
    expect(screen.getByText(message).parentElement).toHaveClass('bg-white/90');
  });

  it('renders non-user message correctly', () => {
    const message = 'Hello, this is a bot message';
    render(<ChatMessage message={message} isUser={false} />);
    
    expect(screen.getByText(message)).toBeInTheDocument();
    expect(screen.getByAltText('MySana')).toBeInTheDocument();
  });

  it('displays timestamp when provided', () => {
    const message = 'Message with timestamp';
    const timestamp = '10:30 AM';
    render(<ChatMessage message={message} isUser={true} timestamp={timestamp} />);
    
    expect(screen.getByText(timestamp)).toBeInTheDocument();
  });

  it('does not display timestamp when not provided', () => {
    const message = 'Message without timestamp';
    render(<ChatMessage message={message} isUser={true} />);
    
    const timestampElement = screen.queryByText(/AM|PM/);
    expect(timestampElement).not.toBeInTheDocument();
  });
}); 
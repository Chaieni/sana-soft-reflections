import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Index from '../Index';

// Mock the useNavigate hook from react-router-dom
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => vi.fn()
  };
});

describe('Index Landing Page', () => {
  const renderComponent = () => {
    return render(
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    );
  };

  it('renders without crashing', () => {
    renderComponent();
    // If the component renders without throwing an error, the test passes
  });

  it('displays the main heading', () => {
    renderComponent();
    const headingElement = screen.getByText('A Gentle Connection to Your Inner World');
    expect(headingElement).toBeInTheDocument();
  });

  it('displays the Sana logo/image', () => {
    renderComponent();
    const logoImage = screen.getByAltText('Sana');
    expect(logoImage).toBeInTheDocument();
  });

  it('displays navigation bar component', () => {
    renderComponent();
    // Check for navigation bar elements
    const navBar = document.querySelector('nav');
    expect(navBar).toBeInTheDocument();
  });

  it('displays the feature section heading', () => {
    renderComponent();
    const featureSectionHeading = screen.getByText('How Sana Helps You');
    expect(featureSectionHeading).toBeInTheDocument();
  });

  it('displays all three feature cards', () => {
    renderComponent();
    const emotionalWellnessCard = screen.getByText('Emotional Wellness');
    const mindfulReflectionCard = screen.getByText('Mindful Reflection');
    const personalizedGrowthCard = screen.getByText('Personalized Growth');
    
    expect(emotionalWellnessCard).toBeInTheDocument();
    expect(mindfulReflectionCard).toBeInTheDocument();
    expect(personalizedGrowthCard).toBeInTheDocument();
  });

  it('displays call-to-action section', () => {
    renderComponent();
    const ctaHeading = screen.getByText('Begin Your Reflection Journey Today');
    const ctaButton = screen.getByText('Start Free');
    
    expect(ctaHeading).toBeInTheDocument();
    expect(ctaButton).toBeInTheDocument();
  });

  it('has working navigation buttons', async () => {
    renderComponent();
    const user = userEvent.setup();
    
    // Check if buttons are rendered
    const startJourneyButton = screen.getByText('Start My Journey');
    const learnMoreButton = screen.getByText('Learn More');
    const signInButton = screen.getByText('Sign In');
    
    expect(startJourneyButton).toBeInTheDocument();
    expect(learnMoreButton).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
    
    // Test button clicks (since we've mocked useNavigate, we're just ensuring they don't throw errors)
    await user.click(startJourneyButton);
    await user.click(learnMoreButton);
    await user.click(signInButton);
  });
});


import '@testing-library/jest-dom';

// This adds jest-dom custom assertions
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// Runs a cleanup after each test case to prevent test pollution
afterEach(() => {
  cleanup();
});


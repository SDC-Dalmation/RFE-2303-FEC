/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import App from '../../App';
import QuestionList from './QuestionList';
import Question from './Question';
import QA from './QA';

test('renders the landing page', () => {
  render(<App />);
});


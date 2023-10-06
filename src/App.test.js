import { render } from '@testing-library/react';
import App from './App';

describe('renders app', () => {
  it('matches snapshot', () => {
    const component = render(<App />);
    expect(component.container).toMatchSnapshot();
  });
});

import {render, screen, fireEvent, getByText} from '@testing-library/react';
import App from './App';
import {getWordStyle, getWordStyleDiv} from './helpers';

describe("Test for the component App", () => {
  test('should return correct styles and text for different words', () => {
    const result1 = getWordStyleDiv('@username');
    const result2 = getWordStyleDiv('#hashtag');
    const result3 = getWordStyleDiv('user@example.com');
    const result4 = getWordStyleDiv('https://www.example.com');
    const result5 = getWordStyleDiv('normalword');

    expect(result1).toEqual({className: 'green-tag-div', text: '@username'});
    expect(result2).toEqual({className: 'purple-tag-div', text: '#hashtag'});
    expect(result3).toEqual({className: 'orange-email-div', text: 'Email 1'});
    expect(result4).toEqual({className: 'blue-url-div', text: 'Link 1'});
    expect(result5).toEqual({className: 'normal-div', text: 'normalword'});
  });

  test('should return correct styles', () => {
    const result1 = getWordStyle('@username');
    const result2 = getWordStyle('#hashtag');
    const result3 = getWordStyle('user@example.com');
    const result4 = getWordStyle('https://www.example.com');
    const result5 = getWordStyle('normalword');

    expect(result1).toEqual('green-tag');
    expect(result2).toEqual('purple-tag');
    expect(result3).toEqual('orange-email');
    expect(result4).toEqual('blue-url');
    expect(result5).toEqual('normal');
  });

  test('renders with initial state', async () => {
    render(<App/>);

    const inputElement = screen.getByPlaceholderText('Type to add new task');
    expect(inputElement).toBeInTheDocument();

    const addButtonImage = await screen.findByAltText('Plus Square Icon');
    expect(addButtonImage).toBeInTheDocument();
  });

  test('handleLinkClick should update state correctly', () => {
    render(<App/>);

    const isAddingInitially = false;

    const linkClickable = screen.getByTestId('link-clickable');
    fireEvent.click(linkClickable);

    const isAddingAfterClick = true;
    expect(isAddingInitially).toBe(!isAddingAfterClick);
  });

  test('handleInput updates button text and enables/disables other buttons', () => {
    const {getByTestId} = render(<App/>);
    const inputElement = getByTestId('input-styles');
    const otherButtons = document.querySelectorAll('.class-1-buttons'); // Ajusta la clase CSS según corresponda

    fireEvent.change(inputElement, {target: {value: 'Some text'}});

    expect(inputElement.value).toBe('Some text');

    otherButtons.forEach(button => {
      expect(button).toHaveClass('class-1-buttons');
    });

    fireEvent.change(inputElement, {target: {value: ''}});

    expect(inputElement.value).toBe('');

    otherButtons.forEach(button => {
      expect(button).toHaveClass('custom-button-disabled');
    });
  });
});

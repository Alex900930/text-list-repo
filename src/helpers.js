export const getWordStyleDiv = (word) => {
  if (word.startsWith('@')) {
    return {className: 'green-tag-div', text: word};
  } else if (word.startsWith('#')) {
    return {className: 'purple-tag-div', text: word};
  } else if (isValidEmail(word)) {
    return {className: 'orange-email-div', text: 'Email 1'};
  } else if (isValidUrl(word)) {
    return {className: 'blue-url-div', text: 'Link 1'};
  } else {
    return {className: 'normal-div', text: word};
  }
};

export const isValidEmail = (text) => {
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
  return emailRegex.test(text);
};

export const isValidUrl = (text) => {
  const urlRegex = /^(http[s]?:\/\/)?[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?$/;
  return urlRegex.test(text);
};

export const getWordStyle = (word) => {
  if (word.startsWith('@')) {
    return 'green-tag';
  } else if (word.startsWith('#')) {
    return 'purple-tag';
  } else if (isValidEmail(word)) {
    return 'orange-email';
  } else if (isValidUrl(word)) {
    return 'blue-url';
  } else {
    return 'normal';
  }
};
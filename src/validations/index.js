const _required = value => !!value || 'The field is required.';
const _maxLength20 = value => value === null || value === '' || (value.length > 0 && value && value.length <= 20 || 'The max length is 20 characters.');
const _maxLength50 = value => value === null || value === '' || (value.length > 0 && value && value.length <= 50 || 'The max length is 50 characters.');
const _maxLength100 = value => value === null || value === '' || (value.length > 0 && value.length <= 100 || 'The max length is 100 characters.');
const _maxLength250 = value => value === null || value === '' || (value.length > 0 && value.length <= 250 || 'The max length is 250 characters.');

export {
  _required,
  _maxLength20,
  _maxLength50,
  _maxLength100,
  _maxLength250,
}

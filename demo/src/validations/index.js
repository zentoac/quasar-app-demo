const _required = value => !!value || 'The field is required.';
const _maxLength20 = value => value.length <= 20 || 'The max length is 20 characters.' ;
const _maxLength50 = value => value.length <= 50 || 'The max length is 50 characters.' ;
const _maxLength100 = value => value.length <= 100 || 'The max length is 100 characters.' ;

export {
  _required,
  _maxLength20,
  _maxLength50,
  _maxLength100
}

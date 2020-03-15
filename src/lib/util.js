import { clone, setWith, curry } from 'lodash/fp';

const setIn = curry((obj, path, value) =>
  setWith(clone(obj), path, value, clone(obj)),
);

export default {
  setIn,
};

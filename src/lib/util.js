import { clone, setWith, curry } from 'lodash/fp';

const setIn = curry((obj, path, value) =>
  setWith(clone(obj), path, value, clone(obj)),
);

const getAnimatedId = (prefix, id) => `${prefix}-${id}`;

export default {
  setIn,
  getAnimatedId,
};

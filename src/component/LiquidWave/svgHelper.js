import { clone, each } from 'lodash';
import Animated from 'react-native-reanimated';
import { string } from 'react-native-redash';
const { concat } = Animated;

const moveTo = (path = '', { x, y }) => {
  return concat(path, string`M${x} ${y} `);
};

const lineTo = (path = '', { x, y }) => {
  return concat(path, string`L${x} ${y} `);
};

const curveTo = (path = '', { x, y, x1, y1, x2, y2 }) => {
  return concat(path, string`C${x1} ${y1} ${x2} ${y2} ${x} ${y} `);
};

const closePath = (path = '') => {
  return concat(path, string`Z `);
};

const composeSvgHelper = (path, ...transform) => {
  let newPath = clone(path);
  each(transform, func => {
    newPath = func[0](newPath, func[1]);
  });
  return newPath;
};

export { moveTo, lineTo, curveTo, closePath, composeSvgHelper };

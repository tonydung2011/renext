import { AliasLib } from '@lib/index';

const array = new Array(100);

const data = AliasLib.lodash.map(array, (item, index) => ({
  name: `Item ${index}`,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  datetime: AliasLib.moment(),
  id: AliasLib.uuid.v1(),
}));

export default data;

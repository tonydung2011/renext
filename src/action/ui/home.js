export const defaultAction = () => ({
  type: 'home/defaultaction',
});

export const nullAction = () => ({
  type: 'home/nullaction',
});

export const increase = () => ({
  type: 'INCREASE_1',
  meta: {
    offline: {
      effect: 'online now',
      commit: defaultAction(),
      rollback: nullAction(),
    },
  },
});

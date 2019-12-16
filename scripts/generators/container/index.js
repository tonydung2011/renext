/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a container component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Form',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    var componentTemplate = './container/class.js.hbs'; // eslint-disable-line no-var

    const actions = [
      {
        type: 'add',
        path: '../../src/container/{{properCase name}}.js',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/action/ui/{{properCase name}}.js',
        templateFile: './container/actions.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/reducer/ui/{{properCase name}}.js',
        templateFile: './container/reducer.js.hbs',
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'prettify',
      path: '/container/',
    });
    actions.push({
      type: 'prettify',
      path: '/action/',
    });
    actions.push({
      type: 'prettify',
      path: '/reducer/',
    });

    return actions;
  },
};

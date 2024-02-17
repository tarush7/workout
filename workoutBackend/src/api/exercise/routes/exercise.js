const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::exercise.exercise');

module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/exercise',
     handler: 'exercise.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};

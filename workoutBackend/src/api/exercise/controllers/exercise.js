'use strict';
const axios = require("axios");



/**
 * A set of functions called "actions" for `exercise`
 */

const { entityService } = require("@strapi/strapi").factories;

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      const { muscle, name, type, difficulty } = ctx.query;

      const options = {
        method: 'GET',
        url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
        params: {muscle, name, type, difficulty},
        headers: {
          'X-RapidAPI-Key': '3e6badf871msha9dec25d6b1b7abp159225jsn082d85593801',
          'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
        }
      };

      const response = await axios.request(options);

      const exercises = response.data;

      let entries = [];

      for (let exercise of exercises) {
        const exerciseData = {
          name: exercise['name'],
          type: exercise['type'],
          muscle: exercise['muscle'],
          difficulty: exercise['difficulty'],
          equipment: exercise['equipment'],
          instruction: exercise['instructions']
        };

    
      const entry = await strapi.entityService.create("api::exercise.exercise", { data: exerciseData});
        entries.push(entry);
      }

      ctx.body = entries;

    } catch (err) {
      ctx.body = err;
    }
  }
};

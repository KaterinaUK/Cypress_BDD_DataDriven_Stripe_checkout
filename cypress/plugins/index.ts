// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

/// <reference types="cypress" />
import * as browserify from '@cypress/browserify-preprocessor';
import * as cypressFailedLog from 'cypress-failed-log/src/failed';
import { preprocessor } from '@badeball/cypress-cucumber-preprocessor/browserify';

export default (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): void => {
  // Add cypress-cucumber-preprocessor for transforming .feature files
  on(
    'file:preprocessor',
    preprocessor(config, {
      ...browserify.defaultOptions,
      typescript: require.resolve('typescript'),
    })
  );

  on('task', {
    failed: cypressFailedLog(),
  });
  module.exports = (on, config) => {
    require('cypress-mochawesome-reporter/plugin')(on);
  };
};
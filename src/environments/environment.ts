// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// `.env.ts` is generated by the `npm run env` command
import env from './.env';

export const environment = {
  production: false,
  version: env.npm_package_version + '-dev',
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: [
    'en-US',
    'fr-FR'
  ],
  firebase:
  {
  	apiKey: "AIzaSyCS2XLk0XmxASPV2ik4y9K8fKaJFioYuSs",
    authDomain: "testing-34d56.firebaseapp.com",
    databaseURL: "https://testing-34d56.firebaseio.com",
    projectId: "testing-34d56",
    storageBucket: "testing-34d56.appspot.com",
    messagingSenderId: "941446501402"

  }
};

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import jsonData from '@root/tmp/globals.json';

export const environment = {
  production: false,
  cognitoURL : '',
  cognitoPort : '',
  cognitoHttpString : '',
  tokenKey:       'APP_OAUTH_TOKEN',

  //cognitoAPIEP : 'http://localhost:9000',
  //cognitoAPIEP : 'https://cognito-dhsjetsrecs-test.apps.aceinfosolutions.com',
  //cognitoAPIEP : 'http://34.232.4.16:9000',
  
  //cognitoAPIEP : jsonData['API_COGNITO'],
  //backendAPIEP : jsonData['API_MICROSERVICE'],

  cognitoAPIEP: 'https://cognito.aceinfosolutions.com',
  //cognitoAPIEP : 'https://bdso-cognito-bdso-test.apps.aceinfosolutions.com',
  //backendAPIEP : 'http://localhost:9001',
  //backendAPIEP : 'http://34.232.4.16:9001',
  //backendAPIEP : 'http://localhost:9000',
  backendAPIEP : 'https://celebrityms.aceinfosolutions.com',
  celebMSEP: ''
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

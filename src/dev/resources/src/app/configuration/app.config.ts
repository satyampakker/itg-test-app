import { environment } from '../../environments/environment';
export class AppConfig {
    cognitoURL: string;
    cognitoPort: string;
    cognitoHttpString: string;
    tokenKey: string;
    cognitoAPIEP: string;
    CelebMSEP: string;
}
export const APP_DI_CONFIG: AppConfig = {
    cognitoURL:  environment.cognitoURL,
    cognitoPort: environment.cognitoPort,
    cognitoHttpString:  environment.cognitoHttpString,
    tokenKey: environment.tokenKey,
    cognitoAPIEP: environment.cognitoAPIEP,
    CelebMSEP : environment.celebMSEP,
};
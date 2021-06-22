export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    userName: string,
    password: string,
    cognitoSession?: string,
    email: string,
    //userGroups : IUserGroup[]
}

export interface IUserGroup
{
    groupName: string,
    userPoolId: string,
    description: string,
    roleArn: string,
    precedence: number
}

export interface ILogin{
    username: string,
    password: string,
    temppassword: string,
    newpassword: string,
    confpassword: string,
}

export interface IForgot{
  sdkResponseMetadata: JSON;
  sdkHttpMetadata: JSON;
  codeDeliveryDetails: JSON;
}

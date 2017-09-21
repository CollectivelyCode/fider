export interface Tenant {
  id: number;
  name: string;
  domain: string;
  invitation: string;
  welcomeMessage: string;
}

export interface User {
  id: number;
  name: string;
  gravatar: string;
  role: number;
}

export interface CurrentUser {
  id: number;
  name: string;
  email: string;
  gravatar: string;
  role: number;
}

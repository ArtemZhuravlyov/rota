export interface AuthRegistration {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface AuthUser {
  displayName: string;
  email: string;
  expiresIn: number;
  jwtToken: string;
  registrationStage: string;
  roles: string[];
  userId: string;
}

export interface AuthSignIn {
  email: string;
  password: string;
}

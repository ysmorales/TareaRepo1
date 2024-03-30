export interface IForm1State {
  applicant: string;
  reason: string;
  docFile: object;
  date: Date;
  phone: string;
  mail: string;
  healthStatus: string;
  residence: string;
  region: string;
  comuna: string;
  address: string;
  number: number;
}

export interface IForm2State {
  name: string;
  run: string;
  region: string;
  community: string;
  address: string;
  addressNumber: string;
  email: string;
  pensionerRelation: string;
}

export interface ICombinedState extends IForm1State, IForm2State {}

export interface ITotalData {
  solicitor: {
    familyRelation: string;
    motivation: string;
    certificateUrl: string;
    run: string;
    firstName: string;
    fatherLastName: string;
    motherLastName: string;
    birthDate: string;
    healthStatus: string;
    residenceType: string;
    address: string;
    contactItems: string[];
  };

  proxy: {
    name: string;
    run: string;
    address: string;
    familyRelation: string;
    contactItems: string[];
  };

  warrant: {
    date: string;
    documentUrl: string;
  };
}

export interface IUserProfile {
  name: string;
  ruc: string;
  birthday: string;
  address: string;
  phoneNumber: string;
  email: string;
}

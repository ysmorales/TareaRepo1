export interface IVualidateApplicantState {
  applicant: { $error: Boolean; $errors: { $message: string | undefined }[] };
  reason: { $error: Boolean; $errors: { $message: string | undefined }[] };
  docFile: { $error: Boolean; $errors: { $message: string | undefined }[] };
  date: { $error: Boolean; $errors: { $message: string | undefined }[] };
  phone: { $error: Boolean; $errors: { $message: string | undefined }[] };
  mail: { $error: Boolean; $errors: { $message: string | undefined }[] };
  healthStatus: {
    $error: Boolean;
    $errors: { $message: string | undefined }[];
  };
  residence: { $error: Boolean; $errors: { $message: string | undefined }[] };
  region: { $error: Boolean; $errors: { $message: string | undefined }[] };
  comuna: { $error: Boolean; $errors: { $message: string | undefined }[] };
  address: { $error: Boolean; $errors: { $message: string | undefined }[] };
  number: { $error: Boolean; $errors: { $message: string | undefined }[] };
}

export interface IVualidateFormAttorneyState {
  name: { $error: Boolean; $errors: { $message: string | undefined }[] };
  run: { $error: Boolean; $errors: { $message: string | undefined }[] };
  region: { $error: Boolean; $errors: { $message: string | undefined }[] };
  community: { $error: Boolean; $errors: { $message: string | undefined }[] };
  address: { $error: Boolean; $errors: { $message: string | undefined }[] };
  addressNumber: {
    $error: Boolean;
    $errors: { $message: string | undefined }[];
  };
  email: {
    $error: Boolean;
    $errors: { $message: string | undefined }[];
  };
  pensionerRelation: {
    $error: Boolean;
    $errors: { $message: string | undefined }[];
  };
}

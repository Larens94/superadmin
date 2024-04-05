/* This file was automatically generated by the typescript:generate command. */
interface PatientWithNextAndLatestAppointment {
  uuid: string;
  firstName: string;
  lastName: string;
  email: string;
  birthdate: string;
  account: AccountModel;
  gender: string;
  insurances: PatientInsuranceModel[];
  contact: ContactModel[];
  addresses: AddressModel[];
  isParent: boolean;
  medicalEntityPatientBase: MedicalEntityPatientBaseModel[];
  nextAppointment: AppointmentModel;
  latestAppointment: AppointmentModel;
  patient: Patient;
  locale: string;
}
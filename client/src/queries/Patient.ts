import { gql } from "@apollo/client";

export const GET_PATIENTS = gql`
  query GetPatients {
    getPatients {
      _id
      complainDescription
      firstName
      lastName
      order
      status
    }
  }
`;
enum PatientStatus {
  'todo',
  'in_progress',
  'done'
}
export interface IPatient {
  _id: string;
  complainDescription: string;
  firstName: string;
  lastName: string;
  order: number;
  status: PatientStatus;
}
export type GetPatientsDataResponseType = {
  getPatients: IPatient[];
};

export const GET_PATIENT = gql`
  query GetPatient($getPatientId: ID!) {
    getPatient(id: $getPatientId) {
      _id
      complainDescription
      firstName
      lastName
      order
      status
    }
  }
`;
export type GetPatientDataResponseType = {
  getPatient: IPatient;
};

export const CREATE_PATIENT = gql`
  mutation CreatePatient($roomId: ID!, $patient: PatientInput!) {
    createPatient(roomId: $roomId, patient: $patient) {
      _id
      complainDescription
      firstName
      lastName
      order
      status
    }
  }
`;
export type CreatePatientDataResponseType = {
  getPatient: IPatient;
};

export const DELETE_PATIENT = gql`
  mutation DeletePatient($deletePatientId: ID!) {
    deletePatient(id: $deletePatientId) {
      _id
    }
  }
`;
export type DeletePatientDataResponseType = {
  deletePatient: Pick<IPatient, '_id'>;
};

export const UPDATE_PATIENT = gql`
  mutation UpdatePatient($updatePatientId: ID!, $patient: PatientInput) {
    updatePatient(id: $updatePatientId, patient: $patient) {
      _id
      complainDescription
      firstName
      lastName
      order
      status
    }
  }
`;
export type UpdatePatientDataResponseType = {
  updatePatient: IPatient;
};
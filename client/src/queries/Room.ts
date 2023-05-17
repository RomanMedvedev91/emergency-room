import { gql } from "@apollo/client";
import { type IPatient } from "./Patient";

export interface IRoom {
  _id: string;
  title: string;
  patients: IPatient[];
}

export const GET_ROOM = gql`
  query Room($roomId: ID!) {
    room(id: $roomId) {
      _id
      title
      patients {
        _id
        complainDescription
        firstName
        lastName
        order
        status
      }
    }
  }
`;
export type GetRoomDataResponseType = {
  room: IRoom;
};

export const GET_ROOMS = gql`
  query Rooms {
    rooms {
      _id
      title
      patients {
        _id
        complainDescription
        firstName
        lastName
        order
        status
      }
    }
  }
`;
export type GetRoomsDataResponseType = {
  rooms: IRoom[];
};

export const CREATE_ROOM = gql`
  mutation CreateRoom($title: String!) {
    createRoom(title: $title) {
      _id
      title
      patients {
        _id
        complainDescription
        firstName
        lastName
        order
        status
      }
    }
  }
`;
export type CreateRoomDataResponseType = {
  createRoom: IRoom;
};

export const DELETE_ROOM = gql`
  mutation DeleteRoom($deleteRoomId: ID!) {
    deleteRoom(id: $deleteRoomId) {
      _id
    }
  }
`;
export type DeleteRoomDataResponseType = {
  deleteRoom: Pick<IRoom, '_id'>;
};

export const UPDATE_ROOM = gql`
  mutation UpdateRoom($updateRoomId: ID!, $title: String!) {
    updateRoom(id: $updateRoomId, title: $title) {
      _id
      patients {
        _id
        complainDescription
        firstName
        lastName
        order
        status
      }
      title
    }
  }
`;
export type UpdateRoomDataResponseType = {
  updateRoom: IRoom;
};

import { gql } from "@apollo/client";

export const GET_ROOM = gql`
  query Room($roomId: ID!) {
    room(id: $roomId) {
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

export const GET_ROOMS = gql`
  query Rooms {
    rooms {
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

export const CREATE_ROOM = gql`
  mutation CreateRoom($title: String!) {
    createRoom(title: $title) {
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

export const DELETE_ROOM = gql`
  mutation DeleteRoom($deleteRoomId: ID!) {
    deleteRoom(id: $deleteRoomId)
  }
`;

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

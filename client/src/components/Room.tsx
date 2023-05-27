import * as React from 'react';
import { Droppable as Droppable1, DroppableProps } from 'react-beautiful-dnd';
import { Card, Stack, Title } from '@mantine/core';
import {type IRoom } from '../queries/Room';
import Patient from './Patient';

export interface IRoomProps {
  roomData: IRoom
}

export default function Room({ roomData }: IRoomProps) {
  console.log('data room: ', roomData);
  return (
    <Card
      withBorder
      shadow="xl"
      radius="md"
      p="md"
      sx={{
        minHeight: '100%',
      }}
    >
      <Title>
        {roomData.title}
      </Title>
      <Stack
        pt="md"
      >
        <>
          {roomData.patients && roomData.patients.map((patient) => (
            <Patient key={patient._id} patient={patient} />
          ))}
        </>
      </Stack>
    </Card>
  );
}

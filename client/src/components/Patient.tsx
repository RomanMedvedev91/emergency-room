import { IPatient } from '@/queries/Patient';
import { Card, Group, Title, Text } from '@mantine/core';
import React from 'react';

interface IPatientProps {
  patient: IPatient
}
export default function Patient({ patient }: IPatientProps) {
  return (
    <Card
      withBorder
    >
      <Group>
        <Title order={4}>{`${patient.firstName} ${patient.lastName}`}</Title>
        <Text color="dimmed">{patient.order}</Text>
      </Group>
      <Text>{patient.status}</Text>
      <Text>{patient.complainDescription}</Text>
    </Card>
  );
}

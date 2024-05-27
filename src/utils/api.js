import { useQuery } from '@tanstack/react-query';
import { BASE_URL } from '../constants';

export const getDisciplines = async () => {
  const url = new URL(`${BASE_URL}/api/Discipline`);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error while fetching data');
  }

  return response.json();
};

export const useDisciplinesQuery = () => useQuery(['disciplines'], () => getDisciplines(), { staleTime: 0 });

export const removeDiscipline = async (disciplineId) => {
  const url = new URL(`${BASE_URL}/api/Discipline/${disciplineId}`);

  const response = await fetch(url, { method: 'DELETE' });
  if (!response.ok) {
    throw new Error('Error while fetching data');
  }

  return response.json();
};

export const getDisciplineById = async (disciplineId) => {
  const url = new URL(`${BASE_URL}/api/Discipline/${disciplineId}`);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error while fetching data');
  }

  return response.json();
};

export const useDisciplineByIdQuery = (disciplineId) => useQuery(
  ['discipline', disciplineId],
  () => getDisciplineById(disciplineId),
  { staleTime: 0 },
);

export const createDiscipline = async (body) => {
  const url = new URL(`${BASE_URL}/api/Discipline`);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  return response.json();
};

export const getStudentGroupData = async (id) => {
  const url = new URL(`${BASE_URL}/api/StudentGroup/${id}`);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error while fetching data');
  }

  return response.json();
};

export const useStudentGroupDataQuery = (id) => useQuery(['student-group-data'], () => getStudentGroupData(id), { staleTime: 0 });

import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { PersonData } from "../types/common.types";

export const peopleApi = createApi({
  reducerPath: "peopleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://swapi.py4e.com/api/",
  }),
  endpoints: builder => ({
    getPeople: builder.query<
      { results: PersonData[]; count: number },
      { name: string; page: number }
    >({
      query: ({ name, page }) =>
        `people/?search=${name}&page=${page}`,
    }),
    getPerson: builder.query<
      { results: PersonData[] },
      string
    >({
      query: name => `people/?search=${name}`,
    }),
  }),
});

export const { useGetPeopleQuery, useGetPersonQuery } =
  peopleApi;

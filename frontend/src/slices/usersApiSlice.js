import { apiSlice } from "./apiSlice";

const USERS_URL = "http://localhost:5000/api/users";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    jobs: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "GET",
      }),
    }),
    addnewjobpost: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/newjobpost`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useJobsMutation,
  useAddnewjobpostMutation,
} = usersApiSlice;

import { IUsersData, IUsersDto } from "@cTypes/services";
import api from "@common/api/api";
import { ServicesEnum } from "@shared/enums";

const usersService = api.injectEndpoints({
  endpoints: build => ({
    getAllUsers: build.query<IUsersData[], void>({
      query: () => ({
        url: ServicesEnum.USERS
      }),
      providesTags: () => [ServicesEnum.USERS]
    }),
    createUsers: build.mutation<IUsersData, IUsersDto>({
      query: body => ({
        method: "POST",
        url: ServicesEnum.USERS,
        body
      }),
      invalidatesTags: () => [ServicesEnum.USERS]
    })
  })
});

export const { useGetAllUsersQuery, useCreateUsersMutation } = usersService;

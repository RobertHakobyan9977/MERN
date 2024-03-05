import { FC } from "react";
import { Box, CircularProgress } from "@mui/material";

import { useGetAllUsersQuery } from "@services/usersServices";
import UserCard from "@modules/UsersModule/components/UserCard";

const UserContainer: FC = () => {
  const { data, isLoading } = useGetAllUsersQuery();

  if (isLoading) return <CircularProgress />;

  if (!data || !data?.length) return null;

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {data.map(({ id, ...rest }) => (
        <UserCard key={id} {...rest} />
      ))}
    </Box>
  );
};

export default UserContainer;

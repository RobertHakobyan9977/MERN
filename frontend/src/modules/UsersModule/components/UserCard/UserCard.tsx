import { FC } from "react";
import { Box, Paper, styled } from "@mui/material";

const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  flex: "1 1 250px",
  maxWidth: "250px",
  [theme.breakpoints.down("sm")]: {
    flex: "1 1 auto",
    maxWidth: "none"
  },
  "& p:first-of-type": { fontWeight: 700 }
}));

const Items = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexWrap: "nowrap",
  gap: theme.spacing(1)
}));

interface IUserCardProps {
  userName: string;
  phone: number;
}

const UserCard: FC<IUserCardProps> = ({ userName, phone }) => (
  <PaperStyled>
    <div>
      <Items sx={{ marginBottom: 2 }}>
        <p>User Name:</p>
        <p>{userName}</p>
      </Items>
      <Items>
        <p>Phone Number:</p>
        <p>{phone}</p>
      </Items>
    </div>
  </PaperStyled>
);

export default UserCard;

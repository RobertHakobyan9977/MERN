import { FC, ReactNode, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";

import FormContainer from "./containers/FormContainer";
import UserContainer from "./containers/UserContainer";

const UsersModule: FC = () => {
  const [tabValue, setTabValue] = useState<"FORM" | "USER">("FORM");

  const handleOnTabChange = (_, value: "FORM" | "USER"): void => {
    setTabValue(value);
  };

  const items: Record<"FORM" | "USER", ReactNode> = {
    FORM: <FormContainer />,
    USER: <UserContainer />
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={tabValue} onChange={handleOnTabChange} aria-label='basic tabs example'>
        <Tab label='FORM' value={"FORM"} />
        <Tab label='USER' value={"USER"} />
      </Tabs>
      <Box sx={{ padding: 3 }}>{items[tabValue]}</Box>
    </Box>
  );
};

export default UsersModule;

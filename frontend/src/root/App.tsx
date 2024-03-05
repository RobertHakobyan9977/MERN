import { FC } from "react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

import api from "@common/api/api";
import UsersPage from "@pages/UsersPage";

const App: FC = () => (
  <ApiProvider api={api}>
    <UsersPage />
  </ApiProvider>
);

export default App;

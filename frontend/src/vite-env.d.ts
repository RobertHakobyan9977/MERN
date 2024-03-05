/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import { FC, ReactNode } from "react";

declare global {
  type FCC<PROPS = object> = FC<{ children?: ReactNode } & PROPS>;

  interface ImportMetaEnv {
    readonly VITE_APP_BASE_URL: string;
    readonly VITE_APP_BASE_PREFIX: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

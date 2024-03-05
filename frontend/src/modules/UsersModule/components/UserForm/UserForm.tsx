import { ChangeEvent, FC, FormEvent } from "react";
import { Grid, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { IUsersDto } from "@cTypes/services";
import { IFetchError } from "@cTypes/global";

interface IUserFormProps {
  isLoading: boolean;
  isError: boolean;
  formValues: Partial<IUsersDto> | null;
  error?: IFetchError;
  onChange: (formKey: keyof IUsersDto) => (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const UserForm: FC<IUserFormProps> = ({ formValues, isLoading, isError, error, onChange, onSubmit }) => {
  const getErrorMessage = (formKey: keyof IUsersDto): string =>
    error?.data ? error.data.message.find(e => e.property === formKey)?.message || "" : "";

  return (
    <form autoComplete={"off"} onSubmit={onSubmit}>
      <Grid container direction='column' spacing={2}>
        <Grid item>
          <TextField
            required
            autoComplete='new-password'
            value={formValues?.userName || ""}
            error={isError && !!getErrorMessage("userName")}
            helperText={getErrorMessage("userName")}
            label='User Name'
            variant='outlined'
            onChange={onChange("userName")}
          />
        </Grid>
        <Grid item>
          <TextField
            required
            sx={{
              "& input[type=number]": {
                MozAppearance: "textfield"
              },
              "& input[type=number]::-webkit-outer-spin-button": {
                WebkitAppearance: "none",
                margin: 0
              },
              "& input[type=number]::-webkit-inner-spin-button": {
                WebkitAppearance: "none",
                margin: 0
              }
            }}
            autoComplete='new-password'
            type={"number"}
            value={formValues?.phone || ""}
            error={isError && !!getErrorMessage("phone")}
            helperText={getErrorMessage("phone")}
            label='Phone Number'
            variant='outlined'
            onChange={onChange("phone")}
          />
        </Grid>
        <Grid item>
          <TextField
            required
            autoComplete='new-password'
            type={"password"}
            value={formValues?.password || ""}
            error={isError && !!getErrorMessage("password")}
            helperText={getErrorMessage("password")}
            label='Password'
            variant='outlined'
            onChange={onChange("password")}
          />
        </Grid>
        <Grid item>
          <TextField
            required
            autoComplete='new-password'
            type={"password"}
            value={formValues?.passwordConfirm || ""}
            error={isError && !!getErrorMessage("passwordConfirm")}
            helperText={getErrorMessage("passwordConfirm")}
            label='Confirm Password'
            variant='outlined'
            onChange={onChange("passwordConfirm")}
          />
        </Grid>
        <Grid item>
          <LoadingButton loading={isLoading} variant={"contained"} type={"submit"}>
            <span>Submit</span>
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default UserForm;

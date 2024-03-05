import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";

import { IUsersDto } from "@cTypes/services";
import UserForm from "@modules/UsersModule/components/UserForm";
import { useCreateUsersMutation } from "@services/usersServices";
import { IFetchError } from "@cTypes/global";

const FormContainer: FC = () => {
  const [formValues, setFormValues] = useState<Partial<IUsersDto> | null>(null);

  const [createUser, { error, isError, isLoading, isSuccess }] = useCreateUsersMutation();

  const handleOnChange =
    (formKey: keyof IUsersDto) =>
    ({ target }: ChangeEvent<HTMLInputElement>): void => {
      setFormValues(prevState => ({
        ...(prevState || {}),
        [formKey]: formKey === "phone" ? +target.value : target.value
      }));
    };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    createUser(formValues as IUsersDto);
  };

  console.log({ isSuccess });

  useEffect(() => {
    if (isSuccess) {
      setFormValues(null);
    }
  }, [isSuccess]);

  return (
    <UserForm
      formValues={formValues}
      error={error as unknown as IFetchError}
      isError={isError}
      isLoading={isLoading}
      onChange={handleOnChange}
      onSubmit={handleOnSubmit}
    />
  );
};

export default FormContainer;

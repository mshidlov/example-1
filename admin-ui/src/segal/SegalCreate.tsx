import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SegalCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Shumlik" source="shumlik" />
      </SimpleForm>
    </Create>
  );
};

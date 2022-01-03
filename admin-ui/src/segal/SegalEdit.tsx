import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SegalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Shumlik" source="shumlik" />
      </SimpleForm>
    </Edit>
  );
};

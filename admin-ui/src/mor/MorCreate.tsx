import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DrorTitle } from "../dror/DrorTitle";

export const MorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="dror.id" reference="Dror" label="Dror">
          <SelectInput optionText={DrorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

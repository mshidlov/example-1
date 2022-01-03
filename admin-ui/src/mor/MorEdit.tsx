import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DrorTitle } from "../dror/DrorTitle";

export const MorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="dror.id" reference="Dror" label="Dror">
          <SelectInput optionText={DrorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

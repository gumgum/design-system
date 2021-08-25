import { useState } from "react";
import { Button, FormGroup, TextInput, Tooltip } from "gumdrops";
export default function PageTitle({ title, isEditable }) {
  const [editing, setEditing] = useState(false);
  return (
    <div className="gds-flex gds-flex--align-end -m-b-3">
      {!editing ? (
        <h2 className="gds-text--header-md" style={{ height: 39.59 }}>
          {title}
        </h2>
      ) : (
        <div className="gds-flex">
          <FormGroup isInline className="-m-r-2">
            <TextInput
              name="title"
              placeholder="Title"
              size="sm"
              type="text"
              defaultValue={title}
            />
          </FormGroup>
          <Button
            size="sm"
            context="primary"
            className="-m-r-2"
            onClick={() => setEditing(!editing)}
          >
            Save
          </Button>
          <Button size="sm" onClick={() => setEditing(!editing)}>
            Cancel
          </Button>
        </div>
      )}
      {isEditable && !editing && (
        <Tooltip text="Edit Title" position="right">
          <Button
            size="xs"
            context="link"
            className="-p-v-1"
            onClick={() => setEditing(!editing)}
          >
            <i className="fas fa-edit"></i>
          </Button>
        </Tooltip>
      )}
    </div>
  );
}

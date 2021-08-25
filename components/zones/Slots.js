import {
  Button,
  Column,
  FormGroup,
  FormGroupLabel,
  Row,
  Select,
  TextInput,
  Tooltip,
} from "gumdrops";
import React from "react";

export default function Slots() {
  return (
    <div>
      <div className="gds-container -m-b-4">
        <h3 className="gds-text--header-xs">Request New Slots</h3>
        <p className="gds-text--body-sm">
          Use this form to request new slots for your zone. Slot requests will
          be approved by GumGum. View request status below.
        </p>
        <div className="gds-flex gds-flex--align-end -m-b-2">
          <div className="gds-flex__item -m-r-2">
            <FormGroup>
              <FormGroupLabel text="Name" />
              <TextInput size="sm" />
            </FormGroup>
          </div>
          <div className="gds-flex__item -m-r-2 gds-flex__item--grow-0">
            <FormGroup>
              <FormGroupLabel text="Size" />
              <Select size="sm" style={{ minWidth: 100 }} />
            </FormGroup>
          </div>
          <div className="gds-flex__item -m-r-2 gds-flex__item--grow-0">
            <FormGroup>
              <FormGroupLabel text="Implmentation Type" />
              <Select size="sm" style={{ minWidth: 140 }} />
            </FormGroup>
          </div>
          <div className="gds-flex__item  gds-flex__item--grow-0">
            <FormGroup>
              <Button context="danger" size="sm" className="-m-b-0">
                <i className="fas fa-trash" />
              </Button>
            </FormGroup>
          </div>
        </div>
        <div className="gds-flex gds-flex--align-end -m-b-2">
          <div className="gds-flex__item -m-r-2">
            <FormGroup>
              <TextInput size="sm" />
            </FormGroup>
          </div>
          <div className="gds-flex__item -m-r-2 gds-flex__item--grow-0">
            <FormGroup>
              <Select size="sm" style={{ minWidth: 100 }} />
            </FormGroup>
          </div>
          <div className="gds-flex__item -m-r-2 gds-flex__item--grow-0">
            <FormGroup>
              <Select size="sm" style={{ minWidth: 140 }} />
            </FormGroup>
          </div>
          <div className="gds-flex__item  gds-flex__item--grow-0">
            <FormGroup>
              <Button context="danger" size="sm" className="-m-b-0">
                <i className="fas fa-trash" />
              </Button>
            </FormGroup>
          </div>
        </div>
        <div className="gds-flex gds-flex--justify-end -m-b-3">
          <Tooltip text="Add Slot" position="left">
            <Button context="primary" size="sm">
              <i className="fas fa-plus" />
            </Button>
          </Tooltip>
        </div>
        <div className="gds-flex gds-flex--justify-end">
          <Button size="sm" className="-m-r-2">
            Cancel
          </Button>
          <Button context="primary" size="sm">
            Submit Request
          </Button>
        </div>
      </div>
      <div className="gds-flex gds-flex--justify-between -p-h-2">
        <h3 className="gds-text--header-sm">Slots</h3>
        <Button size="xs">
          <i className="fas fa-file-excel"></i> Export Slot Codes
        </Button>
      </div>
      <hr className="-color-bd-lt-2 -m-b-2" />
      <p>same table as existing site</p>
    </div>
  );
}

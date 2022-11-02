import {
    Button,
    Column,
    FormGroup,
    FormGroupLabel,
    Row,
    Card,
    Table,
    Tooltip,
    TextInput,
    Checkbox,
    Toggle,
} from 'gumdrops';
import React from 'react';
import BulkMenu from '../common/bulk/BulkMenu';
import TableFooter from '../common/table/TableFooter';

export default function Blocking() {
    return (
        <>
            <BlockedIAB />
            <BlockedAdvertisers />
            <BlockedDomains />
        </>
    );
}

const BlockedIAB = () => {
    return (
        <div className="-m-b-4">
            <div className="gds-flex gds-flex--justify-between -p-h-2">
                <h3 className="gds-text--header-xs">Blocked IAB Categories</h3>
                <Button size="xs" context="primary">
                    Add Category
                </Button>
            </div>
            <hr className="-color-bd-lt-2" />
            <Row className="-p-a-2">
                <Column md="6">
                    <Button size="sm">
                        Arts & Entertainment (IAB1)
                        <span
                            className="gds-badge gds-badge--danger -m-l-2"
                            style={{ fontSize: 10 }}>
                            13
                        </span>
                    </Button>
                </Column>
            </Row>
        </div>
    );
};

const BlockedAdvertisers = () => {
    const blockedUrlData = [
        {
            type: 'Image URL',
            pattern: 'https://gumgum.com/media/449/download/img-3.png?v=1',
            check: null,
            global: (
                <span
                    className="gds-tooltip--left"
                    data-tooltip="Edit global blocks to have removed">
                    <div className="gds-tag gds-tag--xs -m-b-0">Global</div>
                </span>
            ),
        },
        {
            type: 'Page URL',
            pattern: 'https://relometrics.com/rightsholders/',
            check: <Checkbox size="xs" />,
            global: null,
        },
    ];
    return (
        <div className="-m-b-4">
            <div className="gds-flex gds-flex--justify-between -p-h-2">
                <h3 className="gds-text--header-xs">Blocked Advertiser</h3>
                <Button size="xs" context="primary">
                    Add Advertiser
                </Button>
            </div>
            <hr className="-color-bd-lt-2" />
            <div className="gds-flex -p-h-2 -p-t-2">
                <div className="gds-flex__item gds-flex__item--grow-0">
                    <BulkMenu />
                </div>
                <div className="gds-flex__item -m-r-2">
                    <TextInput size="xs" placeholder="Search" />
                </div>
                <div className="gds-flex__item gds-flex__item--grow-0">
                    <Toggle label="Hide Globabl Blocks" size="sm" type="checkbox" />
                </div>
            </div>
            <div className="-p-a-2">
                <Card className="-overflow-hidden">
                    <Table
                        columns={[
                            {
                                children: '  ',
                                key: 'check',
                                headingProps: {
                                    style: {
                                        width: 40,
                                    },
                                },
                            },
                            {
                                children: 'URL Type',
                                key: 'type',
                                headingProps: {
                                    style: {
                                        width: 100,
                                    },
                                },
                            },
                            {
                                children: 'URL Pattern',
                                key: 'pattern',
                            },
                            {
                                children: '  ',
                                key: 'global',
                                headingProps: {
                                    style: {
                                        width: 120,
                                    },
                                },
                            },
                        ]}
                        data={blockedUrlData}
                        hasHeader
                        isResponsive
                        isStriped
                    />
                    <TableFooter numResults={blockedUrlData.length} />
                </Card>
            </div>
        </div>
    );
};

const BlockedDomains = () => {
    const blockedUrlData = [
        {
            domain: 'https://mugmug.com/',
            check: null,
            global: (
                <span
                    className="gds-tooltip--left"
                    data-tooltip="Edit global blocks to have removed">
                    <div className="gds-tag gds-tag--xs -m-b-0">Global</div>
                </span>
            ),
        },
        {
            domain: 'https://relometrics.com/',
            check: <Checkbox size="xs" />,
            global: null,
        },
    ];
    return (
        <div className="-m-b-4">
            <div className="gds-flex gds-flex--justify-between -p-h-2">
                <h3 className="gds-text--header-xs">Blocked Domains</h3>
                <Button size="xs" context="primary">
                    Add Domain
                </Button>
            </div>
            <hr className="-color-bd-lt-2" />
            <div className="gds-flex -p-h-2 -p-t-2">
                <div className="gds-flex__item gds-flex__item--grow-0">
                    <BulkMenu />
                </div>
                <div className="gds-flex__item -m-r-2">
                    <TextInput size="xs" placeholder="Search" />
                </div>
                <div className="gds-flex__item gds-flex__item--grow-0">
                    <Toggle label="Hide Globabl Blocks" size="sm" type="checkbox" />
                </div>
            </div>
            <div className="-p-a-2">
                <Card className="-overflow-hidden">
                    <Table
                        columns={[
                            {
                                children: '  ',
                                key: 'check',
                                headingProps: {
                                    style: {
                                        width: 40,
                                    },
                                },
                            },
                            {
                                children: 'Domain',
                                key: 'domain',
                            },
                            {
                                children: '  ',
                                key: 'global',
                                headingProps: {
                                    style: {
                                        width: 120,
                                    },
                                },
                            },
                        ]}
                        data={blockedUrlData}
                        hasHeader
                        isResponsive
                        isStriped
                    />
                    <TableFooter numResults={blockedUrlData.length} />
                </Card>
            </div>
        </div>
    );
};

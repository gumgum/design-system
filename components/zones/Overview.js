import { Button, Column, FormGroup, FormGroupLabel, Row, Card, Table, Tooltip } from 'gumdrops';
import React from 'react';
import TableFooter from '../common/table/TableFooter';

export default function Overview() {
    return (
        <>
            <Details />
            <BlockedUrls />
            <EmbedCodes />
        </>
    );
}

const Details = () => {
    return (
        <div className="-m-b-4">
            <div className="gds-flex gds-flex--justify-between -p-h-2">
                <h3 className="gds-text--header-xs">Details</h3>
                <Button size="xs">Edit</Button>
            </div>
            <hr className="-color-bd-lt-2" />
            <Row className="-p-a-2">
                <Column md="6">
                    <FormGroup>
                        <FormGroupLabel text="zone type" />
                        <p>Website</p>
                    </FormGroup>
                </Column>
                <Column md="6">
                    <FormGroup>
                        <FormGroupLabel text="Enabled Products" />

                        <div>
                            <div className="gds-tag gds-tag--xs -m-b-0">In-Image</div>
                            <div className="gds-tag gds-tag--xs -m-b-0">In-Screen</div>
                            <div className="gds-tag gds-tag--xs -m-b-0">In-Slot</div>
                            <div className="gds-tag gds-tag--xs -m-b-0">Native</div>
                            <div className="gds-tag gds-tag--xs -m-b-0">In-Video</div>
                            <div className="gds-tag gds-tag--xs -m-b-0">Video</div>
                        </div>
                    </FormGroup>
                </Column>
            </Row>
            <Row className="-p-a-2">
                <Column>
                    <FormGroup>
                        <FormGroupLabel text="url domains" />
                        <p>http://localhost:3000/zones/123</p>
                    </FormGroup>
                </Column>
            </Row>
        </div>
    );
};

const BlockedUrls = () => {
    const blockedUrlData = [
        {
            type: 'Image URL',
            pattern: 'https://gumgum.com/media/449/download/img-3.png?v=1',
        },
        {
            type: 'Page URL',
            pattern: 'https://relometrics.com/rightsholders/',
        },
    ];
    return (
        <div className="-m-b-4">
            <div className="gds-flex gds-flex--justify-between -p-h-2">
                <h3 className="gds-text--header-xs">Blocked URLs</h3>
                <Button size="xs" context="primary">
                    Add
                </Button>
            </div>
            <hr className="-color-bd-lt-2" />
            <div className="-p-a-2">
                <Card className="-overflow-hidden">
                    <Table
                        columns={[
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

const EmbedCodes = () => {
    return (
        <div className="-m-b-2">
            <div className="gds-flex gds-flex--justify-between -p-h-2">
                <h3 className="gds-text--header-xs">Embed Codes</h3>
            </div>
            <hr className="-color-bd-lt-2" />
            <Row className="-p-a-2">
                <Column className="-m-b-2">
                    <FormGroup>
                        <FormGroupLabel text="STANDARD CODE" />
                        <div className="gds-container -color-bg-lt-1 gds-flex gds-flex--align-center gds-flex--justify-between gds-flex--wrap-no">
                            <div
                                className="gds-flex__item gds-text--body-sm -overflow-x-scroll"
                                style={{
                                    whiteSpace: 'nowrap',
                                }}>{`<script type="text/javascript">ggv2id='6d5aj7vf';</script><script type="text/javascript" src="https://js.gumgum.com/services.js"></script>`}</div>
                            <div className="gds-flex__item gds-flex__item--grow-0">
                                <Tooltip text="Copy Clipboard">
                                    <Button size="xs" context="primary">
                                        <i className="fas fa-copy"></i>
                                    </Button>
                                </Tooltip>
                            </div>
                        </div>
                    </FormGroup>
                </Column>
                <Column className="-m-b-2">
                    <FormGroup>
                        <FormGroupLabel text="AD SERVER READY / ASYNC CODE" />
                        <div className="gds-container -color-bg-lt-1 gds-flex gds-flex--align-center gds-flex--justify-between gds-flex--wrap-no">
                            <div
                                className="gds-flex__item gds-text--body-sm -overflow-x-scroll"
                                style={{
                                    whiteSpace: 'nowrap',
                                }}>{`<script type="text/javascript">ggv2id='6d5aj7vf';</script><script type="text/javascript" src="https://js.gumgum.com/services.js"></script>`}</div>
                            <div className="gds-flex__item gds-flex__item--grow-0">
                                <Tooltip text="Copy Clipboard">
                                    <Button size="xs" context="primary">
                                        <i className="fas fa-copy"></i>
                                    </Button>
                                </Tooltip>
                            </div>
                        </div>
                    </FormGroup>
                </Column>
                <Column className="-m-b-2">
                    <FormGroup>
                        <FormGroupLabel text="GUMGUM VAST TAG (IN-STREAM)" />
                        <div className="gds-container -color-bg-lt-1 gds-flex gds-flex--align-center gds-flex--justify-between gds-flex--wrap-no">
                            <div
                                className="gds-flex__item gds-text--body-sm -overflow-x-scroll"
                                style={{
                                    whiteSpace: 'nowrap',
                                }}>{`<script type="text/javascript">ggv2id='6d5aj7vf';</script><script type="text/javascript" src="https://js.gumgum.com/services.js"></script>`}</div>
                            <div className="gds-flex__item gds-flex__item--grow-0">
                                <Tooltip text="Copy Clipboard">
                                    <Button size="xs" context="primary">
                                        <i className="fas fa-copy"></i>
                                    </Button>
                                </Tooltip>
                            </div>
                        </div>
                    </FormGroup>
                </Column>
            </Row>
        </div>
    );
};

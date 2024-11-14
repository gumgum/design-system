import { useRouter } from 'next/router';
import PageTitle from '../../components/common/title/pageTitle';
import { Button, Card, Table, Checkbox, TextInput } from 'gumdrops';
import TableFooter from '../../components/common/table/TableFooter';
import BulkMenu from '../../components/common/bulk/BulkMenu';

const ActionIcons = () => {
    return (
        <div className="gds-flex gds-flex--justify-end">
            <button className="gds-button--icon">
                <i className="fas fa-copy"></i>
            </button>
            <button className="gds-button--icon">
                <i className="fas fa-copy"></i>
            </button>
        </div>
    );
};

const ProductTags = () => {
    return (
        <div>
            <div className="gds-tag gds-tag--xs -m-b-0">In-Image</div>
            <div className="gds-tag gds-tag--xs -m-b-0">In-Screen</div>
            <div className="gds-tag gds-tag--xs -m-b-0">In-Slot</div>
            <div className="gds-tag gds-tag--xs -m-b-0">Native</div>
            <div className="gds-tag gds-tag--xs -m-b-0">In-Video</div>
            <div className="gds-tag gds-tag--xs -m-b-0">Video</div>
        </div>
    );
};

export default function ZonesPage() {
    const router = useRouter();
    return (
        <div>
            <div className="gds-flex gds-flex--justify-between">
                <PageTitle title="Zones" />
                <Button context="primary" size="xs">
                    Add Zone
                </Button>
            </div>

            <div className="gds-flex -m-b-1">
                <div className="gds-flex__item gds-flex__item--grow-0">
                    <BulkMenu />
                </div>
                <div className="gds-flex__item -m-r-2">
                    <TextInput size="xs" placeholder="Search" />
                </div>
                <div className="gds-flex__item gds-flex__item--grow-0">
                    <Button size="xs">
                        <i className="fas fa-filter"></i> Filter
                    </Button>
                </div>
            </div>
            <Card className="-overflow-hidden">
                <Table
                    columns={[
                        {
                            children: ` `,
                            key: 'check',
                            headingProps: {
                                style: {
                                    width: 30,
                                },
                            },
                        },
                        {
                            children: 'ID',
                            key: 'id',
                            headingProps: {
                                style: {
                                    width: 80,
                                },
                            },
                        },
                        {
                            children: 'Zone Name',
                            key: 'name',
                            headingProps: {
                                style: {
                                    minWidth: 180,
                                },
                            },
                        },
                        {
                            children: 'Products',
                            key: 'products',
                        },
                        {
                            children: '# of Slots',
                            key: 'slots',
                            headingProps: {
                                style: {
                                    width: 100,
                                },
                            },
                        },
                        {
                            children: ' ',
                            key: 'action',
                            headingProps: {
                                style: {
                                    width: 100,
                                },
                            },
                        },
                    ]}
                    data={[
                        {
                            check: <Checkbox size="sm" className="-m-l-1" />,
                            id: 102223,
                            name: 'Monnie',
                            products: <ProductTags />,
                            slots: '3',
                            action: <ActionIcons />,
                        },
                    ]}
                    hasHeader
                    isResponsive
                    isStriped
                    onRowClick={() => router.push('/zones/zone/overview')}
                    size="sm"
                />
                <TableFooter numResults={1} />
            </Card>
        </div>
    );
}

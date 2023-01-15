import React from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { useQuery } from "react-query";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import { Empty } from "antd";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

import { GetProductTypes } from "@controllers/ProductTypeController";

const PageContainer = React.lazy(() => import("@components/Templates/PageContainer"));
const CustomToolBar = React.lazy(() => import("@components/Toolbar/CustomToolBar"));
const FormModal = React.lazy(() => import("@components/FormModal/FormModal"));

function ProductType() {
    const [open, setOpen] = React.useState(false);
    const { data: productTypes, isLoading } = useQuery(["productType"], GetProductTypes);


    if (isLoading) return <Empty />;

    const columns = [
        {
            field: "category",
            headerName: "Category",
            flex: 1,
            editable: false,
            renderCell: ({ row }) => {
                return (
                    <div>
                        <strong>{row.category}</strong>
                    </div>
                );
            },
        },
        {
            field: "action",
            headerName: "",
            flex: 1,
            editable: false,
            valueGetter: ({ row }) => {
                return row.pdTypeID;
            },
            renderCell: ({ row }) => {
                return (
                    <div
                        className="d-flex justify-content-between align-items-center"
                        style={{ cursor: "pointer" }}
                    >
                        <Tooltip placement="top" title="Update product type">
                            <IconButton
                                color="primary"
                                fontSize="small"
                                onClick={() => {
                                    console.log(row.pdTypeID);
                                    // setConfirmState({
                                    //     isOpen: true,
                                    //     name:
                                    //         row.carPools[0].origin +
                                    //         " to " +
                                    //         row.carPools[0].destination,
                                    //     type: "leave",
                                    //     onConfirm: () => {
                                    //         leaveCarPool({
                                    //             JoinId: row.joinId,
                                    //         });
                                    //     },
                                    // });
                                }}
                            >
                                <EditIcon color="primary" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip placement="top" title="Delete product type">
                            <IconButton
                                color="primary"
                                fontSize="small"
                                onClick={() => {
                                    console.log(row.pdTypeID);
                                    // setConfirmState({
                                    //     isOpen: true,
                                    //     name:
                                    //         row.carPools[0].origin +
                                    //         " to " +
                                    //         row.carPools[0].destination,
                                    //     type: "leave",
                                    //     onConfirm: () => {
                                    //         leaveCarPool({
                                    //             JoinId: row.joinId,
                                    //         });
                                    //     },
                                    // });
                                }}
                            >
                                <DeleteIcon color="error" />
                            </IconButton>
                        </Tooltip>
                    </div>
                );
            },
        },
    ]

    return (
        <PageContainer>
            <FormModal
                setOpen={setOpen}
                open={open}
                label="Add New Product Type"
            >
                Hello
            </FormModal>
            <Grid item xs={12}>
                <DataGrid
                    autoHeight
                    autoWidth
                    rows={productTypes}
                    loading={isLoading}
                    columns={columns}
                    components={{
                        Toolbar: CustomToolBar,
                    }}
                    componentsProps={{
                        toolbar: {
                            create: () => {
                                setOpen(true);
                            },
                        },
                    }}
                    getRowClassName={(params) =>
                        params.indexRelativeToCurrentPage % 2 === 0 && "even"
                    }
                    getRowHeight={() => "auto"}
                    getRowId={(row) => row.pdTypeID}
                    onCellEditStop={(_, e) => console.log(e.target)}
                    initialState={{
                        sorting: {
                            sortModel: [
                                {
                                    field: "action",
                                    sort: "asc",
                                },
                            ],
                        },
                    }}
                />
            </Grid>
        </PageContainer>
    )
}

export default React.memo(ProductType);
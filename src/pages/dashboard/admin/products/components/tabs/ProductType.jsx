import React from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { useQuery, useQueryClient, useMutation } from "react-query";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import { Empty } from "antd";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { toast } from "react-toastify";

const PageContainer = React.lazy(() => import("@components/Templates/PageContainer"));
const CustomToolBar = React.lazy(() => import("@components/Toolbar/CustomToolBar"));
const FormModal = React.lazy(() => import("@components/FormModal/FormModal"));
const ProductTypeForm = React.lazy(() => import("@pages/dashboard/admin/products/components/forms/ProductTypeForm"));

import { GetProductTypes, ProductTypeDeleteRequest } from "@controllers/ProductTypeController";


function ProductType() {
    const queryClient = useQueryClient();
    const [open, setOpen] = React.useState(false);
    const [selectedForUpdate, setSelectedForUpdate] = React.useState(null);
    const { data: productTypes, isLoading } = useQuery(["productType"], GetProductTypes);

    function handleSelect(id) {
        setSelectedForUpdate(productTypes.find((pt) => pt.pdTypeID === id));
        setOpen(true);
    }

    const { mutate: deleteProductType } = useMutation(ProductTypeDeleteRequest, {
        onSuccess: (d) => {
            toast("Product Type Deleted", {
                type: "success",
            });
            setOpen(false);
            queryClient.invalidateQueries("productTypes");
        },
        onError: (d) => {
            toast("Product Type Deleting Failed", {
                type: "error",
            });
        },
    });

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
                                    handleSelect(row.pdTypeID);
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
                                    deleteProductType(row.pdTypeID);
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
                label={`${selectedForUpdate ? "Edit" : "Create"} Product Type`}
            >
                <ProductTypeForm selectedForUpdate={selectedForUpdate} setOpen={setOpen} />
            </FormModal>
            <Grid item xs={12}>
                <DataGrid
                    autoHeight
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
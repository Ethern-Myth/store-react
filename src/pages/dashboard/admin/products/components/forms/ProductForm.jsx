import React from 'react'
import ButtonGroup from "@mui/material/ButtonGroup";
import { TextField, Button, MenuItem, Grid } from "@mui/material";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import FormSkeleton from '@components/Skeleton/FormSkeleton';

import { ProductPostRequest, ProductPutRequest } from '@controllers/ProductController';
import { GetConversions } from '@controllers/ConversionController';

function ProductForm({ setOpen, selectedForUpdate = null }) {
    const queryClient = useQueryClient();
    const { data: conversions, isLoading } = useQuery(["conversions"], GetConversions);
    console.log(conversions);

    const { mutate: createProduct } = useMutation(ProductPostRequest, {
        onSuccess: (d) => {
            queryClient.invalidateQueries();
            toast("Product Created", {
                type: "success",
            });
            setOpen(false);
        },
        onError: (d) => {
            toast("Product Create Failed", {
                type: "error",
            });
        },
    });

    const { mutate: editProduct } = useMutation(ProductPutRequest, {
        onSuccess: (d) => {
            queryClient.invalidateQueries();
            toast("Product Updated", {
                type: "success",
            });
            setOpen(false);
        },
        onError: (d) => {
            toast("Product Updating Failed", {
                type: "error",
            });
        },
    });

    const {
        errors,
        values,
        submitForm,
        handleChange,
        setFieldTouched,
    } = useFormik({
        initialValues: {
            id: selectedForUpdate ? selectedForUpdate.productID : null,
            name: selectedForUpdate ? selectedForUpdate.name : " ",
            desc: selectedForUpdate ? selectedForUpdate.desc : " ",
            brand: selectedForUpdate ? selectedForUpdate.brand : " ",
            conversionSize: selectedForUpdate ? selectedForUpdate.conversionSize : 0,
            conversionID: selectedForUpdate ? selectedForUpdate.conversion.conversionID : 0,
            price: selectedForUpdate ? selectedForUpdate.price : 0,
            inStock: selectedForUpdate ? selectedForUpdate.inStock : false,
            image: selectedForUpdate ? selectedForUpdate.imageUrl : null,
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required"),
            desc: Yup.string().required("Required"),
            brand: Yup.string().required("Required"),
            conversionID: Yup.number().min(1).required("Required"),
            conversionSize: Yup.number().required("Required"),
            price: Yup.number().required("Required"),
            inStock: Yup.boolean().required("Required"),
            image: Yup.mixed().required("Required")
        }),
        onSubmit: (values) => {
            if (selectedForUpdate) {
                editProduct(values);
            }
            else {
                delete values.id;
                createProduct(values);
            }
        },
    });

    React.useEffect(() => {
        setFieldTouched("name");
    }, [selectedForUpdate]);

    return (
        !isLoading ? (
            <Grid container rowGap={2}>
                <Grid item xs={12}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name="name"
                        label="Product Name"
                        type="name"
                        fullWidth
                        size="small"
                        error={!!errors.name}
                        helperText={errors.name}
                        value={values.name}
                        onChange={handleChange}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        margin="dense"
                        id="desc"
                        name="desc"
                        label="Product Description"
                        type="text"
                        fullWidth
                        size="small"
                        error={!!errors.desc}
                        helperText={errors.desc}
                        value={values.desc}
                        onChange={handleChange}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        margin="dense"
                        id="brand"
                        name="brand"
                        label="Product brand"
                        type="text"
                        fullWidth
                        size="small"
                        error={!!errors.brand}
                        helperText={errors.brand}
                        value={values.brand}
                        onChange={handleChange}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        id="conversionID"
                        name="conversionID"
                        label="Conversion Unit"
                        select
                        fullWidth
                        size="small"
                        error={!!errors.conversionID}
                        helperText={errors.conversionID}
                        value={values.conversionID}
                        onChange={handleChange}
                    >
                        <MenuItem value={0}>
                            <em>Select Option</em>
                        </MenuItem>
                        {conversions.map((conversion) => (<MenuItem value={conversion.conversionID}>{conversion.unit}
                        </MenuItem>))}
                    </TextField>
                </Grid>



                <Grid item xs={12}>
                    <ButtonGroup
                        variant="spaced"
                        aria-label="outlined primary button group"
                    >
                        <Button
                            sx={{ color: "white" }}
                            variant="contained"
                            onClick={submitForm}
                        >
                            Save
                        </Button>
                        <Button
                            sx={{
                                backgroundColor: "#ededed",
                                color: "grey",
                                border: "#BEBEBE",
                            }}
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            Cancel
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        ) : <FormSkeleton />);
}

export default React.memo(ProductForm);
import React from 'react'
import ButtonGroup from "@mui/material/ButtonGroup";
import { TextField, Button, Grid } from "@mui/material";
import { useMutation, useQueryClient } from "react-query";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { ProductPostRequest, ProductPutRequest } from '@controllers/ProductController';

function ProductForm({ setOpen, selectedForUpdate = null }) {
    const queryClient = useQueryClient();
    return (
        <div>ProductForm</div>
    )
}

export default React.memo(ProductForm);
import { Avatar, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LockClockOutlined from '@mui/icons-material/LockClockOutlined'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Footer from '../../component/Footer';
import Navbar from '../../component/Navbar';
import { userCreateAction } from '../../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
    firstName: yup
        .string('Enter first name')
        .required('First name is required'),
    lastName: yup
        .string('Enter Last name')
        .required('Last name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});


const CreateUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { data } = useSelector(state => state.createUser);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            //  alert(JSON.stringify(values, null, 2));
            dispatch(userCreateAction(values));
            actions.resetForm();
        }

    })

    const [state, setState] = useState(false)
    const handleClick = () => {
        setState(prevState => !prevState)
    }

    return (
        <>
            <Navbar />
            <Box sx={{ height: '81vh', display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box onSubmit={formik.handleSubmit} component="form" className='form_style border-style' >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                        <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}>
                            <LockClockOutlined />
                        </Avatar>
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="firstName"
                            label="First-Name"
                            name='firstName'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="First-Name"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="lastName"
                            label="Last-Name"
                            name='lastName'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Last-Name"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                        />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id="email"
                            label="E-mail"
                            name='email'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="E-mail"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <div className="mylogin">
                            <TextField sx={{ mb: 3 }}
                                fullWidth
                                id="password"
                                name="password"
                                label="Password"
                                type={state ? "text" : "password"}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                placeholder="Password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                            <Button onClick={handleClick} className="loginClass2">
                                {state ? <VisibilityIcon /> : <VisibilityOffIcon />}</Button>
                        </div>

                        <Button fullWidth variant="contained" type='submit' >CreateUser</Button>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default CreateUser
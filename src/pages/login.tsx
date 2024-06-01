import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getData, sendData } from "../config/firebasemethods";

export default function Login() {
    const [model, setModel] = useState<any>({})
    const [count, setCount] = useState<any>(0)

    const loginUser = () => {
        sendData('users', model)
            .then((res) => {
                console.log('Data Send Successfully')
            }).catch((err) => {
                console.log(err, 'Error')
            })
    }

    const get = () => {
        getData('users')
    }

    useEffect(() => {
        get()
    }, [])


    return <>
        <Box sx={{ height: '100vh' }} className='bg-light d-flex justify-content-center align-items-center'>
            <Button onClick={() => {
                setCount(count + 1)
            }}>Change Count</Button>
            <Box>
                <Box className='p-3'>
                    <Typography className="fs-2">Login</Typography>
                </Box>
                <Box className='p-3'>
                    <TextField
                        value={model.email}
                        onChange={(e) => {
                            setModel({ ...model, email: e.target.value })
                        }}
                        variant="standard"
                        label='Email'
                    />
                </Box>
                <Box className='p-3'>
                    <TextField
                        value={model.password}
                        onChange={(e) => {
                            setModel({ ...model, password: e.target.value })
                        }}
                        variant="standard"
                        label='Password'
                    />
                </Box>
                <Box className='p-3'>
                    <Button onClick={loginUser} variant="contained" color="error" fullWidth={true}>Login</Button>
                </Box>
            </Box>
        </Box>
    </>
}
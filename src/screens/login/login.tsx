import { Grid } from "@mui/material";
import { useCallback, useState, useEffect } from "react";
import { Wrapper, Input, Button, Error } from "./login.styled";
import * as yup from 'yup';

export default function Login () {
    const [error, setError] = useState([])
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const [loading, setLoading] = useState(false)

    const handleChanges = useCallback(( { target }: any ) => {
        console.log(target.value)

        setData(prevData => ({
            ...prevData,
            [target.name]: target.value
        }))
    }, [setData])

    const handleSend = useCallback( async () => {
        try {
            const schema = yup.object().shape({
                email: yup.string().required().email(),
                password: yup.string().required(),
            })

            await schema.validate(data)
        } catch (e: any) {
            setError(e.errors[0])
        }
    }, [data])

    useEffect(() => {
        yup.object().shape({
            
        })
    }, [])

    return (
        <Wrapper container justifyContent="center" alignContent="center">
            <Grid item={true} xs={2} container justifyContent="center" alignContent="center">
                <Input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    onChange={handleChanges} 
                />
                <Input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    onChange={handleChanges} 
                />
                <Button onClick={handleSend}>Entrar</Button>
                <Error>{error}</Error>
            </Grid>
        </Wrapper>
    )
}
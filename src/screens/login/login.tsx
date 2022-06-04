import { Grid } from "@mui/material";
import { useCallback, useState, useEffect } from "react";
import { Wrapper } from "./login.styled";
import * as yup from 'yup';
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";
import { Error } from "../../components/form-error/form-error";
import {useDispatch, useSelector} from "react-redux"
import { authenticated } from "../../store/user/user.selector";
import userSlice from "../../store/user/user.slice";

export default function Login () {
    const [error, setError] = useState('')
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const dispatch = useDispatch()

    const userAuthenticated = useSelector(authenticated)

    const handleChanges = useCallback(( { target }: any ) => {
        setData(prevData => ({
            ...prevData,
            [target.name]: target.value
        }))
    }, [setData])

    const handleSend = useCallback(async () => {
        try {
            const schema = yup.object().shape({
                email: yup.string().required().email(),
                password: yup.string().required(),
            })

            await schema.validate(data);

            setError('')

            dispatch(userSlice.actions.authenticated(true));
        } catch (error: any) {
            setError(error.errors[0])
        }

    }, [data])

    useEffect(() => {
        console.log(userAuthenticated)

    }, [userAuthenticated])

    return (
        <Wrapper container justifyContent="center" alignContent="center">
            <Grid item={true} xs={2} >
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
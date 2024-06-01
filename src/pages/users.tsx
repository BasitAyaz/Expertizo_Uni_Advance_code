import { useEffect, useState } from "react"
import { getData } from "../config/firebasemethods"
import BAGrid from "../components/BAGrid"

export default function Users() {
    const [usersList, setUsersList] = useState<any>([])

    const get = async () => {
        getData('users')
            .then((res: any) => {
                console.log(res)
                setUsersList([...res])
            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        get()
    }, [])
    return <>
        <BAGrid
            datasource={usersList}
            cols={[
                {
                    key: 'email',
                    label: 'Email'
                },
                {
                    key: 'password',
                    label: 'Password'
                },
            ]} />
    </>
}
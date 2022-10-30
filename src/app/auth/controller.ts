import bcrypt from 'bcrypt'
import store from '../../store'
import auth from './auth'
import { IUser } from './../../store/model'
import error from './../../utils/error'
import { Table } from '../../store/tables'

const TABLE: Table = Table.Users;

interface AuthProps {
    email: string
    password: string
}

async function login({ email, password }: AuthProps) {
    if (!email || !password) throw error('parametros invalidos', 401)
    const [user] = await store.query<IUser[]>(TABLE, { email, enabled: true })
    const passwordCompare = await bcrypt.compare(password, user?.password || '')
    if (!passwordCompare) throw error('usuario invalido', 401)
    //@ts-ignore
    return { ...user?._doc, token: auth.signIn(user?._doc) }
}

export default {
    login,
}

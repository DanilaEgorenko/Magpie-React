import { User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import accountInfo from '../../services/accountInfo'
import AccountPic from '../AccountPic/AccountPic'
import AccountTheme from '../AccountTheme/AccountTheme'
import AccountName from '../AccountName/AccountName'
import './AccountProfile.css'

const UserProfile: React.FC = () => {
    const [user, setUser] = useState<User>({} as User)
    useEffect(() => { accountInfo.then(res => setUser(res)) }, [])

    return (
        <div className='user'>
            <AccountPic photoURL={user.photoURL}></AccountPic>
            <AccountName name={user.displayName}></AccountName>
            <button className='red-button' id='sign-out'>Выйти</button>
            <p className='user__profile-id'>ID: </p>
            <AccountTheme></AccountTheme>
            <button className='user__delete-button red-button'>Удалить профиль</button>
        </div>
    )
}

export default UserProfile
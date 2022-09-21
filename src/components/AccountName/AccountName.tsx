import { useState } from 'react';
import './AccountName.css'

interface AccountNameProps {
    name: string | null;
}

const AccountName = ({ name }: AccountNameProps) => {
    const [isEditing, setIsEditing] = useState(false)
    const [inputVal, setInputVal] = useState(name)

    const editName = () => {
        alert(inputVal)
    }

    return (
        <>
            <div
                className='user__name'
                onClick={() => setIsEditing(prev => prev = !prev)}>
                {name}
            </div>
            <input
                className={`user__input-name ${isEditing ? 'active' : ''}`}
                value={inputVal || ''}
                onChange={(e) => setInputVal(e.target.value)}
            />
            <button
                className={`user__edit-name ${isEditing ? 'active' : ''}`}
                onClick={editName}>
                Изменить
            </button>
        </>
    )
}

export default AccountName
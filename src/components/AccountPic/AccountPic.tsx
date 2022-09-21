import './AccountPic.css'
import accountInfo from '../../services/accountInfo'

interface AccountPicProps {
    photoURL: string | null
}

const AccountPic = ({ photoURL }: AccountPicProps) => {
    const handlerAccountPic = (e: any) => {
        // FIX: any
        const file = e.target.files[0]
        // if (file.size > 5 * 1024 * 1024) {
        //     alert('Изображение не должно превышать 5 МБ!')
        //     return
        // }
        accountInfo.then(res => {
            const filePath = res.uid + '/' + file.name
            console.log(filePath)
            // return firebase.storage().ref(filePath).put(file).then(function (fileSnapshot) {
            //     return fileSnapshot.ref.getDownloadURL().then((url) => {
            //         firebase.auth().currentUser.updateProfile({
            //             photoURL: url
            //         }).then(function () {
            //             firebase.database().ref('user/' + idProperty).update({
            //                 photoURL: url
            //             });
            //             alert('Фото успешно обновлено! Войдите в аккаунт заново!')
            //             signOut()
            //             //    window.location.href = '/sign'
            //         }).catch(function () {
            //             alert('Ошибка! Фото не обновлено')
            //         })
            //     })
            // })
        })
    }
    return (
        <div className='user__pic' style={{
            backgroundImage: `url(${photoURL})`
        }}>
            <input className="user__pic-input" type="file" accept="image/*" onChange={handlerAccountPic} />
        </div>
    )
}

export default AccountPic
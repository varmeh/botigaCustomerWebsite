import './styles.scss'
import { TextField  } from '@material-ui/core';
export const EditProfile = () => {
    return (
        <div className='editProfile' > 
            <form>
            <TextField className='input' label='First Name'   value='Ayush' variant='outlined'/>
            <TextField className='input' label='Last Name'  value='Thakur' autoFocus variant='outlined'/>
            <TextField className='input' label='Email'  value='ayushthakur3001@gmail.com' autoFocus variant='outlined'/>
            <button className='updateBtn' >Update Profile</button>
            </form>
        </div>
    ) 
}


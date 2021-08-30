import './style.scss'
export const AddressItem = ({
    name = "",
    address = "",
}) => (
    
        <div className='addressItem'>
            <div className='content'>
            <span> {name} </span>
            <p className='address' >{address} </p>
            </div>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    
)



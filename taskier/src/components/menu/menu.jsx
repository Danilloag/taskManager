import './menu.css'
import { useState } from 'react'

export default function Menu() {

    // const [ menu, setMenu ] = useState(true)

    return (
            <div className="menu-container"> 
                <div className='butt-group'>
                    <button className="butt" title="Listed">Move to Listed</button>
                    <button className="butt" title="Started">Move to Started</button>
                    <button className="butt" title="Ended">Move to Ended</button>
                    <button className="butt">Edit Task</button>
                </div>
            </div>
    )
}
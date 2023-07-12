import './breadcrumb.css'


import { useLocation } from "react-router-dom"
import { Link } from 'react-router-dom'

export default function Breadcrumb() {

    const loc = useLocation()

    const crumb = loc.pathname.split("/")

    return (
        <>
            <p className='breadcrumbs'>
                <Link className='bread-link' to={`/${crumb[1]}`}>{crumb[1]}</Link> {crumb[2] ? `${'>>'}` : ''} <Link className='bread-link' to={`/${crumb[2]}`}>{crumb[2]}</Link>
            </p>
        </>
    )
}
import React from 'react'
import { CircularProgress } from '@mui/material'
export default function Loader() {
    return (
        <div className='spinner-div' style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }}>
            <CircularProgress />
        </div>
    )
}

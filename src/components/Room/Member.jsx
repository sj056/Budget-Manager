import React from 'react'
import user from "../../images/user.png";
import "../../css/Room.css"
export default function Member() {

    const data = [
        {
            id: 1,
            Name: "riya",
            email: "verma@gmail",
        },
        {
            id: 2,
            Name: "shruti",
            email: "verma@gmail",
        },
        {
            id: 3,
            Name: "shruti",
            email: "verma@gmail",
        },
        {
            id: 4,
            Name: "shruti",
            email: "verma@gmail",
        },
        
    ]
    return (
        <>
            <h1>Members</h1>
                { data.map((data) => (
                <div className='member_div'>
                     <img src={user} alt='icon' />
                     <div>
                    <h6>{data.Name}</h6>
                    <h6>{data.email}</h6>
                    </div>
                </div>
                ))}
        </>
    )
}

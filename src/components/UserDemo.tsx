import React from 'react';
type usersProps = {
    user: {
        id: number;
        name: string;
        email: string;
        age: number;
    }[]
}
const UserDemo = ({user}:usersProps) => {
    return (
        <div>
            {
                user.map((user)=>{
                   return <div key={user.id}>
                        <h1>{user.name}</h1>
                        <h1>{user.id}</h1>
                        <h1>{user.email}</h1>
                        <h1>{user.age}</h1>
                    </div>
                })
            }
        </div>
    );
};

export default UserDemo;
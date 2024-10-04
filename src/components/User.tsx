// import React from 'react';

// const User = (props:{name:string,age:number}) => {
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <p>{props.age}</p>
//         </div>
//     );
// };

// export default User;

// another way
type userProps = {name:string,age:number}

const User = (props:userProps) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.age}</p>
        </div>
    );
};

export default User;
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
// type userProps = {name:string,age:number}

// const User = (props:userProps) => {
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <p>{props.age}</p>
//         </div>
//     );
// };

// export default User;
type userProps = {name:string,age:number,language:string,isStudent:string}

const User = ({name,age,language,isStudent}:userProps) => {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{language}</h2>
            <h2>{isStudent}</h2>
            <p>{age}</p>
        </div>
    );
};

export default User;
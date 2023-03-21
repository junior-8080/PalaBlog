import React from 'react';

const AuthConatiner = ({children}) => {
    return (
        <div style={{backgroundImage:'url(/assets/img/auth-bg.jpg)'}}>
            {
                children
            }
        </div>
    );
}

export default AuthConatiner;

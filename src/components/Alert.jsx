import React from 'react'

const Alert = (props) => {
    const capitalized = (word) =>{
        const str = word.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    } 
    return (
        <div style={{height: '80px'}}>
           {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalized(props.alert.type)}</strong> : {props.alert.message}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>}
        </div>
    )
}

export default Alert
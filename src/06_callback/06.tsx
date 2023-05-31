import React, {MouseEvent} from 'react';


export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }

    return <div> Aleks
        <div><button name="delete" onClick={deleteUser}>delete</button></div>
        <div><button name="save" onClick={deleteUser}>save</button></div>
    </div>
}
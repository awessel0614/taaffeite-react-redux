import { useState } from 'react';
//Step 1:
import { useDispatch } from 'react-redux';


function ListName() {
    const [newListName, setNewListName] = useState('');
    // Step 2: This is most commonly missed
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('New name:', newListName);
        //Step 3: Dispatch an action
        const action = { type:'SET_LIST_NAME', payload: newListName };
        dispatch(action);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={newListName} onChange={(e) => setNewListName(e.target.value)} />
            <button type="submit">Save</button>
        </form>
    )
}


export default ListName;
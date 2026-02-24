import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
    pastes: localStorage.getItem('pastes') ? JSON.parse(localStorage.getItem('pastes')) : []
}
const pasteSlice = createSlice({
    name: 'paste',
    initialState,
    reducers: {
        addPaste: (state, action) => {
            const paste = action.payload;
            localStorage.setItem('pastes', JSON.stringify([...state.pastes, paste]));
            toast.success("Paste created Successfully");
            return { pastes: [...state.pastes, paste] };
        },
        updatePaste: (state, action) => {
            const paste = action.payload;
            const index = state.pastes.findIndex(item => {
                return item.id === paste.id
            });
            const updatedState = {
                ...state, pastes: state.pastes.map((ele, ind) => {
                    if (ind === index) {
                        return paste;
                    }
                    return ele;
                })
            }
            if (index >= 0) {

                localStorage.setItem('pastes', JSON.stringify(updatedState.pastes));
                toast.success("Paste updated");
                return updatedState;
            }
            else {
                toast.error('Paste not found for given pasteId');
                return state;
            }


        },
        resetPastes: (state) => {
            const updatedState = { ...state, pastes: [] };
            localStorage.setItem('pastes', JSON.stringify(updatedState.pastes));
            return updatedState;
        },
        removePaste: (state, action) => {
            const removeId = action.payload;
            const index = state.pastes.findIndex(ele => {
                return ele.id === removeId;
            })
            const updatedState = {
                ...state, pastes: state.pastes.filter((ele, ind) => {
                    return ind !== index;
                })
            }
            localStorage.setItem('pastes', JSON.stringify(updatedState.pastes));
            toast.success("Paste deleted successfully");
            return updatedState;
        }
    }

}
);
const { addPaste, updatePaste, resetPastes, removePaste } = pasteSlice.actions;
export default pasteSlice.reducer;
export { addPaste, updatePaste, resetPastes, removePaste };
import {createSlice} from '@reduxjs/toolkit'

const nameSlice = createSlice(
    {
        name: "list",
        initialState: {
            names:["Prasad", "Shyam"]
        },
        reducers: {
            addName(state, actions) {
                state.names.push(actions.payload);
            },
            removeName(state, actions) {
                state.names = state.names.filter((name)=> {console.log(name, actions.payload); return name !== actions.payload});
                console.log(state.names)
            }
        }
    }

)
export const nameSiceActions = nameSlice.actions;
export default nameSlice;

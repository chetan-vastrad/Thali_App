import {createSlice} from "@reduxjs/toolkit"
const curdSlice=createSlice({
name:"curd",
initialState:{item:[],rate:10,counter:1},
reducers:{
    addCurd(state,action){
        state.counter++
        const newItem=action.payload;
        state.item.push({
            id:newItem.id,
            rate:newItem.rate,
            counter:newItem.counter
        })
    }

    
}
})
export const curdAction=curdSlice.actions;
export default curdSlice.reducer

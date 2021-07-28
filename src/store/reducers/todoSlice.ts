import { createSlice ,PayloadAction } from '@reduxjs/toolkit'
export interface listState {
  value: any,
  loading:boolean
}

const initialState: listState = {
  value: [],
  loading:false
}

export const todoSlice=createSlice({
  name: 'todo',
  initialState,
   reducers: {
    add: (state,action: PayloadAction<any>) => {
        console.log('reducers')
        console.log(action.payload)
        state.value=[...state.value,action.payload]
        state.loading=true
    }
}
})
export default todoSlice.reducer 
export const { add } = todoSlice.actions

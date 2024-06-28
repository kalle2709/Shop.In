import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
    buttonSelected:'home',
    pageItemSelected: false,
    itemSelected:'',
    itemName:'',
    itemCost:'',
    image1:'',
    image2:'',

}

const websiteSlice = createSlice({
    name:'website',
    initialState,
    reducers:{
        setSelectedButton(state,action: PayloadAction<string>){
            state.buttonSelected = action.payload
        },
        setPageItemSelected(state, action: PayloadAction<string>){
            state.pageItemSelected = true;
            state.itemSelected = action.payload;
        },
        setItemDetails(state, action: PayloadAction<{ name: string; cost: string; image1: any, image2:any }>) {
            const { name, cost, image1,image2 } = action.payload;
            state.itemName = name;
            state.itemCost = cost;
            state.image1 = image1;
            state.image2 = image2;
            console.log(state.itemName)
          },
    }

})


export const{setSelectedButton, setPageItemSelected,setItemDetails} = websiteSlice.actions;
export default websiteSlice.reducer

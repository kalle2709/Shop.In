import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CartItem {
    name: string;
    cost: string;
    image1: any;
    quantity: number;
}

interface WebsiteState {
    buttonSelected: string;
    pageItemSelected: boolean;
    itemSelected: string;
    itemName: string;
    itemCost: string;
    image1: string;
    image2: string;
    addCartBtnClick: boolean;
    items: CartItem[];
    itemQuantity:number;
    categorySelected:string;
}

const initialState:WebsiteState = {
    buttonSelected: localStorage.getItem('buttonSelected') || 'home',
    pageItemSelected: false,
    itemSelected:'',
    itemName:'',
    itemCost:'',
    image1:'',
    image2:'',
    addCartBtnClick:false,
    items:[],
    itemQuantity:1,
    categorySelected:localStorage.getItem('categorySelected') || 'all',

}

const websiteSlice = createSlice({
    name:'website',
    initialState,
    reducers:{
        setSelectedButton(state,action: PayloadAction<string>){
            state.buttonSelected = action.payload;
            localStorage.setItem('buttonSelected', action.payload);
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
          },
        setAddCartBtnClick(state,action: PayloadAction<boolean>){
            state.addCartBtnClick =  action.payload;

        },
        setCartItemList(state,action: PayloadAction<CartItem>){
            const existingItem = state.items.find(item => item.name === action.payload.name);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
                state.itemQuantity = existingItem.quantity;
            } else {
                state.items.push(action.payload);
            }
        },
        setItemQuantity(state,action:PayloadAction<number>){
            state.itemQuantity=action.payload;
        },
        setRemoveCartItem(state, action: PayloadAction<number>) {
            state.items.splice(action.payload, 1);
        },
        setCategorySelected(state,action: PayloadAction<string>){
            state.categorySelected = action.payload;
            localStorage.setItem('categorySelected',action.payload)
        }
    }

})


export const{setSelectedButton, setPageItemSelected,
    setItemDetails,setAddCartBtnClick,setCartItemList,
    setItemQuantity,
    setRemoveCartItem,setCategorySelected} = websiteSlice.actions;
export default websiteSlice.reducer

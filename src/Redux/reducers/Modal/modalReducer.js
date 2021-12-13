import { CARTMODAL } from "../../actions/types/types"
import cartModal from "./CartModal/cartModal"

const initialState={
    cartModal:false
}


const modalReducer=(state=initialState, action)=>{

    switch(action.type){

        case CARTMODAL:{
            return cartModal(state.cartModal)
        }
        default:
            return state
        

    }
}


export default modalReducer
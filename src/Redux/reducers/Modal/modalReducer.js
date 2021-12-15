import { CARTMODAL, SIDEBARMODAL } from "../../actions/types/types"
import cartModal from "./CartModal/cartModal"
import SidebarModal from "./SidebarModal/SidebarModal"

const initialState={
    cartModal:false,
    sidebarModal:false
}


const modalReducer=(state=initialState, action)=>{

    switch(action.type){

        case CARTMODAL:{
            return cartModal(state)
        }
        case SIDEBARMODAL:{
            return SidebarModal(state)
        }
        default:
            return state
        

    }
}


export default modalReducer
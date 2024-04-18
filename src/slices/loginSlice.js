import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { loginPost } from "../api/memberApi";
import { getCookie, removeCookie, setCookie } from "../util/cookieUtil";

const initState = {
    email:''
}

const loadMemberCookie = () => {
    const memberInfo = getCookie('member')

    return memberInfo
}

export const loginPostAsync = createAsyncThunk('loginPostAsync',(param)=> loginPost(param))

const loginSlice = createSlice({
    name: 'loginslice',
    initialState: loadMemberCookie() || initState,
    reducers: {
        login: (state,action) => {
            console.log("login....", action)
            
            setCookie("member",JSON.stringify(action.payload),1)

            return action.payload

            
        },
        logout:()=>{
            console.log("logout....")
            removeCookie('member')
            return {...initState}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginPostAsync.fulfilled,(state,action) => {
            console.log("fulfilled")

            const payload = action.payload
            console.log(payload)
            if(!payload.error){
                setCookie("member",JSON.stringify(payload),1)
            }

            return payload
        })
        .addCase(loginPostAsync.pending,(state,action) => {
            console.log("pending")
        })
        .addCase(loginPostAsync.rejected,(state,action) => {
            console.log("rejected")
        })
    }
})

export const {login,logout} = loginSlice.actions

export default loginSlice.reducer
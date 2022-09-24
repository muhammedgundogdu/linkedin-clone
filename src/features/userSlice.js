import { createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
  
  
 initialState:{
    user:null,
 },
 name: 'user',
  reducers: {
    //Reducers global state'in güncellendiği, 
    //kontrol edildiği ve güncellenmiş state'i return eden klasik bir javascript function'udur. 

    //Bir action genellikle type ve payload olmak üzere iki adet property'den oluşur. 
    //type action'un belirteçi hangi işlemin yapıldığını belirtir.
    //payload ise gönderilecek veriyi içeren property'dir.
    
    login: (state,action) => {
      state.user=action.payload
      
      //console.log("buraya geliyomu")
      
    },
    logout: (state) => {
      state.user = null;  
      //console.log("buraya geliyomu")    
    },
    
  },
  
});
export const { login,logout } = userSlice.actions;
//selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;


// import {createSlice} from '@reduxjs/toolkit'
// const userSlice = createSlice({
  
//   name: 'auth',
//   initialState:{
//     isUserLoggedIn: false,
//     userDetailds:{}
//   },
  
//   reducers: {

//     login: (state) => {
//       state.auth.isUserLoggedIn=true;
//     },

//     logout: (state) => {
//       state.auth.isUserLoggedIn=false;      
//     },
//   },
  
// });


// export const { login,logout } = userSlice.actions;
// //selectors
// export const selectUser = (state) => state.user

// export default userSlice.reducer;

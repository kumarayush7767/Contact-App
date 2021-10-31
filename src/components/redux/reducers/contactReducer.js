const initialState = [
  {
      id:0,
      name: "Ayush Kumar",
      email: "kumarayush7767@gmail.com",
      number: 8696287119,
  },
  {
    id:1,
    name: "Saurabh Kumar",
    email: "patil@gmail.com",
    number: 7983980962, 
  },
];

const contactReducer = (state = initialState, action) =>{
     switch(action.type){
         default:
             return state;
     }
};

export default contactReducer;
const reducer = (state, action) => {
    if (action.type === "HOME_UPDATE") {
      return {
        ...state,
        info:action.payload.info,
        name: action.payload.name,
        image: action.payload.image,
        des:action.payload.des,
      };
    }
  
    if (action.type === "ABOUT_UPDATE") {
      return {
        ...state,
        info:action.payload.info,
        name: action.payload.name,
        image: action.payload.image,
        des:action.payload.des,
      };
      
    }
  
    if (action.type === "GET_COURSES") {
      return {
        ...state,
        courses: action.payload,
      };
    }

    if (action.type === "GET_BLOGS") {
      return {
        ...state,
        blogs: action.payload,
      };
    }
  
    return state;
  };
  
  export default reducer;
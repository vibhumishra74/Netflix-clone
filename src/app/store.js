import { configureStore } from "@reduxjs/toolkit";
import userreducer from "../features/userslice";

export default configureStore({
  reducer: {
    user: userreducer,
  },
});

// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "../features/userslice";

// export default configureStore({
//   reducer: {
//     counter: userReducer,
//   },
// });

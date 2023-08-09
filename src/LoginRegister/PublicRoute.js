// import React from "react";
// import { Route, Navigate } from "react-router-dom";
// import { isLogin } from './useAuth'

// const PublicRoute = ({ children, restricted, ...rest }) => {
//     return (
//         <Route
//             {...rest}
//             element={
//                 isLogin() && restricted ? <Navigate to="/dashboard" /> : children
//             }
//         />
//     );
// };

// export default PublicRoute;
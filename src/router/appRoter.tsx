import { Route, Routes } from "react-router-dom";
//import { routeConfig } from "config/routeConfig/routeConfig"; // ----второй вариант
import { RoutePath } from "config/routeConfig/routeConfig";
import { FC } from 'react';


const AppRouter: FC = () => {
	return (
		<Routes>
			{RoutePath.map(({ path, element }) => (
				<Route
					key={path}
					path={path}
					element={(element)}
				/>
			))}

		</Routes>

	);
};

// второй вариант -----------------------------------
// const AppRouter: FC = () => {
// 	return (
// 		<Routes>
// 			{Object.values(routeConfig).map((route) => (
// 				<Route
// 					key={route.path}
// 					path={route.path}
// 					element={(route.element)}
// 				/>
// 			))}

// 		</Routes>

// 	);
// };





// (property) element: JSX.Element
// const AppRouter = () => {
// 	return (
// 		<Routes>
			
// 			<Route path={'/'} element={<MainPage />}/>
		

// 		</Routes>

// 	);
// };



export default AppRouter;

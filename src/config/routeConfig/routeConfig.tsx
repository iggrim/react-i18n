//import { RouteProps } from "react-router-dom"; // ----второй вариант
import { MainPage } from "pages/mainPage";
import { AboutPage } from "pages/aboutPage";
import { NotFoundPage } from 'pages/NotFoundPage';


export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	NOT_FOUND = 'not_found',
}

export interface IRoute {
	path: string;
	element: React.ReactNode;
}

export const RoutePath: IRoute[] = [
	{ path: AppRoutes.MAIN, element: <MainPage />  },
	{ path: AppRoutes.ABOUT, element: <AboutPage />  },
	{ path: AppRoutes.NOT_FOUND, element: <NotFoundPage />  },
];

// второй вариант-------------------------------------
// обьект
// const RoutePath: Record<AppRoutes, string> = {
// 	[AppRoutes.MAIN]: '/',
// 	[AppRoutes.ABOUT]: '/about',
//  последний
//	[AppRoutes.NOT_FOUND]: ' * ',

// }

// обьект
// export const routeConfig: Record<AppRoutes, RouteProps> = {
// 	[AppRoutes.MAIN]: {
// 		path: RoutePath.main,
// 		element: <MainPage />
// 	},
// 	[AppRoutes.ABOUT]: {
// 		path: RoutePath.about,
// 		element: <AboutPage />
// 	},
//	[AppRoutes.NOT_FOUND]: {
//		path: RoutePath.not_found,
//		element: <NotFoundPage />,
//    },
// }

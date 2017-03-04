import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { ChartRoutes } from './charts/index';
import { BlankPageRoutes } from './blank-page/index';
import { TableRoutes } from './tables/index';
import { ReviewRoutes } from './review-module/index';
import { CreateNewRoutes } from './create-new-mod/index';


import { FormRoutes } from './forms/index';
import { GridRoutes } from './grid/index';
import { BSComponentRoutes } from './bs-component/index';
import { BSElementRoutes } from './bs-element/index';

import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
	    	...HomeRoutes,
	    	...ChartRoutes,
	    	...BSComponentRoutes,
            ...TableRoutes,
            ...ReviewRoutes,
            ...CreateNewRoutes,
            
	    	...BlankPageRoutes,
            ...FormRoutes,
            ...GridRoutes,
            ...BSElementRoutes
    	]
  	}
];

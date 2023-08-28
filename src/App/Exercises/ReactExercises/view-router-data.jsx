import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { Cwiczenie1MetaData } from './Cwiczenie1/router-data';
import { Cwiczenie2MetaData } from './Cwiczenie2/router-data';
import { routerMetaData as IfStatementsMetaData } from './IfStatements/router-data';
import { routerMetaData as IfStatementsMoreOrLessMetaData } from './IfStatementsMoreOrLess/router-data';
import { routerMetaData as WhatNumberAmI } from './WhatNumberAmI/router-data';
import { routerMetaData as LocalDevAndFetchMetaData } from './LocalDevAndFetch/router-data';
import { routerMetaData as ToDoWithServerMetaData } from './ToDoWithServer/router-data';
import { reactUseRef } from './ReactUseRef/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  Cwiczenie1MetaData,
  Cwiczenie2MetaData,
  IfStatementsMetaData,
  IfStatementsMoreOrLessMetaData,
  WhatNumberAmI,
  LocalDevAndFetchMetaData,
  ToDoWithServerMetaData,
  reactUseRef,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);

import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as Boolean } from './Boolean/router-data';
import { blockRouterMetaData as IfSwitch } from './IfSwitch/router-data';
import { blockRouterMetaData as Numbers } from './Numbers/router-data';
import { blockRouterMetaData as JsNumbersTraining } from './JsNumbersTraining/router-data';
import { blockRouterMetaData as EmptyValuesAndComments } from './EmptyValuesAndComments/router-data';
import { blockRouterMetaData as JsStringTraining } from './JsStringTraining/router-data';
import { blockRouterMetaData as Arrays } from './Arrays/router-data';
import { blockRouterMetaData as JsArrayMethodsExercise } from './JsArrayMethodsExercise/router-data';
import { blockRouterMetaData as Objects } from './Objects/router-data';
import { blockRouterMetaData as JsFunctionsBasics } from './JsFunctionsBasics/router-data';
import { blockRouterMetaData as ExerciseJsFunctionsExtended } from './ExerciseJsFunctionsExtended/router-data';
import { dateAndTimeMetaData } from './DateAndTime/router-data';
import { animationsJSMetaData } from './AnimationsJS/router-data';
import { hitTheMoleMetaData } from './HitTheMole/router-data';
import { MemoryGameMetaData } from './MemoryGame/router-data';
import { blockRouterMetaData as oopGameMetaData } from './OOP/router-data';
import { blockRouterMetaData as tryCatchGameMetaData } from './TryCatchPrototype/router-data';
import { blockRouterMetaData as tryCatchExerciseMetaData } from './TryCatchExercise/router-data';
import { blockRouterMetaData as JSONXMLStorageMetaData } from './JSONXML_Storage/router-data';
import { blockRouterMetaData as SavedInputMetaData } from './SavedInput/router-data';
import { blockRouterMetaData as PromisesMetaData } from './Promises/router-data';
import { blockRouterMetaData as UseEffectAndPromiseMetaData } from './UseEffectAndPromise/router-data';
import { blockRouterMetaData as PromiseMethodsTrainingMetaData } from './PromiseMethodsTraining/router-data';
import { blockRouterMetaData as dogAPIMetaData } from './DogAPI/router-data';
import { blockRouterMetaData as DOMuseRefMetaData } from './DOMuseRef/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  Boolean,
  IfSwitch,
  Numbers,
  JsNumbersTraining,
  EmptyValuesAndComments,
  JsStringTraining,
  Arrays,
  JsArrayMethodsExercise,
  Objects,
  JsFunctionsBasics,
  ExerciseJsFunctionsExtended,
  dateAndTimeMetaData,
  animationsJSMetaData,
  hitTheMoleMetaData,
  MemoryGameMetaData,
  oopGameMetaData,
  tryCatchGameMetaData,
  tryCatchExerciseMetaData,
  JSONXMLStorageMetaData,
  SavedInputMetaData,
  PromisesMetaData,
  UseEffectAndPromiseMetaData,
  PromiseMethodsTrainingMetaData,
  dogAPIMetaData,
  DOMuseRefMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);

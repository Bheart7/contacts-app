import {DEV_BACKEND_URL, PROD_BACKEND_URL} from '@env';

const devEnviromentalVariables = {
    BACKEND_URL: DEV_BACKEND_URL,
};

const prodEnviromentalVariables = {
    BACKEND_URL: PROD_BACKEND_URL,
};

export default __DEV__ ? devEnviromentalVariables: prodEnviromentalVariables;
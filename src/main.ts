import { WebOnionSDK } from 'web-onion/dist/web-onion';

const WO = new WebOnionSDK();

$(document).ready(() => {
    WO.dbl_click_focuses_input = true;
    WO.initialize();
}); 

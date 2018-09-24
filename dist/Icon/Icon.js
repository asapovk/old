"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.svgIconPath = {
    'add': 'M107.534884,59.4882507 C108.7752,59.4882507 109.808781,59.9268886 110.635659,60.8041775 C111.462536,61.6814665 111.917312,62.74673 112,64 C111.917312,65.25327 111.462536,66.3185335 110.635659,67.1958225 C109.808781,68.0731114 108.7752,68.5117493 107.534884,68.5117493 L67.9689922,68.5117493 L67.9689922,107.488251 C67.9689922,108.825072 67.5348881,109.911223 66.6666667,110.746736 C65.7984453,111.58225 64.7441922,112 63.503876,112 C62.2635597,112 61.2093067,111.58225 60.3410853,110.746736 C59.4728639,109.911223 59.0387597,108.825072 59.0387597,107.488251 L59.0387597,68.5117493 L20.4651163,68.5117493 C19.1421122,68.5117493 18.0671876,68.0731114 17.2403101,67.1958225 C16.4134326,66.3185335 16,65.25327 16,64 C16,62.74673 16.4134326,61.6814665 17.2403101,60.8041775 C18.0671876,59.9268886 19.1421122,59.4882507 20.4651163,59.4882507 L59.0387597,59.4882507 L59.0387597,20.5117493 C59.0387597,19.2584794 59.4728639,18.2141034 60.3410853,17.3785901 C61.2093067,16.5430768 62.2635597,16.0835513 63.503876,16 C64.7441922,16.0835513 65.7984453,16.5430768 66.6666667,17.3785901 C67.5348881,18.2141034 67.9689922,19.2584794 67.9689922,20.5117493 L67.9689922,59.4882507 L107.534884,59.4882507 Z',
    'more': 'M24,72 C19.581722,72 16,68.418278 16,64 C16,59.581722 19.581722,56 24,56 C28.418278,56 32,59.581722 32,64 C32,68.418278 28.418278,72 24,72 Z M64,72 C59.581722,72 56,68.418278 56,64 C56,59.581722 59.581722,56 64,56 C68.418278,56 72,59.581722 72,64 C72,68.418278 68.418278,72 64,72 Z M104,72 C99.581722,72 96,68.418278 96,64 C96,59.581722 99.581722,56 104,56 C108.418278,56 112,59.581722 112,64 C112,68.418278 108.418278,72 104,72 Z',
    'pin': 'M16,111.999599 L39.7047644,73.8061797 C41.6961515,76.4332756 43.9253037,79.030338 46.4472824,81.5523167 C48.9400619,84.0492675 51.5371243,86.3009448 54.1800712,88.3048459 L16,111.999599 Z M109.808765,49.5866747 C107.290123,52.1086534 103.014522,52.3564296 98.2625571,50.7404611 L85.5633974,63.433781 C91.947182,73.8028426 93.4655417,83.8991001 88.4833198,88.8879961 C86.4660705,90.9052454 83.6145577,91.8571401 80.2416302,91.8571401 C74.0363779,91.8571401 66.078338,88.6110206 58.3780854,82.7911981 C58.2053929,82.6635558 58.0360374,82.5267366 57.8658476,82.3932544 C57.3185707,81.9727856 56.7712938,81.5364657 56.2240169,81.0867977 C56.0087769,80.907431 55.7935369,80.7280643 55.5782969,80.5453606 C55.0568822,80.1057037 54.5421416,79.6526986 54.027401,79.1896824 C53.8255092,79.0103157 53.6227832,78.8317833 53.4208914,78.6457425 C52.72011,78.0033596 52.0260028,77.3417886 51.3419067,76.6576925 C50.5602017,75.8759876 49.8101988,75.0834372 49.0835552,74.2817099 C48.6338872,73.7869916 48.2100813,73.288102 47.7829384,72.7867096 C47.5485103,72.5122369 47.3074081,72.2419355 47.0763171,71.96496 C46.5223661,71.2967149 45.9942773,70.6259671 45.4795367,69.9510478 C45.4144641,69.8667872 45.3493916,69.7850294 45.2868218,69.6999345 C36.2567532,57.7858168 33.3693671,45.2560126 39.1116031,39.5137766 C41.1288523,37.4965273 43.9837022,36.5412956 47.3532926,36.5412956 C52.3163265,36.5412956 58.3939364,38.6202803 64.5733265,42.4236878 L77.2624751,29.7370421 C75.6465066,24.9859112 75.8942828,20.7103105 78.4195986,18.1874975 C83.1482044,13.4588917 94.0103158,16.6491155 102.678314,25.3212851 C111.350484,33.9901176 114.544044,44.8513948 109.808765,49.5866747 Z',
    'close': 'M98.7158808,92.2248834 C99.6067592,93.1168764 100.034088,94.175646 99.9978787,95.4012241 C99.9616698,96.6268023 99.5231765,97.7199624 98.6823858,98.6807374 C97.7228113,99.52258 96.631017,99.9616218 95.4069703,99.997876 C94.1829235,100.03413 93.1254767,99.6062673 92.2345983,98.7142743 L63.8157192,70.2598417 L35.8201796,98.2904051 C34.8599848,99.2518012 33.7680354,99.7207309 32.5442988,99.6972084 C31.3205622,99.6736858 30.2632705,99.215935 29.3723921,98.323942 C28.4815137,97.4319491 28.0243348,96.3733347 28.0008416,95.1480671 C27.9773485,93.9227995 28.4456923,92.8294841 29.4058871,91.868088 L57.4014267,63.8375246 L29.6952467,36.0966827 C28.7449764,35.1452236 28.2879525,34.0567213 28.3241614,32.8311432 C28.3603703,31.605565 28.8285591,30.5421375 29.7287417,29.6408287 C30.6289243,28.7395199 31.6910231,28.2707455 32.9150698,28.2344913 C34.1391166,28.1982371 35.2262589,28.6558327 36.1765292,29.6072918 L63.8827092,57.3481337 L91.8782488,29.3175703 C92.7784314,28.4162615 93.8403751,27.9773749 95.0641117,28.0008974 C96.2878483,28.02442 97.3751456,28.4521277 98.3260362,29.2840333 C99.1569025,30.2361135 99.5840757,31.3247711 99.6075689,32.5500387 C99.631062,33.7753063 99.1927239,34.8385785 98.2925412,35.7398873 L70.2970016,63.7704508 L98.7158808,92.2248834 Z',
    'search': 'M118.75,112.25 L118.625,112.25 C119.541671,113.250005 120,114.333327 120,115.5 C120,116.666673 119.541671,117.708329 118.625,118.625 C117.708329,119.541671 116.666673,120 115.5,120 C114.333327,120 113.291671,119.541671 112.375,118.625 L86.625,93 C82.4583125,96.4166838 77.7708594,99.1041569 72.5625,101.0625 C67.3541406,103.020843 61.8333625,104 56,104 C42.4165987,103.666665 31.1042119,98.9792119 22.0625,89.9375 C13.0207881,80.8957881 8.333335,69.5834013 8,56 C8.333335,42.4165987 13.0207881,31.1042119 22.0625,22.0625 C31.1042119,13.0207881 42.4165987,8.333335 56,8 C69.5834013,8.333335 80.8957881,13.0207881 89.9375,22.0625 C98.9792119,31.1042119 103.666665,42.4165987 104,56 C104,61.8333625 103.020843,67.3541406 101.0625,72.5625 C99.1041569,77.7708594 96.4166838,82.4583125 93,86.625 L118.75,112.25 Z M71.125,91.875 C75.79169,89.9583238 79.9374819,87.1875181 83.5625,83.5625 C87.1875181,79.9374819 89.99999,75.7708569 92,71.0625 C94.00001,66.3541431 95,61.33336 95,56 C95,50.66664 94.00001,45.6458569 92,40.9375 C89.99999,36.2291431 87.1875181,32.0625181 83.5625,28.4375 C79.9374819,24.8124819 75.7708569,22.00001 71.0625,20 C66.3541431,17.99999 61.33336,17 56,17 C50.66664,17 45.6458569,17.99999 40.9375,20 C36.2291431,22.00001 32.0625181,24.8124819 28.4375,28.4375 C24.8124819,32.0625181 22.00001,36.2291431 20,40.9375 C17.99999,45.6458569 17,50.66664 17,56 C17,61.33336 17.99999,66.3541431 20,71.0625 C22.00001,75.7708569 24.8124819,79.9374819 28.4375,83.5625 C32.0625181,87.1875181 36.2291431,89.99999 40.9375,92 C45.6458569,94.00001 50.66664,95 56,95 C61.33336,95 66.3749763,93.9583437 71.125,91.875',
    'right': 'M37.5434484,112 C35.7909948,112 34.3723632,111.291035 33.287511,109.873083 C32.286109,108.705358 31.8688644,107.391687 32.0357647,105.93203 C32.202665,104.472374 32.8702564,103.24211 34.0385588,102.241203 L81.855267,63.8315792 L34.288908,25.6721809 C33.1206056,24.6712737 32.4530143,23.4410103 32.286114,21.9813539 C32.1192136,20.5216975 32.515596,19.2080264 33.4752729,18.0403013 C34.4349499,16.8725762 35.6449592,16.2053147 37.1053372,16.0384968 C38.5657151,15.8716789 39.9217601,16.2470135 41.1735126,17.1645118 L93.9972059,59.5777447 C95.3324087,60.6620609 96,62.0799915 96,63.8315792 C96,65.5831669 95.3324087,67.0010976 93.9972059,68.0854138 L40.9231633,110.748872 C39.8383111,111.582962 38.7117507,112 37.5434484,112 Z',
    'left': 'M90.4565516,112 C89.2882493,112 88.1616889,111.582962 87.0768367,110.748872 L34.0027941,68.0854138 C32.6675913,67.0010976 32,65.5831669 32,63.8315792 C32,62.0799915 32.6675913,60.6620609 34.0027941,59.5777447 L86.8264874,17.1645118 C88.0782399,16.2470135 89.4342849,15.8716789 90.8946628,16.0384968 C92.3550408,16.2053147 93.5650501,16.8725762 94.5247271,18.0403013 C95.484404,19.2080264 95.8807864,20.5216975 95.713886,21.9813539 C95.5469857,23.4410103 94.8793944,24.6712737 93.711092,25.6721809 L46.144733,63.8315792 L93.9614412,102.241203 C95.1297436,103.24211 95.797335,104.472374 95.9642353,105.93203 C96.1311356,107.391687 95.713891,108.705358 94.712489,109.873083 C93.6276368,111.291035 92.2090052,112 90.4565516,112 Z',
    'down': 'M112,37.4314144 C112,38.685566 111.582962,39.8142855 110.748872,40.8176067 L68.0854138,93.9933675 C67.0010976,95.3311292 65.5831669,96 63.8315792,96 C62.0799915,96 60.6620609,95.3311292 59.5777447,93.9933675 L17.1645118,41.0684358 C16.2470135,39.8978943 15.8716789,38.5810549 16.0384968,37.1178781 C16.2053147,35.6547013 16.8725762,34.4423729 18.0403013,33.4808567 C19.2080264,32.5193405 20.5216975,32.1012963 21.9813539,32.2267114 C23.4410103,32.3521266 24.6712737,33.0418996 25.6721809,34.2960512 L63.8315792,81.8281581 L102.241203,34.0452221 C103.24211,32.8746807 104.472374,32.2058098 105.93203,32.0385896 C107.391687,31.8713694 108.705358,32.2476093 109.873083,33.1673204 C111.291035,34.3378619 112,35.7592123 112,37.4314144 Z',
    'up': 'M112,90.5685856 C112,92.2407877 111.291035,93.6621381 109.873083,94.8326796 C108.705358,95.7523907 107.391687,96.1286306 105.93203,95.9614104 C104.472374,95.7941902 103.24211,95.1253193 102.241203,93.9547779 L63.8315792,46.1718419 L25.6721809,93.7039488 C24.6712737,94.9581004 23.4410103,95.6478734 21.9813539,95.7732886 C20.5216975,95.8987037 19.2080264,95.4806595 18.0403013,94.5191433 C16.8725762,93.5576271 16.2053147,92.3452987 16.0384968,90.8821219 C15.8716789,89.4189451 16.2470135,88.1021057 17.1645118,86.9315642 L59.5777447,34.0066325 C60.6620609,32.6688708 62.0799915,32 63.8315792,32 C65.5831669,32 67.0010976,32.6688708 68.0854138,34.0066325 L110.748872,87.1823933 C111.582962,88.1857145 112,89.314434 112,90.5685856 Z',
    'check': 'M40.9383156,102 C40.6880972,102 40.4795849,101.95847 40.3127726,101.87541 C38.6446496,101.626228 37.3935761,100.795635 36.5595146,99.3836066 L16.6672473,64.747541 C15.9999981,63.5016331 15.8331883,62.2349791 16.1668129,60.947541 C16.5004375,59.6601029 17.2927841,58.6633915 18.5438763,57.957377 C19.7949686,57.2513626 21.0668933,57.085244 22.3596886,57.4590164 C23.6524839,57.8327888 24.6741939,58.6010871 25.4248493,59.7639344 L42.064293,88.7934426 L103.492615,27.495082 C104.493489,26.4983557 105.661158,26 106.995656,26 C108.330154,26 109.497823,26.4983557 110.498697,27.495082 C111.499571,28.4918083 112,29.6546382 112,30.9836066 C112,32.312575 111.499571,33.4754049 110.498697,34.4721311 L44.4413564,100.504918 C43.4404826,101.501644 42.272814,102 40.9383156,102 Z',
    'sync': 'M123.625,64 C124.95834,64.1666675 125.999996,64.6874956 126.75,65.5625 C127.500004,66.4375044 127.833334,67.54166 127.75,68.875 C127.166664,76.9583737 125.145851,84.5832975 121.6875,91.75 C118.229149,98.9167025 113.520863,105.270806 107.5625,110.8125 C101.604137,116.354194 94.8958706,120.604152 87.4375,123.5625 C79.9791294,126.520848 72.1667075,128 64,128 C57.666635,128 51.50003,127.104176 45.5,125.3125 C39.49997,123.520824 33.8750263,120.875017 28.625,117.375 C20.5416263,111.958306 14.000025,105.083375 9,96.75 L9,107.5 C9,108.750006 8.56250437,109.812496 7.6875,110.6875 C6.81249563,111.562504 5.75000625,112 4.5,112 C3.24999375,112 2.18750438,111.562504 1.3125,110.6875 C0.437495625,109.812496 0,108.750006 0,107.5 L0,84.5 C0,83.2499938 0.437495625,82.1875044 1.3125,81.3125 C2.18750438,80.4374956 3.24999375,80 4.5,80 L27.5,80 C28.7500062,80 29.8124956,80.4374956 30.6875,81.3125 C31.5625044,82.1875044 32,83.2499938 32,84.5 C32,85.7500062 31.5625044,86.8124956 30.6875,87.6875 C29.8124956,88.5625044 28.7500062,89 27.5,89 L15,89 C17.1666775,93.2500213 19.8124844,97.1249825 22.9375,100.625 C26.0625156,104.125017 29.62498,107.20832 33.625,109.875 C38.1250225,112.875015 42.9374744,115.145826 48.0625,116.6875 C53.1875256,118.229174 58.4999725,119 64,119 C71.000035,119 77.7083013,117.729179 84.125,115.1875 C90.5416987,112.645821 96.3124744,109.000024 101.4375,104.25 C106.562526,99.4999763 110.604152,94.0416975 113.5625,87.875 C116.520848,81.7083025 118.291664,75.125035 118.875,68.125 C118.958334,66.8749938 119.458329,65.8541706 120.375,65.0625 C121.291671,64.2708294 122.374994,63.9166662 123.625,64 Z M123.5,16 C124.750006,16 125.812496,16.4374956 126.6875,17.3125 C127.562504,18.1875044 128,19.2499938 128,20.5 L128,43.5 C128,44.7500062 127.562504,45.8124956 126.6875,46.6875 C125.812496,47.5625044 124.750006,48 123.5,48 L100.5,48 C99.2499937,48 98.1875044,47.5625044 97.3125,46.6875 C96.4374956,45.8124956 96,44.7500062 96,43.5 C96,42.2499938 96.4374956,41.1875044 97.3125,40.3125 C98.1875044,39.4374956 99.2499937,39 100.5,39 L113,39 C110.833323,34.7499787 108.187516,30.8750175 105.0625,27.375 C101.937484,23.8749825 98.37502,20.79168 94.375,18.125 C89.8749775,15.124985 85.0625256,12.8541744 79.9375,11.3125 C74.8124744,9.77082562 69.5000275,9 64,9 C56.999965,9 50.2916988,10.2708206 43.875,12.8125 C37.4583012,15.3541794 31.6875256,18.9999763 26.5625,23.75 C21.4374744,28.5000237 17.3958481,33.9583025 14.4375,40.125 C11.4791519,46.2916975 9.70833625,52.874965 9.125,59.875 C9.04166625,61.0416725 8.5833375,62.0208294 7.75,62.8125 C6.9166625,63.6041706 5.87500625,64 4.625,64 L4.375,64 C3.04166,63.8333325 2.00000375,63.3125044 1.25,62.4375 C0.49999625,61.5624956 0.125,60.45834 0.125,59.125 C0.79167,51.0416263 2.85414937,43.4167025 6.3125,36.25 C9.77085062,29.0832975 14.4791369,22.7291944 20.4375,17.1875 C26.3958631,11.6458056 33.1041294,7.39584813 40.5625,4.4375 C48.0208706,1.47915187 55.8332925,0 64,0 C70.333365,0 76.49997,0.895824375 82.5,2.6875 C88.50003,4.47917563 94.1249738,7.1249825 99.375,10.625 C107.458374,16.0416938 113.999975,22.916625 119,31.25 L119,20.5 C119,19.2499938 119.437496,18.1875044 120.3125,17.3125 C121.187504,16.4374956 122.249994,16 123.5,16 Z',
    'filter': 'M111.165941,22.375 C112.000002,24.2916762 112.208515,26.24999 111.791484,28.25 C111.374453,30.25001 110.415297,32.0416587 108.913986,33.625 L77.8870542,66.25 L77.8870542,115.5 C77.8036481,116.416671 77.5117309,117.249996 77.011294,118 C76.5108571,118.750004 75.843618,119.291665 75.0095565,119.625 C74.4257134,119.791668 73.8835816,119.916666 73.3831447,120 C72.1320525,119.916666 71.0477889,119.458337 70.1303212,118.625 L54.4917467,102.375 C53.6576852,101.458329 53.1989583,100.416673 53.1155521,99.25 L53.1155521,66.5 L18.9609053,33.625 C17.5430008,32.0416587 16.6255469,30.25001 16.2085162,28.25 C15.7914854,26.24999 15.9999977,24.2708431 16.8340592,22.3125 C17.6681206,20.3541569 18.9191941,18.8125056 20.5873171,17.6875 C22.25544,16.5624944 24.1737526,16 26.3423125,16 L101.657688,16 C103.742841,16 105.640303,16.5624944 107.350129,17.6875 C109.059955,18.8125056 110.331879,20.37499 111.165941,22.375 Z M102.533448,27.25 C102.950478,26.6666637 103.075586,26.1666687 102.908773,25.75 C102.741961,25.3333313 102.324937,25.0833338 101.657688,25 L26.3423125,25 C25.6750633,25.0833338 25.2371876,25.3333313 25.0286722,25.75 C24.8201569,26.1666687 24.924413,26.6666637 25.3414437,27.25 L60.8722851,61.5 C61.7063466,62.3333375 62.1650735,63.3749938 62.2484797,64.625 L62.2484797,97.375 L68.8792353,104.625 L68.8792353,64.375 C68.8792353,63.2083275 69.2962597,62.1666712 70.1303212,61.25 L102.533448,27.25 Z',
    'settings': 'M120.25,55 C120.750002,58.2500163 121,61.2499863 121,64 C121,66.7500137 120.750002,69.7499838 120.25,73 L119.75,76 L110.625,79 C109.791663,81.5000125 108.791673,83.916655 107.625,86.25 L111.875,94.875 L110.125,97.375 C108.291657,99.9583463 106.37501,102.24999 104.375,104.25 C102.37499,106.25001 100.04168,108.208324 97.375,110.125 L94.875,112 L86.25,107.625 C83.916655,108.791673 81.5416788,109.791663 79.125,110.625 L76,119.75 L73,120.25 C69.7499838,120.750002 66.7500137,121 64,121 C61.2499862,121 58.2500163,120.750002 55,120.25 L52,119.75 L48.875,110.625 C46.4583212,109.791663 44.083345,108.791673 41.75,107.625 L33.125,111.875 L30.625,110.125 C27.95832,108.208324 25.6666763,106.25001 23.75,104.25 C21.6666563,102.24999 19.7083425,99.9583463 17.875,97.375 L16.125,94.875 L20.375,86.25 C19.2083275,83.9999887 18.2083375,81.6250125 17.375,79.125 L8.25,76 L7.75,73 C7.2499975,69.7499838 7,66.7500137 7,64 C7,61.2499863 7.2499975,58.2500163 7.75,55 L8.25,52 L17.375,48.875 C18.2083375,46.4583212 19.2083275,44.083345 20.375,41.75 L16.125,33.125 L17.875,30.625 C21.4583512,25.624975 25.7083088,21.3750175 30.625,17.875 L33.125,16 L41.75,20.375 C44.0000113,19.2083275 46.3749875,18.2083375 48.875,17.375 L52,8.25 L55,7.75 C58.33335,7.2499975 61.3541531,7 64.0625,7 C66.7708469,7 69.7499838,7.2499975 73,7.75 L76,8.25 L79,17.375 C81.5000125,18.2083375 83.916655,19.2083275 86.25,20.375 L94.875,16 L97.375,17.75 C102.291691,21.3333512 106.541649,25.5833087 110.125,30.5 L111.875,33 L107.625,41.625 C108.791673,43.958345 109.791663,46.3749875 110.625,48.875 L119.75,52 L120.25,55 Z M112,63.875 C112.083334,62.2916588 112.000001,60.5833425 111.75,58.75 L103.375,56 L102.25,52 C101.499996,49.7499887 100.541673,47.5416775 99.375,45.375 L97.5,41.75 L101.5,34 C99.2499887,31.2499862 96.7500138,28.7500113 94,26.5 L86.25,30.5 L82.625,28.5 C80.4583225,27.4166613 78.208345,26.5000038 75.875,25.75 L72,24.625 L69.25,16.25 C67.4166575,16.0833325 65.6875081,16 64.0625,16 C62.4374919,16 60.6666763,16.0833325 58.75,16.25 L56,24.625 L52.125,25.875 C49.791655,26.54167 47.5833437,27.4583275 45.5,28.625 L41.875,30.5 L34,26.625 C31.2499862,28.7916775 28.7916775,31.2499862 26.625,34 L30.5,41.75 L28.625,45.375 C27.4583275,47.5416775 26.54167,49.791655 25.875,52.125 L24.625,56 L16.375,58.75 C16.1249987,60.5833425 16,62.333325 16,64 C16,65.666675 16.1249987,67.4166575 16.375,69.25 L24.625,72 L25.875,76 C26.54167,78.1666775 27.4583275,80.3749887 28.625,82.625 L30.5,86.25 L26.625,94 C27.7083387,95.4166738 28.8541606,96.7291606 30.0625,97.9375 C31.2708394,99.1458394 32.5833262,100.291661 34,101.375 L41.875,97.5 L45.5,99.375 C47.5833437,100.458339 49.791655,101.374996 52.125,102.125 L56,103.375 L58.75,111.625 C60.5833425,111.875001 62.333325,112 64,112 C65.666675,112 67.4166575,111.875001 69.25,111.625 L72,103.375 L75.875,102.125 C78.208345,101.374996 80.4583225,100.458339 82.625,99.375 L86.25,97.5 L94,101.375 C95.5000075,100.291661 96.8333275,99.1666725 98,98 L98,97.875 C99.1666725,96.7083275 100.333327,95.4166738 101.5,94 L97.5,86.125 L99.5,82.5 C100.583339,80.4166563 101.45833,78.208345 102.125,75.875 L103.375,72 L111.75,69.25 C111.916668,67.4166575 112,65.666675 112,64 L112,63.875 Z M64,42.25 C70.1666975,42.4166675 75.3124794,44.5416462 79.4375,48.625 C83.5625206,52.7083538 85.7083325,57.8333025 85.875,64 C85.7083325,70.1666975 83.5625206,75.2916462 79.4375,79.375 C75.3124794,83.4583538 70.1666975,85.5833325 64,85.75 C57.8333025,85.5833325 52.7083538,83.4583538 48.625,79.375 C44.5416462,75.2916462 42.4166675,70.1666975 42.25,64 C42.4166675,57.8333025 44.5416462,52.7083538 48.625,48.625 C52.7083538,44.5416462 57.8333025,42.4166675 64,42.25 Z M73.125,73 C75.5416788,70.4999875 76.75,67.5000175 76.75,64 C76.75,60.4999825 75.5000125,57.5000125 73,55 C70.4999875,52.4999875 67.5000175,51.25 64,51.25 C60.4999825,51.25 57.5000125,52.4999875 55,55 C52.4999875,57.5000125 51.25,60.4999825 51.25,64 C51.25,67.5000175 52.4999875,70.4999875 55,73 C57.5000125,75.5000125 60.4999825,76.75 64,76.75 C67.5000175,76.75 70.5416537,75.5000125 73.125,73 Z',
    'chart': 'M112.939924,35.0002402 C105.738672,35.0002402 99.8800881,40.8588245 99.8800881,48.0600761 C99.8800881,50.6865533 100.662049,53.1323747 102.001594,55.1822907 L87.8919358,69.2919486 C85.8417796,67.9524044 83.3959582,67.170443 80.7694809,67.170443 C78.047871,67.170443 75.5184482,68.0083789 73.424089,69.4384913 L59.1690895,55.1813297 C60.5083935,53.1314138 61.2898744,50.6858326 61.2898744,48.0598358 C61.2898744,40.8585843 55.4312902,35 48.2300386,35 C41.0287871,35 35.1702028,40.8585843 35.1702028,48.0598358 C35.1702028,50.6858326 35.9519239,53.1306931 37.2907475,55.180609 L23.180609,69.2909877 C21.1309333,67.9519239 18.6855924,67.170443 16.0598358,67.170443 C8.85858426,67.170443 3,73.0292675 3,80.2305191 C3,87.4317706 8.85858426,93.2903549 16.0598358,93.2903549 C23.2610874,93.2903549 29.1196716,87.4317706 29.1196716,80.2305191 C29.1196716,77.6040418 28.3377103,75.1582204 26.998166,73.1080642 L41.107824,58.9984063 C43.1579802,60.3379505 45.6038016,61.1199119 48.2302788,61.1199119 C50.8565159,61.1199119 53.3023373,60.3379505 55.3522532,58.9984063 L69.6860494,73.3341243 C68.4353917,75.3371947 67.7098853,77.7001354 67.7098853,80.2302788 C67.7098853,87.4315304 73.5684696,93.2901147 80.7697212,93.2901147 C87.9709727,93.2901147 93.829557,87.4315304 93.829557,80.2302788 C93.829557,77.604282 93.0478358,75.1591813 91.7090123,73.1095056 L105.819391,58.999127 C107.869307,60.3381907 110.314648,61.1196716 112.940164,61.1196716 C120.141416,61.1196716 126,55.2610874 126,48.0598358 C126,40.858344 120.141176,35.0002402 112.939924,35.0002402 Z M16.0598358,87.8920588 C11.8350824,87.8920588 8.39805586,84.4550323 8.39805586,80.2305191 C8.39805586,76.0057656 11.8350824,72.5687391 16.0598358,72.5687391 C20.2843491,72.5687391 23.7216158,76.0057656 23.7216158,80.2305191 C23.7216158,84.4550323 20.2845893,87.8920588 16.0598358,87.8920588 Z M48.2302788,55.7216158 C44.0057656,55.7216158 40.5684989,52.2845893 40.5684989,48.0598358 C40.5684989,43.8353226 44.0055254,40.3980559 48.2302788,40.3980559 C52.4550323,40.3980559 55.8920588,43.8350824 55.8920588,48.0598358 C55.8920588,52.2845893 52.4550323,55.7216158 48.2302788,55.7216158 Z M80.7694809,87.8920588 C76.5449677,87.8920588 73.107701,84.4550323 73.107701,80.2302788 C73.107701,76.0055254 76.5447275,72.5684989 80.7694809,72.5684989 C84.9939942,72.5684989 88.4312609,76.0055254 88.4312609,80.2302788 C88.4310206,84.4550323 84.9939942,87.8920588 80.7694809,87.8920588 Z M112.939924,55.7216158 C108.715411,55.7216158 105.278144,52.2845893 105.278144,48.0598358 C105.278144,43.8353226 108.71517,40.3980559 112.939924,40.3980559 C117.164437,40.3980559 120.601704,43.8350824 120.601704,48.0598358 C120.601704,52.2845893 117.164437,55.7216158 112.939924,55.7216158 Z M45.0739573,68.3479901 C46.1283439,69.4018963 46.1283439,71.1111605 45.0739573,72.1650666 L39.5836516,77.6553723 C39.0568186,78.1822053 38.3659059,78.4459821 37.6752335,78.4459821 C36.984561,78.4459821 36.2938885,78.1824455 35.7668153,77.6553723 C34.7126689,76.6012259 34.7126689,74.8922019 35.7665751,73.8382958 L41.2568808,68.3479901 C42.3110271,67.294084 44.0198109,67.294084 45.0739573,68.3479901 Z M92.7477983,50.9064098 C93.8017044,51.960316 93.8017044,53.66934 92.747558,54.7234863 L87.2572524,60.213792 C86.7301792,60.740625 86.0397469,61.0044018 85.3488342,61.0044018 C84.6581617,61.0044018 83.9674892,60.7408652 83.4401758,60.2140323 C82.3862697,59.1598859 82.3862697,57.4508619 83.4401758,56.3969557 L88.9304815,50.90665 C89.9851084,49.8525037 91.6936519,49.8525037 92.7477983,50.9064098 Z',
    'calendar': 'M84.0938945,7.31284144 L98.7187369,7.31284144 C108.956379,7.31284144 117,15.3564627 117,25.5941046 L117,91.4067359 C117,101.644378 108.956379,109.687999 98.7187369,109.687999 L18.2812631,109.687999 C8.0436213,109.687999 0,101.644378 0,91.4067359 L0,25.5941046 C0,15.3564627 8.0436213,7.31284144 18.2812631,7.31284144 L32.9061055,7.31284144 L32.9061055,3.65642072 C32.9061055,1.4624002 34.368926,0 36.5625263,0 C38.7565468,0 40.218947,1.46282043 40.218947,3.65642072 L40.218947,7.31284144 L76.781053,7.31284144 L76.781053,3.65642072 C76.781053,1.4624002 78.2434532,0 80.4374737,0 C82.6314943,0 84.0938945,1.46282043 84.0938945,3.65642072 L84.0938945,7.31284144 Z M18.2812631,14.6252626 C12.4312421,14.6252626 7.31242121,19.7440836 7.31242121,25.5941046 L7.31242121,36.5629465 L109.687999,36.5629465 L109.687999,25.5941046 C109.687999,19.7440836 104.569178,14.6252626 98.7191571,14.6252626 L84.0943147,14.6252626 L84.0943147,18.2816834 C84.0943147,20.4757039 82.6319145,21.9381041 80.437894,21.9381041 C78.2438734,21.9381041 76.7814732,20.4752837 76.7814732,18.2816834 L76.7814732,14.6252626 L40.218947,14.6252626 L40.218947,18.2816834 C40.218947,20.4757039 38.7561266,21.9381041 36.5625263,21.9381041 C34.3685057,21.9381041 32.9061055,20.4752837 32.9061055,18.2816834 L32.9061055,14.6252626 L18.2812631,14.6252626 Z M109.687579,91.4067359 L109.687579,43.8753677 L7.31242121,43.8753677 L7.31242121,91.4067359 C7.31242121,97.2567569 12.4312421,102.375578 18.2812631,102.375578 L98.7187369,102.375578 C104.568758,102.375578 109.687579,97.2567569 109.687579,91.4067359 Z M30.7125053,89.2131356 C29.2501051,90.6755358 27.7872846,91.4067359 25.5936843,91.4067359 C23.400084,91.4067359 21.9372636,90.6755358 20.4748634,89.2131356 C19.0124632,87.7507354 18.2812631,85.5567149 18.2812631,84.0943147 C18.2812631,81.9002942 19.0124632,80.437894 20.4748634,78.9754938 C23.400084,76.0506934 27.7877049,76.0506934 30.7125053,78.9754938 C32.1749054,80.437894 32.9061055,82.6319145 32.9061055,84.0943147 C32.9061055,85.5567149 32.1749054,87.7507354 30.7125053,89.2131356 Z M30.7125053,67.2754517 C29.2501051,68.7378519 27.7872846,69.469052 25.5936843,69.469052 C23.400084,69.469052 21.9372636,68.7378519 20.4748634,67.2754517 C19.0124632,65.8130516 18.2812631,64.3506514 18.2812631,62.1566308 C18.2812631,59.9626103 19.0124632,58.5002101 20.4748634,57.0378099 C23.400084,54.1130095 27.7877049,54.1130095 30.7125053,57.0378099 C32.1749054,58.5002101 32.9061055,60.6942306 32.9061055,62.1566308 C32.9061055,63.619031 32.1749054,65.8130516 30.7125053,67.2754517 Z M52.6501891,89.2131356 C51.1877889,90.6755358 49.7249685,91.4067359 47.5313682,91.4067359 C45.3377679,91.4067359 43.8749475,90.6755358 42.4125473,89.2131356 C40.9501471,87.7507354 40.218947,85.5567149 40.218947,84.0943147 C40.218947,82.6319145 40.9501471,80.437894 42.4125473,78.9754938 C45.3377679,76.0506934 49.7253887,76.0506934 52.6501891,78.9754938 C54.1125893,80.437894 54.8437894,82.6319145 54.8437894,84.0943147 C54.8437894,85.5567149 54.1125893,87.7507354 52.6501891,89.2131356 Z M52.6501891,67.2754517 C51.1877889,68.7378519 49.7249685,69.469052 47.5313682,69.469052 C45.3377679,69.469052 43.8749475,68.7378519 42.4125473,67.2754517 C40.9501471,65.8130516 40.218947,63.619031 40.218947,62.1566308 C40.218947,60.6942306 40.9501471,58.5002101 42.4125473,57.0378099 C45.3377679,54.1130095 49.7253887,54.1130095 52.6501891,57.0378099 C54.1125893,58.5002101 54.8437894,60.6942306 54.8437894,62.1566308 C54.8437894,63.619031 54.1125893,65.8130516 52.6501891,67.2754517 Z M74.5874527,89.2131356 C73.1250525,90.6755358 71.6622321,91.4067359 69.4686318,91.4067359 C67.2750315,91.4067359 65.8122111,90.6755358 64.3498109,89.2131356 C62.8874107,87.7507354 62.1562106,85.5567149 62.1562106,84.0943147 C62.1562106,82.6319145 62.8874107,80.437894 64.3498109,78.9754938 C67.2750315,76.0506934 71.6626523,76.0506934 74.5874527,78.9754938 C76.0498529,80.437894 76.781053,81.9002942 76.781053,84.0943147 C76.781053,86.2883352 76.0498529,87.7507354 74.5874527,89.2131356 Z M74.5874527,67.2754517 C73.1250525,68.7378519 71.6622321,69.469052 69.4686318,69.469052 C67.2750315,69.469052 65.8122111,68.7378519 64.3498109,67.2754517 C62.8874107,65.8130516 62.1562106,63.619031 62.1562106,62.1566308 C62.1562106,60.6942306 62.8874107,58.5002101 64.3498109,57.0378099 C67.2750315,54.1130095 71.6626523,54.1130095 74.5874527,57.0378099 C76.0498529,58.5002101 76.781053,60.6942306 76.781053,62.1566308 C76.781053,64.3506514 76.0498529,65.8130516 74.5874527,67.2754517 Z M96.5251366,89.2131356 C95.0627364,90.6755358 93.599916,91.4067359 91.4063157,91.4067359 C89.2127154,91.4067359 87.7498949,90.6755358 86.2874947,89.2131356 C84.8250946,87.7507354 84.0938945,85.5567149 84.0938945,84.0943147 C84.0938945,81.9002942 84.8250946,80.437894 86.2874947,78.9754938 C89.2127154,76.0506934 93.6003362,76.0506934 96.5251366,78.9754938 C97.9875368,80.437894 98.7187369,82.6319145 98.7187369,84.0943147 C98.7187369,85.5567149 97.9875368,87.7507354 96.5251366,89.2131356 Z M96.5251366,67.2754517 C95.0627364,68.7378519 93.599916,69.469052 91.4063157,69.469052 C89.2127154,69.469052 87.7498949,68.7378519 86.2874947,67.2754517 C84.8250946,65.8130516 84.0938945,63.619031 84.0938945,62.1566308 C84.0938945,60.6942306 84.8250946,58.5002101 86.2874947,57.0378099 C89.2127154,54.1130095 93.6003362,54.1130095 96.5251366,57.0378099 C97.9875368,58.5002101 98.7187369,60.6942306 98.7187369,62.1566308 C98.7187369,64.3506514 97.9875368,65.8130516 96.5251366,67.2754517 Z',
};
var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icon.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, type = _a.type;
        return (react_1.default.createElement("svg", { className: "ui-icon" + (className ? " " + className : ""), fill: "currentColor", height: "1em", width: "1em", viewBox: "0 0 128 128", style: style, children: react_1.default.createElement("g", null,
                react_1.default.createElement("path", { d: exports.svgIconPath[type] })) }));
    };
    return Icon;
}(react_1.default.Component));
exports.default = Icon;

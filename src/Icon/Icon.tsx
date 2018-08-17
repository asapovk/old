import React from 'react';

const icons = {
    'add': 'M107.534884,59.4882507 C108.7752,59.4882507 109.808781,59.9268886 110.635659,60.8041775 C111.462536,61.6814665 111.917312,62.74673 112,64 C111.917312,65.25327 111.462536,66.3185335 110.635659,67.1958225 C109.808781,68.0731114 108.7752,68.5117493 107.534884,68.5117493 L67.9689922,68.5117493 L67.9689922,107.488251 C67.9689922,108.825072 67.5348881,109.911223 66.6666667,110.746736 C65.7984453,111.58225 64.7441922,112 63.503876,112 C62.2635597,112 61.2093067,111.58225 60.3410853,110.746736 C59.4728639,109.911223 59.0387597,108.825072 59.0387597,107.488251 L59.0387597,68.5117493 L20.4651163,68.5117493 C19.1421122,68.5117493 18.0671876,68.0731114 17.2403101,67.1958225 C16.4134326,66.3185335 16,65.25327 16,64 C16,62.74673 16.4134326,61.6814665 17.2403101,60.8041775 C18.0671876,59.9268886 19.1421122,59.4882507 20.4651163,59.4882507 L59.0387597,59.4882507 L59.0387597,20.5117493 C59.0387597,19.2584794 59.4728639,18.2141034 60.3410853,17.3785901 C61.2093067,16.5430768 62.2635597,16.0835513 63.503876,16 C64.7441922,16.0835513 65.7984453,16.5430768 66.6666667,17.3785901 C67.5348881,18.2141034 67.9689922,19.2584794 67.9689922,20.5117493 L67.9689922,59.4882507 L107.534884,59.4882507 Z',
    'more': 'M24,72 C19.581722,72 16,68.418278 16,64 C16,59.581722 19.581722,56 24,56 C28.418278,56 32,59.581722 32,64 C32,68.418278 28.418278,72 24,72 Z M64,72 C59.581722,72 56,68.418278 56,64 C56,59.581722 59.581722,56 64,56 C68.418278,56 72,59.581722 72,64 C72,68.418278 68.418278,72 64,72 Z M104,72 C99.581722,72 96,68.418278 96,64 C96,59.581722 99.581722,56 104,56 C108.418278,56 112,59.581722 112,64 C112,68.418278 108.418278,72 104,72 Z',
    'pin': 'M16,111.999599 L39.7047644,73.8061797 C41.6961515,76.4332756 43.9253037,79.030338 46.4472824,81.5523167 C48.9400619,84.0492675 51.5371243,86.3009448 54.1800712,88.3048459 L16,111.999599 Z M109.808765,49.5866747 C107.290123,52.1086534 103.014522,52.3564296 98.2625571,50.7404611 L85.5633974,63.433781 C91.947182,73.8028426 93.4655417,83.8991001 88.4833198,88.8879961 C86.4660705,90.9052454 83.6145577,91.8571401 80.2416302,91.8571401 C74.0363779,91.8571401 66.078338,88.6110206 58.3780854,82.7911981 C58.2053929,82.6635558 58.0360374,82.5267366 57.8658476,82.3932544 C57.3185707,81.9727856 56.7712938,81.5364657 56.2240169,81.0867977 C56.0087769,80.907431 55.7935369,80.7280643 55.5782969,80.5453606 C55.0568822,80.1057037 54.5421416,79.6526986 54.027401,79.1896824 C53.8255092,79.0103157 53.6227832,78.8317833 53.4208914,78.6457425 C52.72011,78.0033596 52.0260028,77.3417886 51.3419067,76.6576925 C50.5602017,75.8759876 49.8101988,75.0834372 49.0835552,74.2817099 C48.6338872,73.7869916 48.2100813,73.288102 47.7829384,72.7867096 C47.5485103,72.5122369 47.3074081,72.2419355 47.0763171,71.96496 C46.5223661,71.2967149 45.9942773,70.6259671 45.4795367,69.9510478 C45.4144641,69.8667872 45.3493916,69.7850294 45.2868218,69.6999345 C36.2567532,57.7858168 33.3693671,45.2560126 39.1116031,39.5137766 C41.1288523,37.4965273 43.9837022,36.5412956 47.3532926,36.5412956 C52.3163265,36.5412956 58.3939364,38.6202803 64.5733265,42.4236878 L77.2624751,29.7370421 C75.6465066,24.9859112 75.8942828,20.7103105 78.4195986,18.1874975 C83.1482044,13.4588917 94.0103158,16.6491155 102.678314,25.3212851 C111.350484,33.9901176 114.544044,44.8513948 109.808765,49.5866747 Z',
    'close': 'M98.7158808,92.2248834 C99.6067592,93.1168764 100.034088,94.175646 99.9978787,95.4012241 C99.9616698,96.6268023 99.5231765,97.7199624 98.6823858,98.6807374 C97.7228113,99.52258 96.631017,99.9616218 95.4069703,99.997876 C94.1829235,100.03413 93.1254767,99.6062673 92.2345983,98.7142743 L63.8157192,70.2598417 L35.8201796,98.2904051 C34.8599848,99.2518012 33.7680354,99.7207309 32.5442988,99.6972084 C31.3205622,99.6736858 30.2632705,99.215935 29.3723921,98.323942 C28.4815137,97.4319491 28.0243348,96.3733347 28.0008416,95.1480671 C27.9773485,93.9227995 28.4456923,92.8294841 29.4058871,91.868088 L57.4014267,63.8375246 L29.6952467,36.0966827 C28.7449764,35.1452236 28.2879525,34.0567213 28.3241614,32.8311432 C28.3603703,31.605565 28.8285591,30.5421375 29.7287417,29.6408287 C30.6289243,28.7395199 31.6910231,28.2707455 32.9150698,28.2344913 C34.1391166,28.1982371 35.2262589,28.6558327 36.1765292,29.6072918 L63.8827092,57.3481337 L91.8782488,29.3175703 C92.7784314,28.4162615 93.8403751,27.9773749 95.0641117,28.0008974 C96.2878483,28.02442 97.3751456,28.4521277 98.3260362,29.2840333 C99.1569025,30.2361135 99.5840757,31.3247711 99.6075689,32.5500387 C99.631062,33.7753063 99.1927239,34.8385785 98.2925412,35.7398873 L70.2970016,63.7704508 L98.7158808,92.2248834 Z',
    'search': 'M118.75,112.25 L118.625,112.25 C119.541671,113.250005 120,114.333327 120,115.5 C120,116.666673 119.541671,117.708329 118.625,118.625 C117.708329,119.541671 116.666673,120 115.5,120 C114.333327,120 113.291671,119.541671 112.375,118.625 L86.625,93 C82.4583125,96.4166838 77.7708594,99.1041569 72.5625,101.0625 C67.3541406,103.020843 61.8333625,104 56,104 C42.4165987,103.666665 31.1042119,98.9792119 22.0625,89.9375 C13.0207881,80.8957881 8.333335,69.5834013 8,56 C8.333335,42.4165987 13.0207881,31.1042119 22.0625,22.0625 C31.1042119,13.0207881 42.4165987,8.333335 56,8 C69.5834013,8.333335 80.8957881,13.0207881 89.9375,22.0625 C98.9792119,31.1042119 103.666665,42.4165987 104,56 C104,61.8333625 103.020843,67.3541406 101.0625,72.5625 C99.1041569,77.7708594 96.4166838,82.4583125 93,86.625 L118.75,112.25 Z M71.125,91.875 C75.79169,89.9583238 79.9374819,87.1875181 83.5625,83.5625 C87.1875181,79.9374819 89.99999,75.7708569 92,71.0625 C94.00001,66.3541431 95,61.33336 95,56 C95,50.66664 94.00001,45.6458569 92,40.9375 C89.99999,36.2291431 87.1875181,32.0625181 83.5625,28.4375 C79.9374819,24.8124819 75.7708569,22.00001 71.0625,20 C66.3541431,17.99999 61.33336,17 56,17 C50.66664,17 45.6458569,17.99999 40.9375,20 C36.2291431,22.00001 32.0625181,24.8124819 28.4375,28.4375 C24.8124819,32.0625181 22.00001,36.2291431 20,40.9375 C17.99999,45.6458569 17,50.66664 17,56 C17,61.33336 17.99999,66.3541431 20,71.0625 C22.00001,75.7708569 24.8124819,79.9374819 28.4375,83.5625 C32.0625181,87.1875181 36.2291431,89.99999 40.9375,92 C45.6458569,94.00001 50.66664,95 56,95 C61.33336,95 66.3749763,93.9583437 71.125,91.875',
    'left': 'M37.5434484,112 C35.7909948,112 34.3723632,111.291035 33.287511,109.873083 C32.286109,108.705358 31.8688644,107.391687 32.0357647,105.93203 C32.202665,104.472374 32.8702564,103.24211 34.0385588,102.241203 L81.855267,63.8315792 L34.288908,25.6721809 C33.1206056,24.6712737 32.4530143,23.4410103 32.286114,21.9813539 C32.1192136,20.5216975 32.515596,19.2080264 33.4752729,18.0403013 C34.4349499,16.8725762 35.6449592,16.2053147 37.1053372,16.0384968 C38.5657151,15.8716789 39.9217601,16.2470135 41.1735126,17.1645118 L93.9972059,59.5777447 C95.3324087,60.6620609 96,62.0799915 96,63.8315792 C96,65.5831669 95.3324087,67.0010976 93.9972059,68.0854138 L40.9231633,110.748872 C39.8383111,111.582962 38.7117507,112 37.5434484,112 Z',
    'down': 'M112,37.4314144 C112,38.685566 111.582962,39.8142855 110.748872,40.8176067 L68.0854138,93.9933675 C67.0010976,95.3311292 65.5831669,96 63.8315792,96 C62.0799915,96 60.6620609,95.3311292 59.5777447,93.9933675 L17.1645118,41.0684358 C16.2470135,39.8978943 15.8716789,38.5810549 16.0384968,37.1178781 C16.2053147,35.6547013 16.8725762,34.4423729 18.0403013,33.4808567 C19.2080264,32.5193405 20.5216975,32.1012963 21.9813539,32.2267114 C23.4410103,32.3521266 24.6712737,33.0418996 25.6721809,34.2960512 L63.8315792,81.8281581 L102.241203,34.0452221 C103.24211,32.8746807 104.472374,32.2058098 105.93203,32.0385896 C107.391687,31.8713694 108.705358,32.2476093 109.873083,33.1673204 C111.291035,34.3378619 112,35.7592123 112,37.4314144 Z',
    'up': 'M112,90.5685856 C112,92.2407877 111.291035,93.6621381 109.873083,94.8326796 C108.705358,95.7523907 107.391687,96.1286306 105.93203,95.9614104 C104.472374,95.7941902 103.24211,95.1253193 102.241203,93.9547779 L63.8315792,46.1718419 L25.6721809,93.7039488 C24.6712737,94.9581004 23.4410103,95.6478734 21.9813539,95.7732886 C20.5216975,95.8987037 19.2080264,95.4806595 18.0403013,94.5191433 C16.8725762,93.5576271 16.2053147,92.3452987 16.0384968,90.8821219 C15.8716789,89.4189451 16.2470135,88.1021057 17.1645118,86.9315642 L59.5777447,34.0066325 C60.6620609,32.6688708 62.0799915,32 63.8315792,32 C65.5831669,32 67.0010976,32.6688708 68.0854138,34.0066325 L110.748872,87.1823933 C111.582962,88.1857145 112,89.314434 112,90.5685856 Z',
    'check': 'M40.9383156,102 C40.6880972,102 40.4795849,101.95847 40.3127726,101.87541 C38.6446496,101.626228 37.3935761,100.795635 36.5595146,99.3836066 L16.6672473,64.747541 C15.9999981,63.5016331 15.8331883,62.2349791 16.1668129,60.947541 C16.5004375,59.6601029 17.2927841,58.6633915 18.5438763,57.957377 C19.7949686,57.2513626 21.0668933,57.085244 22.3596886,57.4590164 C23.6524839,57.8327888 24.6741939,58.6010871 25.4248493,59.7639344 L42.064293,88.7934426 L103.492615,27.495082 C104.493489,26.4983557 105.661158,26 106.995656,26 C108.330154,26 109.497823,26.4983557 110.498697,27.495082 C111.499571,28.4918083 112,29.6546382 112,30.9836066 C112,32.312575 111.499571,33.4754049 110.498697,34.4721311 L44.4413564,100.504918 C43.4404826,101.501644 42.272814,102 40.9383156,102 Z',
    'sync': 'M123.625,64 C124.95834,64.1666675 125.999996,64.6874956 126.75,65.5625 C127.500004,66.4375044 127.833334,67.54166 127.75,68.875 C127.166664,76.9583737 125.145851,84.5832975 121.6875,91.75 C118.229149,98.9167025 113.520863,105.270806 107.5625,110.8125 C101.604137,116.354194 94.8958706,120.604152 87.4375,123.5625 C79.9791294,126.520848 72.1667075,128 64,128 C57.666635,128 51.50003,127.104176 45.5,125.3125 C39.49997,123.520824 33.8750263,120.875017 28.625,117.375 C20.5416263,111.958306 14.000025,105.083375 9,96.75 L9,107.5 C9,108.750006 8.56250437,109.812496 7.6875,110.6875 C6.81249563,111.562504 5.75000625,112 4.5,112 C3.24999375,112 2.18750438,111.562504 1.3125,110.6875 C0.437495625,109.812496 0,108.750006 0,107.5 L0,84.5 C0,83.2499938 0.437495625,82.1875044 1.3125,81.3125 C2.18750438,80.4374956 3.24999375,80 4.5,80 L27.5,80 C28.7500062,80 29.8124956,80.4374956 30.6875,81.3125 C31.5625044,82.1875044 32,83.2499938 32,84.5 C32,85.7500062 31.5625044,86.8124956 30.6875,87.6875 C29.8124956,88.5625044 28.7500062,89 27.5,89 L15,89 C17.1666775,93.2500213 19.8124844,97.1249825 22.9375,100.625 C26.0625156,104.125017 29.62498,107.20832 33.625,109.875 C38.1250225,112.875015 42.9374744,115.145826 48.0625,116.6875 C53.1875256,118.229174 58.4999725,119 64,119 C71.000035,119 77.7083013,117.729179 84.125,115.1875 C90.5416987,112.645821 96.3124744,109.000024 101.4375,104.25 C106.562526,99.4999763 110.604152,94.0416975 113.5625,87.875 C116.520848,81.7083025 118.291664,75.125035 118.875,68.125 C118.958334,66.8749938 119.458329,65.8541706 120.375,65.0625 C121.291671,64.2708294 122.374994,63.9166662 123.625,64 Z M123.5,16 C124.750006,16 125.812496,16.4374956 126.6875,17.3125 C127.562504,18.1875044 128,19.2499938 128,20.5 L128,43.5 C128,44.7500062 127.562504,45.8124956 126.6875,46.6875 C125.812496,47.5625044 124.750006,48 123.5,48 L100.5,48 C99.2499937,48 98.1875044,47.5625044 97.3125,46.6875 C96.4374956,45.8124956 96,44.7500062 96,43.5 C96,42.2499938 96.4374956,41.1875044 97.3125,40.3125 C98.1875044,39.4374956 99.2499937,39 100.5,39 L113,39 C110.833323,34.7499787 108.187516,30.8750175 105.0625,27.375 C101.937484,23.8749825 98.37502,20.79168 94.375,18.125 C89.8749775,15.124985 85.0625256,12.8541744 79.9375,11.3125 C74.8124744,9.77082562 69.5000275,9 64,9 C56.999965,9 50.2916988,10.2708206 43.875,12.8125 C37.4583012,15.3541794 31.6875256,18.9999763 26.5625,23.75 C21.4374744,28.5000237 17.3958481,33.9583025 14.4375,40.125 C11.4791519,46.2916975 9.70833625,52.874965 9.125,59.875 C9.04166625,61.0416725 8.5833375,62.0208294 7.75,62.8125 C6.9166625,63.6041706 5.87500625,64 4.625,64 L4.375,64 C3.04166,63.8333325 2.00000375,63.3125044 1.25,62.4375 C0.49999625,61.5624956 0.125,60.45834 0.125,59.125 C0.79167,51.0416263 2.85414937,43.4167025 6.3125,36.25 C9.77085062,29.0832975 14.4791369,22.7291944 20.4375,17.1875 C26.3958631,11.6458056 33.1041294,7.39584813 40.5625,4.4375 C48.0208706,1.47915187 55.8332925,0 64,0 C70.333365,0 76.49997,0.895824375 82.5,2.6875 C88.50003,4.47917563 94.1249738,7.1249825 99.375,10.625 C107.458374,16.0416938 113.999975,22.916625 119,31.25 L119,20.5 C119,19.2499938 119.437496,18.1875044 120.3125,17.3125 C121.187504,16.4374956 122.249994,16 123.5,16 Z',
};

const Icon = props => (
    <svg fill="currentColor" height="1em" width="1em" viewBox="0 0 128 128" style={props.style}>
        <g><path d={icons[props.type]}></path></g>
    </svg>
);

export default Icon
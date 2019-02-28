/** @jsx jsx */
import { jsx } from '@emotion/core';
import { D3, C1, T2, Icon } from '../../core';
import { useTheme } from '../../hooks';
import createStyles from './styles';
import Types from './types'
import { ScrollView } from '../ScrollView';
import { useState } from 'react';

require('../lib/TweenMax.min');
require('../lib/MorphSVGPlugin.min');

declare global {
    const TimelineMax;
    const Power0;
}

export default (props: Types.Props) => {
    const theme = useTheme();
    const styles = createStyles();
    const [open, setOpen] = useState(false);

    let count: any = props.data.filter(item => item.active).length;

    if (count) {
        count = count.toString();
    } else {
        count = '';
    }

    const toggle = () => {
        if (!props.data.length && !open) {
            return;
        }
        const main = window.document.getElementById("main")!;
        let steps = [0.03, 0.03, 0.03, 0.03, 0.05, 0.05];
        let anim = new TimelineMax();
        for (let i = 0; i < steps.length; i++) {
            if (!open && !i) continue;
            let key = i;
            let step = i + 1;
            if (open) {
                key = steps.length - key;
                step = steps.length - i;
            }
            anim = anim.to(main, steps[i], {
                morphSVG: window.document.getElementById(`step${step}`)!,
                ease: Power0.easeNone
            });
        }
        setOpen(!open);
    }

    const onRowClick = (item: Types.Item, index: number) => {
        toggle();
        props.onRowClick && props.onRowClick(item, index);
    }

    return (
        <div style={{ position: 'relative' }} className={props.className}>
            <svg style={{ display: "none" }} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <path d="M305.513147,1 C321.39693,1 338,14.6061801 338,33.5 C338,52.3938199 338.120926,371.343822 338.120926,377.446741 C338.120926,383.549661 335.058848,385.817635 329.469426,385.817635 C323.880004,385.817635 29.221851,385.817635 22.8318238,385.817635 C16.4417965,385.817635 14,383.906742 14,377.446741 C14,370.98674 14,79.9587753 14,74.5946214 C14,69.2304676 16.1118096,66 21.0629045,66 C26.0139994,66 184.521601,66 222.476385,66 C260.431169,66 273,52.3938199 273,33.5 C273,14.6061801 289.629363,1 305.513147,1 Z" id="step6"></path>
                <path d="M305.513147,1 C321.39693,1 338,14.6061801 338,33.5 C338,52.3938199 336.297246,262.710151 333.217004,294.060623 C330.136761,325.411096 314.207871,330.304976 292.031069,330.304976 C269.854267,330.304976 207.891232,320.807478 176.121603,307.443185 C144.351974,294.078892 106.054465,264.771427 89.2151304,220.252538 C72.3757961,175.733649 75.4570533,126.497474 80.7751651,110.595913 C86.093277,94.694353 92.1227086,84.6852808 107.783759,81.0888295 C123.444809,77.4923782 219.164692,77.2444704 235.047532,74.8144279 C250.930371,72.3843853 273,52.3938199 273,33.5 C273,14.6061801 289.629363,1 305.513147,1 Z" id="step5"></path>
                <path d="M305.513147,1 C321.39693,1 338,14.6061801 338,33.5 C338,52.3938199 336.659124,147.431907 334.454175,159.719434 C332.249226,172.006962 326.778435,180.316969 317.475798,185.029181 C308.173162,189.741394 282.16516,191.761058 262.49119,188.692995 C242.817221,185.624931 219.533958,175.538135 205.864463,164.102791 C192.194969,152.667447 183.884626,130.51346 183.884626,118.767943 C183.884626,107.022426 185.753667,100.17402 193.59741,92.501743 C201.441153,84.8294665 243.226443,78.8409048 254.305031,72.4138434 C265.383618,65.986782 273,52.3938199 273,33.5 C273,14.6061801 289.629363,1 305.513147,1 Z" id="step4"></path>
                <path d="M305.513147,1 C321.39693,1 338,14.6061801 338,33.5 C338,52.3938199 335.432415,123.417279 333.906684,131.792535 C332.380954,140.167791 331,149.380284 324,155.056792 C317,160.733301 309.825812,164.102791 296.443998,164.102791 C283.062183,164.102791 272.426351,162.428221 255.23595,155.056792 C238.045548,147.685364 230.271082,139.117163 224.844523,130.741907 C219.417964,122.36665 218.601103,112.386209 224.844523,102.434033 C231.087943,92.4818561 257.10305,86.4847715 263.094045,73.2716994 C269.08504,60.0586272 273,52.3938199 273,33.5 C273,14.6061801 289.629363,1 305.513147,1 Z" id="step3"></path>
                <path d="M305.513147,1 C321.39693,1 338,14.6061801 338,33.5 C338,52.3938199 337.087216,77.0137459 335.475169,89.5176396 C333.863122,102.021533 333.863122,103.9768 331.858465,112.15895 C329.853808,120.341101 326.048119,131.856747 314.751825,132.571242 C303.455532,133.285736 297.540694,131.934325 287,129.066203 C276.459306,126.198081 266.657842,122.156468 260.249084,114.857516 C253.840325,107.558564 253.812722,99.1619729 255.854455,91.1088347 C257.896187,83.0556966 263.014581,79.6752781 265.373899,74.3037744 C267.733217,68.9322707 273,52.3938199 273,33.5 C273,14.6061801 289.629363,1 305.513147,1 Z" id="step2"></path>
                <path d="M305.509506,10 C316.994703,10 329,19.8383148 329,33.5 C329,47.1616852 319.193103,52.699391 317.939872,53.4120066 C316.686641,54.1246222 316.395476,54.3580947 314.53029,55.1541136 C312.665103,55.9501324 311.686307,56.2177094 310.736383,56.4738639 C309.786458,56.7300185 307.087933,57 305.509506,57 C303.931079,57 301.803115,56.661711 300.908854,56.4738639 C300.014593,56.2860169 297.692924,55.6590182 296.4722,55.1541136 C295.251476,54.6492089 294.063951,53.9871617 293.194807,53.4120066 C292.325662,52.8368516 282,47.1616852 282,33.5 C282,19.8383148 294.024309,10 305.509506,10 Z" id="step1"></path>
            </svg>
            <svg style={{ pointerEvents: open ? 'all' : 'none' }} width="352px" height="414px" viewBox="0 0 352 414" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                    {open && (
                        <filter x="-43.5%" y="-21.9%" width="186.9%" height="186.9%" filterUnits="objectBoundingBox" id="liquiDropShadow">
                            <feMorphology radius="0.25" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
                            <feOffset dx="0" dy="14" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur stdDeviation="7" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
                            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.14 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                        </filter>
                    )}
                </defs>
                <use fill="black" fillOpacity="1" filter="url(#liquiDropShadow)" xlinkHref="#main"></use>
                <use fill={theme.theme.interface.hex} xlinkHref="#main"></use>
                <path
                    stroke={theme.theme.pale.hex}
                    strokeWidth="0.5"
                    fill={theme.theme.interface.hex}
                    fillRule="nonzero"
                    d="M305.509506,10 C316.994703,10 329,19.8383148 329,33.5 C329,47.1616852 319.193103,52.699391 317.939872,53.4120066 C316.686641,54.1246222 316.395476,54.3580947 314.53029,55.1541136 C312.665103,55.9501324 311.686307,56.2177094 310.736383,56.4738639 C309.786458,56.7300185 307.087933,57 305.509506,57 C303.931079,57 301.803115,56.661711 300.908854,56.4738639 C300.014593,56.2860169 297.692924,55.6590182 296.4722,55.1541136 C295.251476,54.6492089 294.063951,53.9871617 293.194807,53.4120066 C292.325662,52.8368516 282,47.1616852 282,33.5 C282,19.8383148 294.024309,10 305.509506,10 Z" id="main"
                />
                <circle style={{ pointerEvents: 'all' }} onClick={toggle} fill={theme.theme.highlight.hex} fillRule="nonzero" cx="305" cy="33.5" r="23.5"></circle>
            </svg>
            <D3 css={styles.title}>{count}</D3>

            {!count && (
                <Icon css={styles.icon} type="bell" />
            )}

            <div css={styles.contentWrapper}>
                <ScrollView displayScroll={false}>
                    <div css={styles.content}>
                        {props.data.map((item, index) => (
                            <div css={styles.row(open)} key={index} onClick={() => onRowClick(item, index)}>
                                {item.active && (
                                    <span css={styles.dot} />
                                )}
                                <C1 bold>{item.title}</C1>
                                <T2 mt={'0.25rem'} color={'lowlight'}>{item.message}</T2>
                            </div>
                        ))}
                    </div>
                </ScrollView>
            </div>
        </div>
    )
};
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { D2, C1, T2 } from '../../core';
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

    const toggle = () => {
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

    let count: any = props.data.filter(item => item.active).length;

    if (count) {
        count = count.toString();
    } else {
        count = '';
    }

    return (
        <div style={{ position: 'relative' }}>
            <svg style={{ display: "none" }} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <path d="M292.513147,1 C308.39693,1 325,14.6061801 325,33.5 C325,52.3938199 325.120926,371.343822 325.120926,377.446741 C325.120926,383.549661 322.058848,385.817635 316.469426,385.817635 C310.880004,385.817635 16.221851,385.817635 9.83182377,385.817635 C3.44179655,385.817635 1,383.906742 1,377.446741 C1,370.98674 1,79.9587753 1,74.5946214 C1,69.2304676 3.11180956,66 8.06290449,66 C13.0139994,66 171.521601,66 209.476385,66 C247.431169,66 260,52.3938199 260,33.5 C260,14.6061801 276.629363,1 292.513147,1 Z" id="step6"></path>
                <path d="M292.513147,1 C308.39693,1 325,14.6061801 325,33.5 C325,52.3938199 323.297246,262.710151 320.217004,294.060623 C317.136761,325.411096 301.207871,330.304976 279.031069,330.304976 C256.854267,330.304976 194.891232,320.807478 163.121603,307.443185 C131.351974,294.078892 93.0544648,264.771427 76.2151304,220.252538 C59.3757961,175.733649 62.4570533,126.497474 67.7751651,110.595913 C73.093277,94.694353 79.1227086,84.6852808 94.7837587,81.0888295 C110.444809,77.4923782 206.164692,77.2444704 222.047532,74.8144279 C237.930371,72.3843853 260,52.3938199 260,33.5 C260,14.6061801 276.629363,1 292.513147,1 Z" id="step5"></path>
                <path d="M292.513147,1 C308.39693,1 325,14.6061801 325,33.5 C325,52.3938199 323.659124,147.431907 321.454175,159.719434 C319.249226,172.006962 313.778435,180.316969 304.475798,185.029181 C295.173162,189.741394 269.16516,191.761058 249.49119,188.692995 C229.817221,185.624931 206.533958,175.538135 192.864463,164.102791 C179.194969,152.667447 170.884626,130.51346 170.884626,118.767943 C170.884626,107.022426 172.753667,100.17402 180.59741,92.501743 C188.441153,84.8294665 230.226443,78.8409048 241.305031,72.4138434 C252.383618,65.986782 260,52.3938199 260,33.5 C260,14.6061801 276.629363,1 292.513147,1 Z" id="step4"></path>
                <path d="M292.513147,1 C308.39693,1 325,14.6061801 325,33.5 C325,52.3938199 322.432415,123.417279 320.906684,131.792535 C319.380954,140.167791 318,149.380284 311,155.056792 C304,160.733301 296.825812,164.102791 283.443998,164.102791 C270.062183,164.102791 259.426351,162.428221 242.23595,155.056792 C225.045548,147.685364 217.271082,139.117163 211.844523,130.741907 C206.417964,122.36665 205.601103,112.386209 211.844523,102.434033 C218.087943,92.4818561 244.10305,86.4847715 250.094045,73.2716994 C256.08504,60.0586272 260,52.3938199 260,33.5 C260,14.6061801 276.629363,1 292.513147,1 Z" id="step3"></path>
                <path d="M292.513147,1 C308.39693,1 325,14.6061801 325,33.5 C325,52.3938199 324.087216,77.0137459 322.475169,89.5176396 C320.863122,102.021533 320.863122,103.9768 318.858465,112.15895 C316.853808,120.341101 313.048119,131.856747 301.751825,132.571242 C290.455532,133.285736 284.540694,131.934325 274,129.066203 C263.459306,126.198081 253.657842,122.156468 247.249084,114.857516 C240.840325,107.558564 240.812722,99.1619729 242.854455,91.1088347 C244.896187,83.0556966 250.014581,79.6752781 252.373899,74.3037744 C254.733217,68.9322707 260,52.3938199 260,33.5 C260,14.6061801 276.629363,1 292.513147,1 Z" id="step2"></path>
                <path d="M292.513147,1 C308.39693,1 325,14.6061801 325,33.5 C325,52.3938199 311.43727,60.0523493 309.704078,61.0378815 C307.970886,62.0234137 307.568212,62.3463012 304.988698,63.4471783 C302.409185,64.5480555 301.055531,64.9181087 299.741806,65.272365 C298.428081,65.6266214 294.696077,66 292.513147,66 C290.330216,66 287.387287,65.5321535 286.150543,65.272365 C284.913799,65.0125766 281.70298,64.1454507 280.014745,63.4471783 C278.32651,62.7489059 276.684188,61.8333087 275.482179,61.0378815 C274.280171,60.2424544 260,52.3938199 260,33.5 C260,14.6061801 276.629363,1 292.513147,1 Z" id="step1"></path>
            </svg>
            <svg width="352px" height="414px" viewBox="0 0 352 414" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                    <filter x="-43.5%" y="-21.9%" width="186.9%" height="186.9%" filterUnits="objectBoundingBox" id="liquiDropShadow">
                        <feMorphology radius="0.25" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
                        <feOffset dx="0" dy="14" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
                        <feGaussianBlur stdDeviation="7" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
                        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.14 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                    </filter>
                </defs>
                <use fill="black" fillOpacity="1" filter="url(#liquiDropShadow)" xlinkHref="#main"></use>
                <use fill={theme.theme.interface.hex} xlinkHref="#main"></use>
                <g transform="moveX(10)">
                    <path
                        stroke={theme.theme.pale.hex}
                        strokeWidth="0.5"
                        fill={theme.theme.interface.hex}
                        fillRule="nonzero"
                        d="M292.513147,1 C308.39693,1 325,14.6061801 325,33.5 C325,52.3938199 311.43727,60.0523493 309.704078,61.0378815 C307.970886,62.0234137 307.568212,62.3463012 304.988698,63.4471783 C302.409185,64.5480555 301.055531,64.9181087 299.741806,65.272365 C298.428081,65.6266214 294.696077,66 292.513147,66 C290.330216,66 287.387287,65.5321535 286.150543,65.272365 C284.913799,65.0125766 281.70298,64.1454507 280.014745,63.4471783 C278.32651,62.7489059 276.684188,61.8333087 275.482179,61.0378815 C274.280171,60.2424544 260,52.3938199 260,33.5 C260,14.6061801 276.629363,1 292.513147,1 Z" id="main"
                    />
                    <circle onClick={toggle} fill={theme.theme.highlight.hex} fillRule="nonzero" cx="292.5" cy="33.5" r="23.5"></circle>
                </g>
            </svg>
            <D2 css={styles.title}>{count}</D2>

            <div css={styles.contentWrapper}>
                <ScrollView displayScroll={false}>
                    <div css={styles.content}>
                        {props.data.map((item, index) => (
                            <div css={styles.row(open)} key={index} onClick={() => onRowClick(item, index)}>
                                {item.active && (
                                    <span css={styles.dot} />
                                )}
                                <C1 bold>{item.title}</C1>
                                <T2 color={'lowlight'}>{item.message}</T2>
                            </div>
                        ))}
                    </div>
                </ScrollView>
            </div>
        </div>
    )
};
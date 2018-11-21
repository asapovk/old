import React, { CSSProperties } from 'react';

export default (props: { color?: string, style?: CSSProperties }) => {
    let st0: CSSProperties = { fillRule: "evenodd", clipRule: "evenodd", fill: "#682F8B" };
    let st1: CSSProperties = { fillRule: "evenodd", clipRule: "evenodd", fill: "#D51067" };

    if (props.color) {
        st0.fill = props.color;
        st1.fill = props.color;
    }

    let style = props.style || {
        width: "100%"
    };

    return (
        <div style={style}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 300 106.3" xmlSpace="preserve">
                <path style={st0} d="M31.7,30.4c0.3-0.4,0.5-0.8,0.5-1.3c0-1.2-1-2.1-2.1-2.1c-0.7,0-1.3,0.3-1.7,0.8c-2.3,3-5.8,4.9-9.8,4.9
                    c-6.8,0-12.3-5.6-12.3-12.6c0-7,5.5-12.6,12.3-12.6c4,0,7.5,2,9.8,5c0.4,0.5,1,0.8,1.7,0.8c1.2,0,2.1-1,2.1-2.1c0-0.5-0.2-1-0.5-1.3
            c-3-3.7-7.7-6.1-12.9-6.1C9.7,3.7,2.3,11,2.3,20.1c0,9,7.4,16.4,16.6,16.4C24.1,36.5,28.7,34.1,31.7,30.4L31.7,30.4z"/>
        <path style={st0} d="M54.6,24.2c-0.3,0-0.6-0.1-0.9-0.4L42.3,11.2v22.3c0,1.1-0.9,2.1-2.1,2.1c-1.1,0-2.1-0.9-2.1-2.1v-27
                    c0-1.1,0.9-2.1,2.1-2.1c0.7,0,1.2,0.2,1.6,0.7l12.1,14c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l12.1-14
            c0.4-0.5,0.9-0.7,1.6-0.7c1.1,0,2.1,0.9,2.1,2.1v27c0,1.1-0.9,2.1-2.1,2.1c-1.1,0-2.1-0.9-2.1-2.1V11.2L55.5,23.9
            C55.2,24.1,54.9,24.2,54.6,24.2L54.6,24.2z"/>
        <path style={st0} d="M93,3.2c9.1,0,16.5,7.4,16.5,16.5c0,9.1-7.4,16.5-16.5,16.5s-16.5-7.4-16.5-16.5C76.5,10.6,83.9,3.2,93,3.2
                    L93,3.2z"/>
        <polygon style={st1} points="144.4,13.5 117.7,30.4 134.6,3.8 144.4,13.5 " />
                <path style={st0} d="M93,38.9c9.1,0,16.5,7.4,16.5,16.5c0,9.1-7.4,16.5-16.5,16.5c-4.9,0-9.4-2.2-12.4-5.6v11.7
                    c0,1.1-0.9,2.1-2.1,2.1c-1.1,0-2.1-0.9-2.1-2.1V41.8c0-1.1,0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1v2.7C83.6,41,88,38.9,93,38.9
            L93,38.9z"/>
        <path style={st0} d="M128.3,38.9c9.1,0,16.5,7.4,16.5,16.5c0,9.1-7.4,16.5-16.5,16.5s-16.5-7.4-16.5-16.5
                    C111.8,46.2,119.2,38.9,128.3,38.9L128.3,38.9z"/>
        <path style={st1} d="M181.7,39.7c-1.1,0-2.1,0.9-2.1,2.1v3.1c-3-3.5-7.5-5.8-12.5-5.8c-9,0-16.3,7-16.3,16.3
                    c0,9.9,6.6,16.3,16.3,16.3c5,0,9.5-2.2,12.5-5.8v1.5c0,5.6-4.7,10.1-10.8,10.7c-1,0.1-1.7,1-1.7,2.1c0,1.2,1,2.2,2.2,2.1
            c8.1-0.7,14.5-7.3,14.5-15.4V41.8C183.8,40.6,182.9,39.7,181.7,39.7z M179.6,55.4c0,6.9-5.6,12.5-12.5,12.4
            c-7.5,0-12.5-4.6-12.5-12.5c0-7.2,5.6-12.5,12.5-12.5C174.1,42.9,179.6,48.5,179.6,55.4L179.6,55.4z"/>
        <path style={st1} d="M223.4,69c0,1.1-0.9,2.1-2.1,2.1c-1.1,0-2.1-0.9-2.1-2.1v-3.1c-3,3.5-7.5,5.8-12.5,5.8c-9,0-16.3-7.3-16.3-16.3
                    V41.8c0-1.1,0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1v13.6c0,6.9,5.5,12.5,12.3,12.5c6.8,0,12.3-5.6,12.3-12.5V41.8
            c0-1.1,0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1V69L223.4,69z"/>
        <path style={st1} d="M254.3,52.8h-19.7v-11c0-1.1-0.9-2.1-2.1-2.1c-1.1,0-2.1,0.9-2.1,2.1V69c0,1.1,0.9,2.1,2.1,2.1
                    c1.1,0,2.1-0.9,2.1-2.1V56.9h19.7V69c0,1.1,0.9,2.1,2.1,2.1c1.1,0,2.1-0.9,2.1-2.1V41.8c0-1.1-0.9-2.1-2.1-2.1
            c-1.1,0-2.1,0.9-2.1,2.1V52.8L254.3,52.8z"/>
        <path style={st1} d="M295.7,39.7c-1.1,0-2.1,0.9-2.1,2.1v3c-3-3.5-7.5-5.8-12.5-5.8c-9,0-16.3,7.3-16.3,16.3c0,9,7.3,16.3,16.3,16.3
                    c5,0,9.5-2.2,12.5-5.8V69c0,1.1,0.9,2.1,2.1,2.1c1.1,0,2.1-0.9,2.1-2.1V41.8C297.8,40.6,296.9,39.7,295.7,39.7z M293.7,55.4
            c0,6.9-5.6,12.4-12.5,12.4c-6.9,0-12.5-5.6-12.5-12.5c0-6.9,5.6-12.5,12.5-12.5C288.1,42.9,293.7,48.5,293.7,55.4L293.7,55.4z"/>
        
                    
                        <path style={st0} d="M153.6,93.3c1.1,0,1.9,0.4,2.6,1.2c0.6,0.7,0.9,1.8,0.9,3c0,1.2-0.3,2.3-0.9,3c-0.6,0.7-1.5,1.2-2.6,1.2
                            c-1.1,0-1.9-0.4-2.6-1.2c-0.6-0.7-0.9-1.8-0.9-3c0-1.2,0.3-2.3,0.9-3C151.6,93.7,152.5,93.3,153.6,93.3L153.6,93.3z M155.5,94.9
                    c-0.5-0.6-1.1-0.9-1.9-0.9c-0.8,0-1.5,0.3-1.9,0.9c-0.5,0.6-0.7,1.4-0.7,2.5c0,1.1,0.3,1.9,0.7,2.5c0.5,0.6,1.1,0.9,1.9,0.9
                    c0.8,0,1.5-0.3,1.9-0.9c0.5-0.6,0.7-1.4,0.7-2.5C156.3,96.4,156,95.5,155.5,94.9z"/>
                <path style={st0} d="M230,93.3c1.1,0,1.9,0.4,2.6,1.2c0.6,0.7,0.9,1.8,0.9,3c0,1.2-0.3,2.3-0.9,3c-0.6,0.7-1.5,1.2-2.6,1.2
                            c-1.1,0-1.9-0.4-2.6-1.2c-0.6-0.7-0.9-1.8-0.9-3c0-1.2,0.3-2.3,0.9-3C228,93.7,228.9,93.3,230,93.3L230,93.3z M231.9,94.9
                    c-0.5-0.6-1.1-0.9-1.9-0.9c-0.8,0-1.5,0.3-1.9,0.9c-0.5,0.6-0.7,1.4-0.7,2.5c0,1.1,0.3,1.9,0.7,2.5c0.5,0.6,1.1,0.9,1.9,0.9
                    c0.8,0,1.5-0.3,1.9-0.9c0.5-0.6,0.7-1.4,0.7-2.5C232.7,96.4,232.4,95.5,231.9,94.9z"/>
                <path style={st0} d="M251.1,93.3c1.1,0,1.9,0.4,2.6,1.2c0.6,0.7,0.9,1.8,0.9,3c0,1.2-0.3,2.3-0.9,3c-0.6,0.7-1.5,1.2-2.6,1.2
                            c-1.1,0-1.9-0.4-2.6-1.2c-0.6-0.7-0.9-1.8-0.9-3c0-1.2,0.3-2.3,0.9-3C249.1,93.7,250,93.3,251.1,93.3L251.1,93.3z M253,94.9
                    c-0.5-0.6-1.1-0.9-1.9-0.9c-0.8,0-1.5,0.3-1.9,0.9c-0.5,0.6-0.7,1.4-0.7,2.5c0,1.1,0.3,1.9,0.7,2.5c0.5,0.6,1.1,0.9,1.9,0.9
                    c0.8,0,1.5-0.3,1.9-0.9c0.5-0.6,0.7-1.4,0.7-2.5C253.8,96.4,253.5,95.5,253,94.9z"/>
                <path style={st0} d="M212.8,94.7c1,0,1.8,0.3,2.4,0.9c0.6,0.6,0.9,1.5,0.9,2.5c0,1-0.3,1.9-0.9,2.5c-0.6,0.6-1.4,0.9-2.4,0.9
                            c-1,0-1.8-0.3-2.3-0.9c-0.6-0.7-0.9-1.6-0.9-2.5v-4.6h0.8v2.2C211,95,211.9,94.7,212.8,94.7L212.8,94.7z M210.4,98.1
                    c0,0.7,0.2,1.4,0.7,2c0.4,0.4,1,0.7,1.8,0.7c0.8,0,1.4-0.2,1.8-0.7c0.4-0.5,0.7-1.1,0.7-1.9c0-0.8-0.2-1.5-0.7-1.9
                    c-0.4-0.4-1-0.7-1.8-0.7c-0.8,0-1.4,0.3-1.8,0.7C210.6,96.7,210.4,97.3,210.4,98.1z"/>
                <path style={st0} d="M240.2,90.5c0.1-0.2,0.3-0.3,0.5-0.3c0.2,0.1,0.3,0.3,0.3,0.5c-0.2,0.6-0.5,1-0.9,1.4
                            c-0.4,0.3-0.9,0.5-1.5,0.5c-0.6,0-1.1-0.2-1.5-0.5c-0.4-0.3-0.7-0.8-0.9-1.4c-0.1-0.2,0.1-0.4,0.3-0.5c0.2-0.1,0.4,0.1,0.5,0.3
                    c0.1,0.4,0.3,0.7,0.6,0.9c0.3,0.2,0.6,0.3,1,0.3c0.4,0,0.8-0.1,1-0.3C239.9,91.3,240.1,90.9,240.2,90.5L240.2,90.5z M236.3,93.6
                    v4.8c0,0.6,0.1,1.3,0.6,1.8c0.4,0.4,0.9,0.6,1.6,0.6c0.7,0,1.3-0.2,1.7-0.6c0.4-0.4,0.6-1,0.6-1.8v-4.8h0.8v7.8h-0.8v-0.7l0,0.1
                    c-0.5,0.6-1.3,0.9-2.2,0.9c-0.9,0-1.7-0.3-2.2-0.9c-0.6-0.6-0.8-1.5-0.8-2.3v-4.8H236.3z"/>
                <path style={st0} d="M114.6,98.9c0.1-0.2,0.3-0.3,0.5-0.3c0.2,0.1,0.3,0.3,0.3,0.5c-0.2,0.8-0.7,1.4-1.2,1.8
                            c-0.6,0.4-1.2,0.7-2,0.7c-1.1,0-1.9-0.4-2.6-1.2c-0.6-0.7-0.9-1.8-0.9-3c0-1,0.3-2.2,0.9-3c0.6-0.7,1.5-1.2,2.5-1.2
                    c1.1,0,1.9,0.4,2.6,1.2c0.6,0.7,0.9,1.8,0.9,3v0.3c-2.1,0-4.1,0-6.2,0c0,0.9,0.3,1.7,0.7,2.2c0.5,0.6,1.1,0.9,1.9,0.9
                    c0.6,0,1.1-0.2,1.6-0.5C114.1,100,114.5,99.5,114.6,98.9L114.6,98.9z M114.8,97c-0.1-0.8-0.3-1.5-0.7-2c-0.5-0.6-1.1-0.9-1.9-0.9
                    c-0.8,0-1.5,0.3-1.9,0.9c-0.4,0.5-0.7,1.2-0.7,2H114.8z"/>
                <path style={st0} d="M174.9,98.9c0.1-0.2,0.3-0.3,0.5-0.3c0.2,0.1,0.3,0.3,0.3,0.5c-0.2,0.8-0.7,1.4-1.2,1.8
                            c-0.6,0.4-1.2,0.7-2,0.7c-1.1,0-1.9-0.4-2.6-1.2c-0.6-0.7-0.9-1.8-0.9-3c0-1,0.3-2.2,0.9-3c0.6-0.7,1.5-1.2,2.5-1.2
                    c1.1,0,1.9,0.4,2.6,1.2c0.6,0.7,0.9,1.8,0.9,3v0.3c-2.1,0-4.1,0-6.2,0c0,0.9,0.3,1.7,0.7,2.2c0.5,0.6,1.1,0.9,1.9,0.9
                    c0.6,0,1.1-0.2,1.6-0.5C174.4,100,174.7,99.5,174.9,98.9L174.9,98.9z M175.1,97c-0.1-0.8-0.3-1.5-0.7-2c-0.5-0.6-1.1-0.9-1.9-0.9
                    c-0.8,0-1.5,0.3-1.9,0.9c-0.4,0.5-0.7,1.2-0.7,2H175.1z"/>
                <path style={st0} d="M82.5,98.9c0.1-0.2,0.3-0.3,0.5-0.3c0.2,0.1,0.3,0.3,0.3,0.5c-0.2,0.8-0.6,1.4-1.2,1.9
                            c-0.5,0.4-1.2,0.7-2,0.7c-1.1,0-1.9-0.4-2.6-1.2c-0.6-0.7-0.9-1.8-0.9-3c0-1.2,0.3-2.3,0.9-3c0.6-0.7,1.5-1.2,2.6-1.2
                    c0.8,0,1.5,0.2,2.1,0.7c0.6,0.5,0.9,1.1,1.1,1.9c0,0.2-0.1,0.4-0.3,0.5c-0.2,0.1-0.4-0.1-0.5-0.3c-0.2-0.6-0.4-1.1-0.9-1.5
                    c-0.4-0.3-0.9-0.5-1.5-0.5c-0.8,0-1.5,0.3-1.9,0.9c-0.5,0.6-0.7,1.4-0.7,2.5c0,1.1,0.3,1.9,0.7,2.5c0.5,0.6,1.1,0.9,1.9,0.9
                    c0.6,0,1.1-0.2,1.5-0.5C82,100,82.3,99.5,82.5,98.9z"/>
                <path style={st0} d="M99.5,98.9c0.1-0.2,0.3-0.3,0.5-0.3c0.2,0.1,0.3,0.3,0.3,0.5c-0.2,0.8-0.6,1.4-1.2,1.9
                            c-0.6,0.4-1.2,0.7-2,0.7c-1.1,0-1.9-0.4-2.6-1.2c-0.6-0.7-0.9-1.8-0.9-3c0-1.2,0.3-2.3,0.9-3c0.6-0.7,1.5-1.2,2.6-1.2
                    c0.8,0,1.5,0.2,2.1,0.7c0.6,0.5,0.9,1.1,1.1,1.9c0.1,0.2-0.1,0.4-0.3,0.5c-0.2,0.1-0.4-0.1-0.5-0.3c-0.2-0.6-0.4-1.1-0.9-1.5
                    c-0.4-0.3-0.9-0.5-1.5-0.5c-0.8,0-1.5,0.3-1.9,0.9c-0.5,0.6-0.7,1.4-0.7,2.5c0,1.1,0.3,1.9,0.7,2.5c0.5,0.6,1.1,0.9,1.9,0.9
                    c0.6,0,1.1-0.2,1.5-0.5C99,100,99.3,99.5,99.5,98.9z"/>
                <path style={st0} d="M86.1,93.6v4.8c0,0.6,0.1,1.3,0.6,1.8c0.4,0.4,0.9,0.6,1.6,0.6c0.7,0,1.3-0.2,1.7-0.6c0.4-0.4,0.6-1,0.6-1.8
                            v-4.8h0.8v7.8h-0.8v-0.7l0,0.1c-0.5,0.6-1.3,0.9-2.2,0.9c-0.9,0-1.7-0.3-2.2-0.9c-0.6-0.6-0.8-1.5-0.8-2.3v-4.8H86.1z"/>
                <path style={st0} d="M262.1,101.4v-4.8c0-0.6-0.1-1.3-0.6-1.8c-0.4-0.4-0.9-0.6-1.6-0.6c-0.7,0-1.3,0.2-1.7,0.6
                            c-0.4,0.4-0.6,1-0.6,1.8v4.8h-0.8v-7.8h0.8v0.7l0.1-0.1c0.5-0.6,1.3-0.9,2.2-0.9c0.9,0,1.7,0.3,2.2,0.9c0.6,0.6,0.8,1.5,0.8,2.3
                    v4.8H262.1z"/>
                <path style={st0} d="M125.1,93.6v7.8h-0.8v-6.7l-2.6,2.9c-0.1,0.2-0.4,0.2-0.5,0l-2.6-2.9v6.7h-0.8v-7.8h0.5h0.3l2.9,3.2l2.9-3.2
                            H125.1z"/>
                <path style={st0} d="M147.8,93.6v7.8H147v-6.7l-2.6,2.9c-0.1,0.2-0.4,0.2-0.6,0l-2.6-2.9v6.7h-0.8v-7.8h0.8l2.9,3.2l2.9-3.2H147.8
                            z"/>
                        <path style={st0} d="M166.7,93.6v7.8h-0.8v-6.7l-2.6,2.9c-0.1,0.2-0.4,0.2-0.5,0l-2.6-2.9v6.7h-0.8v-7.8h0.8l2.9,3.2l2.9-3.2
                            H166.7z"/>
                <path style={st0} d="M134.3,93.6c0,2.6,0,5.2,0,7.8h-0.8v-1.1c-0.6,0.9-1.6,1.3-2.7,1.3c-1.1,0-1.9-0.4-2.6-1.2
                            c-0.6-0.7-0.9-1.8-0.9-3c0-1.2,0.3-2.3,0.9-3c0.6-0.7,1.5-1.2,2.6-1.2c1.1,0,2,0.4,2.7,1.3v-1.1H134.3L134.3,93.6z M133.5,97.5
                    v-0.1c0-1-0.3-1.9-0.7-2.4c-0.5-0.6-1.1-0.9-1.9-0.9c-0.8,0-1.5,0.3-1.9,0.9c-0.5,0.6-0.7,1.4-0.7,2.5c0,1.1,0.3,1.9,0.7,2.5
                    c0.5,0.6,1.1,0.9,1.9,0.9c0.8,0,1.5-0.3,1.9-0.9C133.2,99.4,133.5,98.5,133.5,97.5z"/>
                <path style={st0} d="M199.6,93.6c0,2.6,0,5.2,0,7.8h-0.8v-1.1c-0.6,0.9-1.6,1.3-2.7,1.3c-1.1,0-1.9-0.4-2.6-1.2
                            c-0.6-0.7-0.9-1.8-0.9-3c0-1.2,0.3-2.3,0.9-3c0.6-0.7,1.5-1.2,2.6-1.2c1.1,0,2,0.4,2.7,1.3v-1.1H199.6L199.6,93.6z M198.8,97.5
                    v-0.1c0-1-0.3-1.9-0.7-2.4c-0.5-0.6-1.1-0.9-1.9-0.9c-0.8,0-1.5,0.3-1.9,0.9c-0.5,0.6-0.7,1.4-0.7,2.5c0,1.1,0.3,1.9,0.7,2.5
                    c0.5,0.6,1.1,0.9,1.9,0.9c0.8,0,1.5-0.3,1.9-0.9C198.5,99.4,198.8,98.5,198.8,97.5z"/>
                <path style={st0} d="M279.7,93.6c0,2.6,0,5.2,0,7.8h-0.8v-1.1c-0.6,0.9-1.6,1.3-2.7,1.3c-1.1,0-1.9-0.4-2.6-1.2
                            c-0.6-0.7-0.9-1.8-0.9-3c0-1.2,0.3-2.3,0.9-3c0.6-0.7,1.5-1.2,2.6-1.2c1.1,0,2,0.4,2.7,1.3v-1.1H279.7L279.7,93.6z M278.9,97.5
                    v-0.1c0-1-0.3-1.9-0.7-2.4c-0.5-0.6-1.1-0.9-1.9-0.9c-0.8,0-1.5,0.3-1.9,0.9c-0.5,0.6-0.7,1.4-0.7,2.5c0,1.1,0.3,1.9,0.7,2.5
                    c0.5,0.6,1.1,0.9,1.9,0.9c0.8,0,1.5-0.3,1.9-0.9C278.6,99.4,278.9,98.5,278.9,97.5z"/>
                <polygon style={st0} points="178.8,93.6 178.8,97 183.2,97 183.2,93.6 184,93.6 184,101.4 183.2,101.4 183.2,97.7 178.8,97.7 
                    178.8,101.4 178,101.4 178,93.6"/>
                <polygon style={st0} points="219.1,93.6 219.1,97 223.5,97 223.5,93.6 224.3,93.6 224.3,101.4 223.5,101.4 223.5,97.7 219.1,97.7 
                    219.1,101.4 218.3,101.4 218.3,93.6"/>
                <path style={st0} d="M297.5,93.6v7.8h-0.8v-7.8H297.5L297.5,93.6z M291.7,94.7c1,0,1.8,0.3,2.4,0.9c0.6,0.6,0.9,1.5,0.9,2.5
                            c0,1-0.3,1.9-0.9,2.5c-0.6,0.6-1.4,0.9-2.4,0.9c-1,0-1.8-0.3-2.4-0.9c-0.6-0.7-0.9-1.6-0.9-2.5v-4.6h0.8v2.2
                    C289.9,95,290.7,94.7,291.7,94.7L291.7,94.7z M289.2,98.1c0,0.7,0.2,1.4,0.7,2c0.4,0.4,1,0.7,1.8,0.7c0.8,0,1.4-0.2,1.8-0.7
                    c0.4-0.5,0.7-1.1,0.7-1.9c0-0.8-0.2-1.5-0.7-1.9c-0.4-0.4-1-0.7-1.8-0.7c-0.8,0-1.4,0.3-1.8,0.7C289.5,96.7,289.2,97.3,289.2,98.1
                    z"/>
                <polygon style={st0} points="107.5,94.3 104.9,94.3 104.9,101.4 104.1,101.4 104.1,94.3 101.6,94.3 101.6,93.5 107.5,93.5" />
                        <polygon style={st0} points="191.4,94.3 188.9,94.3 188.9,101.4 188.1,101.4 188.1,94.3 185.6,94.3 185.6,93.5 191.4,93.5" />
                        <polygon style={st0} points="287,94.3 284.5,94.3 284.5,101.4 283.7,101.4 283.7,94.3 281.2,94.3 281.2,93.5 287,93.5" />
                        <polygon style={st0} points="201.3,101.4 204.1,93.6 205.3,93.6 208.2,101.4 207.3,101.4 204.7,94.2 202.1,101.4" />
                        <polygon style={st0} points="264.5,101.4 267.3,93.6 268.6,93.6 271.4,101.4 270.5,101.4 267.9,94.2 265.3,101.4" />
                    
                
            </svg>
        </div>
    );
}
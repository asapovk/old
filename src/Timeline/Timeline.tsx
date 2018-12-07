import React from 'react';
import { Flexbox } from '..';

interface IDot {
    value: string
    bottomTitle: string
    color?: string
}

interface ITimeline {
    leftTitle: string
    rightTitle: string
    dots: IDot[]
}

export default (props: ITimeline) => {

    return (
        <Flexbox flex={1} alignItems='center'>
            <div style={{
                display: 'flex',
                flex: '1',
                alignItems: 'center',
                position: 'absolute', top: 0, left: '0', right: '0', bottom: 0
            }}>
                {props.leftTitle && <div style={{ lineHeight: '20px', color: '#908E91', fontSize: '16px', marginRight: '8px', textAlign: 'left' }}>{props.leftTitle}</div>}
                <div style={{ display: 'flex', flex: '1 1 auto', alignItems: 'center', height: "4px", borderRadius: "2px", backgroundColor: "#C3C0C4" }} />
                {props.rightTitle && <div style={{ lineHeight: '20px', color: '#908E91', fontSize: '16px', marginLeft: '8px', textAlign: 'right' }}>{props.rightTitle}</div>}
            </div>
            <div style={{ display: 'flex', flex: '1 1 auto', justifyContent: 'space-around', margin: '0 100px' }}>
                {props.dots.map(dot => <Flexbox flexDirection='column' justifyContent='center' alignItems='center' flex={1}>
                    <div style={{
                        height: '24px',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        lineHeight: '24px',
                        paddingBottom: '0.25rem'
                    }}>{dot.value}</div>
                    <div
                        style={{
                            boxSizing: "border-box",
                            height: "22px",
                            width: "22px",
                            border: "4px solid #F5F2F7",
                            backgroundColor: "#6B368F",
                            borderRadius: '50%'
                        }} />
                    <div style={{
                        height: '20px',
                        fontSize: '16px',
                        lineHeight: '20px',
                        paddingTop: '0.5rem'
                    }}>{dot.bottomTitle}</div>
                </Flexbox>
                )}
            </div>
        </Flexbox >
    )
}
import React from 'react';
import { Flexbox } from '..';
import useStyles from '../../hooks/useTheme';

interface IDot {
    value: string
    bottomTitle: string
    color?: string
}

interface ITimeline {
    leftTitle?: string
    rightTitle?: string
    dots: IDot[]
}

export default (props: ITimeline) => {
    const styles = useStyles();

    return (
        <Flexbox flex={1} alignItems='center'>
            <div className='ui-timeline-layout' style={{ backgroundColor: styles.theme.background2.hex }}>
                {props.leftTitle && <div className='ui-timeline-layout-titleleft'>{props.leftTitle}</div>}
                <div className='ui-timeline-layout-line' style={{ backgroundColor: styles.theme.pale.hex }} />
                {props.rightTitle && <div className='ui-timeline-layout-titleright'>{props.rightTitle}</div>}
            </div>
            <div className='ui-timeline-dots'>
                {props.dots.map((dot, index) => (
                    <div key={index}>
                        <div className='ui-timeline-dots-top' children={dot.value} />
                        <div className='ui-timeline-dots-container' children={
                            <div className='ui-timeline-dots-container-dot' style={{
                                borderColor: styles.theme.background2.hex,
                                backgroundColor: styles.theme.highlight.hex
                            }} />
                        } />
                        <div className='ui-timeline-dots-bottom' children={dot.bottomTitle} />
                    </div>
                ))}
            </div>
        </Flexbox >
    )
}
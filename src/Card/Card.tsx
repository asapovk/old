import React, { useState, CSSProperties } from 'react';
import { Flexbox, Button } from "../";
import useStyles from '../hooks/useStyles';

interface CardAction {
    label: string
    onAction: () => void
}

interface Info {
    value: string
    description: string
}

interface CardProps {
    active?: boolean
    action?: CardAction
    title: string
    subtitle?: string
    info: Info
    style?: CSSProperties
}

export default (props: CardProps) => {

    const [active, setActive] = useState(props.active || false);
    const styles = useStyles();

    let classes = 'ui-card';
    if (active) classes += ' active';

    const { style, title, subtitle, action, info } = props;

    return (
        <Flexbox
            flexDirection='column'
            onClick={() => setActive(true)}
            className={classes}
            style={{ ...styles.card.main(active), ...style }}
        >
            <Flexbox flexDirection='column'>
                <Flexbox className='ui-card-title'>{title}</Flexbox>
                {subtitle && <Flexbox className='ui-card-subtitle'>{subtitle}</Flexbox>}
            </Flexbox>

            <Flexbox pt={'1.5rem'}>
                {info && (
                    <Flexbox
                        className='ui-card-counter'
                        flexDirection='column'
                        flex={1}
                    >
                        <Flexbox
                            className='ui-card-counter-value'
                            style={{ ...styles.card.counter(active) }}
                        >
                            {info.value}
                        </Flexbox>
                        <Flexbox className='ui-card-counter-description'>{info.description}</Flexbox>
                    </Flexbox>
                )}
                {action && (
                    <Flexbox alignItems='flex-end'>
                        <Button
                            decoration='highlight'
                            label={action.label}
                            inversion={active}
                            onClick={action.onAction}
                            size='small'
                            labelCase='upper'
                        />
                    </Flexbox>
                )}
            </Flexbox>
        </Flexbox>
    );
}
import React, { CSSProperties, ReactElement } from 'react';
import { Flexbox, Button } from '../';
import useStyles from '../hooks/useStyles';

interface ICardAction {
    label: string
    onAction: () => void
}

interface IInfo {
    value: string
    description: string
}

export interface ICard {
    title: string
    subtitle?: string
    info?: IInfo
    active?: boolean
    action?: ICardAction
    onClick?: () => void
    style?: CSSProperties
    children?: ReactElement<any>
}

export default (props: ICard) => {

    const styles = useStyles();

    let classes = 'ui-card';
    if (props.active) classes += ' active';

    const { style, title, subtitle, action, info } = props;

    return (
        <Flexbox
            flexDirection='column'
            onClick={() => props.onClick && props.onClick()}
            className={classes}
            style={{ ...styles.card.main(props.active), ...style }}
            flex={1}
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
                            style={{ ...styles.card.counter(props.active) }}
                        >
                            {info.value}
                        </Flexbox>
                        <Flexbox className='ui-card-counter-description'>{info.description}</Flexbox>
                    </Flexbox>
                )}
                {action && (
                    <Flexbox alignItems='flex-end' flexBasis={100}>
                        <Button
                            decoration='highlight'
                            label={action.label}
                            inversion={props.active}
                            onClick={action.onAction}
                            size='small'
                            labelCase='upper'
                            style={{ width: '100%' }}
                        />
                    </Flexbox>
                )}
            </Flexbox>
        </Flexbox>
    );
}
import React, { Fragment, useState } from 'react';
import { Flexbox } from '../../../Flexbox';
import { Icon } from '../../../Icon';
import { Select } from '../../../Select';
import useStyles from '../../../hooks/useStyles';
import { Button } from '../../../Button';

interface IProps {

}
/**
 * @deprecated slice 1 dec 2018
 */
export default (props: IProps) => {
    const styles = useStyles();

    const st = {
        root: {
            background: styles.theme.background2.hex,
        },
        title: {
            borderColor: styles.theme.pale.hex
        }
    }
    return (
        <Flexbox style={st.root} flex={1} flexDirection="column" className="ui-lkcomponent-main-scroll-view">
            <Flexbox
                className="ui-lkcomponent-main-scroll-view-title"
                alignItems="flex-end"
                justifyContent="space-between"
                style={st.title}
                children={(
                    <Fragment>
                        <h1>Мои услуги</h1>
                        <Button decoration="none" label="Показать все" />
                    </Fragment>
                )}
            />

        </Flexbox>
    )
}
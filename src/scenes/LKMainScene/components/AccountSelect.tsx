import React, { Fragment, useState } from 'react';
import { Flexbox } from '../../../Flexbox';
import { Icon } from '../../../Icon';
import { Select } from '../../../Select';
import useStyles from '../../../hooks/useStyles';
import useClass from '../../../hooks/useClass';

interface IProps {

}
export default (props: IProps) => {
    const styles = useStyles();
    const [accountSelectClassName, AccountSelectClassName] = useClass('ui-lkcomponent-account-select');

    const [addHover, setAddHover] = useState(false);

    const addMouseIn = () => setAddHover(true);
    const addMouseOut = () => setAddHover(false);

    const onSelectToggle = () => {
        AccountSelectClassName.toggleModifier('open');
    }

    const st = styles.scenes.lkmain.components.accountSelect;

    return (
        <div className={accountSelectClassName}>
            <h3>Лицевой счет</h3>
            <Flexbox>
                <Flexbox
                    flex={1}
                    children={(
                        <Flexbox
                            flex={1}
                            className="_field"
                            style={st.field}
                            onClick={onSelectToggle}
                            children={(
                                <Fragment>
                                    <Flexbox
                                        className="_text"
                                        flex={1}
                                        alignItems="center"
                                        style={st.accountText}
                                        children={"1234567890"}
                                    />
                                    <Icon type="down" style={st.dropIcon} />
                                </Fragment>
                            )}
                        />
                    )}
                />
                <Flexbox
                    style={st.add}
                    className="_add"
                    alignItems="center"
                    justifyContent="center"
                    onMouseEnter={addMouseIn}
                    onMouseLeave={addMouseOut}
                    children={(
                        <Icon type="add" style={st.addIcon} size={1.1} />
                    )}
                />
            </Flexbox>
        </div>
    )
}
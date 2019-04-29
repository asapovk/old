/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Dispatch, SetStateAction, useState } from 'react';
import { Flexbox } from '../../core';
import LoginView from './LoginView';
import MainView from './MainView';
import createStyles from './styles';

export type ViewType = 'Login' | 'Main';

export interface ViewProps {
    setView: Dispatch<SetStateAction<ViewType>>
}

export default () => {
    const [view, setView] = useState<ViewType>('Login');
    const styles = createStyles();

    const ViewSwitcher = () => {
        let View;
        switch (view) {
            case 'Login':
                View = LoginView;
                break;
            case 'Main':
                View = MainView;
                break;
        }

        return <View setView={setView} />
    }

    return (
        <Flexbox css={styles.container}>
            <div css={styles.background} />
            <ViewSwitcher />
        </Flexbox>
    )
}



// LOGIN VIEW
// <CSSTransition
//                 in={!main}
//                 timeout={duration}
//                 unmountOnExit
//                 addEndListener={(node) => {
//                     node.addEventListener('ontransitionend', () => setMain(true), true);
//                 }}
//             >
//                 {state => (
//                     <Flexbox flex={1} css={css({
//                         transition: `opacity ${duration}ms ease-in-out`,
//                         ...transitionStyles[state]
//                     })}>
//                         {/* <div style={{ backgroundColor: 'green', height: '100%', width: '100%' }}></div> */}
//                         <LoginView visible={!main} setMain={() => setMain(!main)} />
//                     </Flexbox>
//                 )}
//             </CSSTransition>
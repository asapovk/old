import React, { Fragment } from 'react';
import { Flexbox } from '../../../src';
import { useTheme } from '../../../src/hooks';
import '../../../src/Styles/scss/main.scss';

export default () => {

    const theme = useTheme().theme;
    console.log(theme);
    const colorStyles = (color, border) => {
        return {
            height: '2rem',
            width: '2rem',
            background: color,
            border: `1px solid ${border}`,
            marginRight: '1rem'
        }
    }

    const colorNameStyles = {
        color: theme.lowlight.rgb,
        marginRight: '1rem'
    }

    return (
        <Flexbox p={'3rem'} mt={'-3rem'} justifyContent='center'>
            <article>
                <h1 style={{ marginTop: 0 }}>Цвета пользовательского интерфейса</h1>
                <p>{'Передаются через React Context в объекте theme.<color>'}</p>
                <h2>Значения</h2>
                <Flexbox column alignItems='flex-start'>
                    <Flexbox alignItems='center' mb={'1rem'}>
                        <span style={colorStyles(theme.background.rgb, theme.pale.rgb)} />
                        <span className='t1' style={colorNameStyles}>background</span>
                        <span className='t1'>Фон страницы</span>
                    </Flexbox>
                    <Flexbox alignItems='center' mb={'1rem'}>
                        <span style={colorStyles(theme.interface.rgb, theme.pale.rgb)} />
                        <span className='t1' style={colorNameStyles}>interface</span>
                        <span className='t1'>Фон элемента</span>
                    </Flexbox>
                    <Flexbox alignItems='center' mb={'1rem'}>
                        <span style={colorStyles(theme.pale.rgb, theme.pale.rgb)} />
                        <span className='t1' style={colorNameStyles}>pale</span>
                        <span className='t1'>Границы и все, что наименее заметно</span>
                    </Flexbox>
                    <Flexbox alignItems='center' mb={'1rem'}>
                        <span style={colorStyles(theme.lowlight.rgb, theme.pale.rgb)} />
                        <span className='t1' style={colorNameStyles}>lowlight</span>
                        <span className='t1'>Все второстепенное относительно основного цвета</span>
                    </Flexbox>
                    <Flexbox alignItems='center' mb={'1rem'}>
                        <span style={colorStyles(theme.text.rgb, theme.pale.rgb)} />
                        <span className='t1' style={colorNameStyles}>text</span>
                        <span className='t1'>Основной цвет. Текст</span>
                    </Flexbox>
                    <Flexbox alignItems='center' mb={'1rem'}>
                        <span style={colorStyles(theme.highlight.rgb, theme.pale.rgb)} />
                        <span className='t1' style={colorNameStyles}>highlight</span>
                        <span className='t1'>Акцент</span>
                    </Flexbox>
                    <Flexbox alignItems='center' mb={'1rem'}>
                        <span style={colorStyles(theme.textOnAccent.rgb, theme.pale.rgb)} />
                        <span className='t1' style={colorNameStyles}>textOnAccent</span>
                        <span className='t1'>Текст на акцентоном фоне</span>
                    </Flexbox>
                    <Flexbox alignItems='center' mb={'1rem'}>
                        <span style={colorStyles(theme.accents.red.rgb, theme.pale.rgb)} />
                        <span className='t1' style={colorNameStyles}>accents.red</span>
                        <span className='t1'>Красный акцент</span>
                    </Flexbox>
                    <Flexbox alignItems='center' mb={'1rem'}>
                        <span style={colorStyles(theme.accents.green.rgb, theme.pale.rgb)} />
                        <span className='t1' style={colorNameStyles}>accents.green</span>
                        <span className='t1'>Зеленый акцент</span>
                    </Flexbox>
                    <Flexbox alignItems='center' mb={'1rem'}>
                        <span style={colorStyles(theme.accents.orange.rgb, theme.pale.rgb)} />
                        <span className='t1' style={colorNameStyles}>accents.orange</span>
                        <span className='t1'>Оранжевый акцент</span>
                    </Flexbox>
                    <Flexbox alignItems='center' mb={'1rem'}>
                        <span style={colorStyles(theme.accents.blue.rgb, theme.pale.rgb)} />
                        <span className='t1' style={colorNameStyles}>accents.blue</span>
                        <span className='t1'>Синий акцент</span>
                    </Flexbox>
                    <Flexbox alignItems='center' mb={'1rem'}>
                        <span style={colorStyles(theme.shadow.rgb, theme.pale.rgb)} />
                        <span className='t1' style={colorNameStyles}>shadow</span>
                        <span className='t1'>Тени</span>
                    </Flexbox>
                </Flexbox>
                <h2>Методы</h2>
                <Flexbox column alignItems='flex-start'>
                    <Flexbox alignItems='center' mb={'1rem'}>
                        <span className='t1' style={colorNameStyles}>{'<color>.rgb'}</span>
                        <span className='t1'>Возвращает цвет в RGB</span>
                    </Flexbox>
                    <Flexbox alignItems='center' mb={'1rem'}>
                        <span className='t1' style={colorNameStyles}>{'<color>.hex'}</span>
                        <span className='t1'>Возвращает цвет в HEX</span>
                    </Flexbox>
                    <Flexbox alignItems='center' mb={'1rem'}>
                        <span className='t1' style={colorNameStyles}>{'<color>.rgba(<number>)'}</span>
                        <span className='t1'>Возвращает цвет в RGBA c заданным значением прозрачности</span>
                    </Flexbox>
                </Flexbox>
            </article>
        </Flexbox>
    )
}
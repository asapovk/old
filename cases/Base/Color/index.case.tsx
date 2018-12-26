import React, { Fragment } from 'react';
import { Styles, Flexbox } from '../../../src';


export default class Story extends React.Component {
    render() {
        const colorStyles = (color, border) => {
            return {
                height: '2rem',
                width: '2rem',
                background: color,
                border: `1px solid ${border}`,
                marginRight: '1rem'
            }
        }

        const colorNameStyles = (styles) => {
            return {
                color: styles.theme.lowlight.rgb,
                marginRight: '1rem'
            }
        }
        return (
            <Styles>
                {styles =>
                    <Flexbox p={'3rem'} mt={'-3rem'} justifyContent='center'>
                        <article>
                            <h1 style={{ marginTop: 0 }}>Цвета пользовательского интерфейса</h1>
                            <p>{'Передаются через React Context в объекте styles.theme.<color>'}</p>
                            <h2>Значения</h2>
                            <Flexbox column alignItems='flex-start'>
                                <Flexbox alignItems='center' mb={'1rem'}>
                                    <span style={colorStyles(styles.theme.background.rgb, styles.theme.pale.rgb)} />
                                    <span className='t1' style={colorNameStyles(styles)}>background</span>
                                    <span className='t1'>Фон страницы</span>
                                </Flexbox>
                                <Flexbox alignItems='center' mb={'1rem'}>
                                    <span style={colorStyles(styles.theme.interface.rgb, styles.theme.pale.rgb)} />
                                    <span className='t1' style={colorNameStyles(styles)}>interface</span>
                                    <span className='t1'>Фон элемента</span>
                                </Flexbox>
                                <Flexbox alignItems='center' mb={'1rem'}>
                                    <span style={colorStyles(styles.theme.pale.rgb, styles.theme.pale.rgb)} />
                                    <span className='t1' style={colorNameStyles(styles)}>pale</span>
                                    <span className='t1'>Границы и все, что наименее заметно</span>
                                </Flexbox>
                                <Flexbox alignItems='center' mb={'1rem'}>
                                    <span style={colorStyles(styles.theme.lowlight.rgb, styles.theme.pale.rgb)} />
                                    <span className='t1' style={colorNameStyles(styles)}>lowlight</span>
                                    <span className='t1'>Все второстепенное относительно основного цвета</span>
                                </Flexbox>
                                <Flexbox alignItems='center' mb={'1rem'}>
                                    <span style={colorStyles(styles.theme.text.rgb, styles.theme.pale.rgb)} />
                                    <span className='t1' style={colorNameStyles(styles)}>text</span>
                                    <span className='t1'>Основной цвет. Текст</span>
                                </Flexbox>
                                <Flexbox alignItems='center' mb={'1rem'}>
                                    <span style={colorStyles(styles.theme.highlight.rgb, styles.theme.pale.rgb)} />
                                    <span className='t1' style={colorNameStyles(styles)}>highlight</span>
                                    <span className='t1'>Акцент</span>
                                </Flexbox>
                                <Flexbox alignItems='center' mb={'1rem'}>
                                    <span style={colorStyles(styles.theme.textOnAccent.rgb, styles.theme.pale.rgb)} />
                                    <span className='t1' style={colorNameStyles(styles)}>textOnAccent</span>
                                    <span className='t1'>Текст на акцентоном фоне</span>
                                </Flexbox>
                                <Flexbox alignItems='center' mb={'1rem'}>
                                    <span style={colorStyles(styles.theme.accents.red.rgb, styles.theme.pale.rgb)} />
                                    <span className='t1' style={colorNameStyles(styles)}>accents.red</span>
                                    <span className='t1'>Красный акцент</span>
                                </Flexbox>
                                <Flexbox alignItems='center' mb={'1rem'}>
                                    <span style={colorStyles(styles.theme.accents.green.rgb, styles.theme.pale.rgb)} />
                                    <span className='t1' style={colorNameStyles(styles)}>accents.green</span>
                                    <span className='t1'>Зеленый акцент</span>
                                </Flexbox>
                                <Flexbox alignItems='center' mb={'1rem'}>
                                    <span style={colorStyles(styles.theme.accents.orange.rgb, styles.theme.pale.rgb)} />
                                    <span className='t1' style={colorNameStyles(styles)}>accents.orange</span>
                                    <span className='t1'>Оранжевый акцент</span>
                                </Flexbox>
                                <Flexbox alignItems='center' mb={'1rem'}>
                                    <span style={colorStyles(styles.theme.accents.blue.rgb, styles.theme.pale.rgb)} />
                                    <span className='t1' style={colorNameStyles(styles)}>accents.blue</span>
                                    <span className='t1'>Синий акцент</span>
                                </Flexbox>
                                <Flexbox alignItems='center' mb={'1rem'}>
                                    <span style={colorStyles(styles.theme.shadow.rgb, styles.theme.pale.rgb)} />
                                    <span className='t1' style={colorNameStyles(styles)}>shadow</span>
                                    <span className='t1'>Тени</span>
                                </Flexbox>
                            </Flexbox>
                            <h2>Методы</h2>
                            <Flexbox column alignItems='flex-start'>
                                <Flexbox alignItems='center' mb={'1rem'}>
                                    <span className='t1' style={colorNameStyles(styles)}>{'<color>.rgb'}</span>
                                    <span className='t1'>Возвращает цвет в RGB</span>
                                </Flexbox>
                                <Flexbox alignItems='center' mb={'1rem'}>
                                    <span className='t1' style={colorNameStyles(styles)}>{'<color>.hex'}</span>
                                    <span className='t1'>Возвращает цвет в HEX</span>
                                </Flexbox>
                                <Flexbox alignItems='center' mb={'1rem'}>
                                    <span className='t1' style={colorNameStyles(styles)}>{'<color>.rgba(<number>)'}</span>
                                    <span className='t1'>Возвращает цвет в RGBA c заданным значением прозрачности</span>
                                </Flexbox>
                            </Flexbox>
                        </article>
                    </Flexbox>
                }
            </Styles>
        )
    }
}
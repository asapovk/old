import React, { Fragment } from 'react';
import { Icon, Flexbox } from '../../src';

export default class Story extends React.Component {
    render() {
        return (
            <Flexbox justifyContent="space-around" alignContent="center" p={40}>
                <style children='.desc{font-size: 14px; padding-top: 10px} .cont{font-size: 24px; display: flex; align-items: center; flex-direction: column}' />
                <div className='cont'><Icon type='add' /><span className='desc'>Add</span></div>
                <div className='cont'><Icon type='more' /><span className='desc'>more</span></div>
                <div className='cont'><Icon type='close' /><span className='desc'>close</span></div>
                <div className='cont'><Icon type='left' /><span className='desc'>left</span></div>
                <div className='cont'><Icon type='right' /><span className='desc'>right</span></div>
                <div className='cont'><Icon type='down' /><span className='desc'>down</span></div>
                <div className='cont'><Icon type='up' /><span className='desc'>up</span></div>
                <div className='cont'><Icon type='check' /><span className='desc'>check</span></div>
                <div className='cont'><Icon type='search' /><span className='desc'>search</span></div>
                <div className='cont'><Icon type='sync' /><span className='desc'>sync</span></div>
                <div className='cont'><Icon type='settings' /><span className='desc'>settings</span></div>
            </Flexbox>
        )
    }
}
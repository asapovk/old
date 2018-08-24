import React from 'react';
import { Finder, FinderNav, FinderSection } from '../src/Finder';
import { Checkbox } from '../src';

interface FinderProps {

}
class FinderStory extends React.Component<FinderProps> {
    state = {
        checked: false as boolean
    }
    render() {
        return (
            <div>
                <Checkbox checked={this.state.checked} onChange={() => this.setState({ checked: true })} label='store me' />
                <Finder filter={true} filterPlaceholder='search something'>
                    <FinderNav label='Fruits' filter={true} filterPlaceholder='choose your fruit'>
                        <FinderNav label='Apples'>
                            <FinderNav label='Macintosh'></FinderNav>
                            <FinderNav label='Granny Smith'></FinderNav>
                            <FinderNav label='Honeycrisp'></FinderNav>
                        </FinderNav>
                        <FinderNav label='Pears'>
                            <FinderNav label='Anjou'></FinderNav>
                            <FinderNav label='Bartlett'></FinderNav>
                        </FinderNav>
                    </FinderNav>
                    <FinderNav label='Two'>
                        <Checkbox checked={this.state.checked} onChange={() => this.setState({ checked: true })} label='store me' />
                    </FinderNav>
                    <FinderNav label='Three'></FinderNav>
                    <FinderNav label='Four'></FinderNav>
                    <FinderNav label='Five'></FinderNav>
                    <FinderNav label='Six'></FinderNav>
                    <FinderNav label='Seven'></FinderNav>
                    <FinderNav label='Eight'></FinderNav>
                    <FinderNav label='Nine'></FinderNav>
                    <FinderNav label='Ten'></FinderNav>
                    <FinderSection label='And other numbers'>
                        <FinderNav label='Ten'></FinderNav>
                        <FinderNav label='Eleven'></FinderNav>
                        <FinderNav label='Twelve'></FinderNav>
                        <FinderNav label='Thirteen'></FinderNav>
                        <FinderSection label='And other numbers'>
                            <FinderNav label='Ten'></FinderNav>
                            <FinderNav label='Eleven'></FinderNav>
                            <FinderNav label='Twelve'></FinderNav>
                            <FinderNav label='Thirteen'></FinderNav>
                        </FinderSection>
                    </FinderSection>
                </Finder>
            </div>
        )
    }
}

export default FinderStory
import React from 'react'
import { shallow } from 'enzyme'
import Headline from './index';


import { findByTestAttr, checkProps} from './../../../Utils';

const setUp = (props = {}) => {
    const component = shallow(<Headline {...props} />)
    return component;
}


describe('Headline Component', () => {

describe('Checking PropsTypes', () => {
    it('should not throw a warning', () => {
        const expectedProps = {
            header: "Test header as a string",
            desc: "Test desc",
            tempArr: [{
                fName: 'Test fName',
                lName: 'Test lName',
                email: "test@gmail.com",
                age: 99,
                onlineStatus: false
            }]
        }
        const propsErr = checkProps(Headline, expectedProps)
        expect(propsErr).toBeUndefined();
    })
})


    describe('Have props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header: "Test header",
                desc: "test description"
            }
            wrapper = setUp(props);
        })

        it("Should render without errors", () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        })

        it("Should render a H1", () => {
            const h1 = findByTestAttr(wrapper, 'header');
            expect(h1.length).toBe(1);
        })

        it("Should render a description", () => {
            const descript = findByTestAttr(wrapper, 'desc');
            expect(descript.length).toBe(1);
        })

    })

    describe('Have no props', () => {
        
    let wrapper;

        beforeEach(() => {    
            wrapper = setUp()
        })
        it("Should not render", () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent')
            expect(component.length).toBe(0);
        })


    })

})
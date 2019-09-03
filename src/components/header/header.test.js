import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

import {findByTestAttr} from '../../../Utils'

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component
}

describe("Header component", () => {

    // Used to save time from having to rewrite code for each test. not required. 
    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('should render without errors', () => {
        // Use the custom datatype instead of classnames in case class name changes later will break the test. 
       const wrapper = findByTestAttr(component, 'headerComponent')
       expect(wrapper.length).toBe(1)
    });

    it('should render a logo', () => {
        // Example using a classname to test
        const logo = component.find('.logoIMG')
        expect(logo.length).toBe(1);
    })

})

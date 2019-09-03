

 // Used to save time from having to rewrite code for each test. not required.
 export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

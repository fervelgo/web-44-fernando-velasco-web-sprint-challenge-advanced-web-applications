import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import BubblePage from './BubblePage';

const colors = [{
    color: "red",
    id: 1,
    code: {
        hex: "123456"
    }
},
{
    color: "blue",
    id: 2,
    code: {
        hex: "223456"
    }
}]


test("Renders without errors", ()=> {
    render (<BubblePage color={colors}/>)
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    //Keep in mind that our service is called on mount for this component.
});
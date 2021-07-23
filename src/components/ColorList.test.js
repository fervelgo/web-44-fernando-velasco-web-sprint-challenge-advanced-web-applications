import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";

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
}]import ColorList from './ColorList';



test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>)
});

test("Renders a list of colors without errors", () => {
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
});

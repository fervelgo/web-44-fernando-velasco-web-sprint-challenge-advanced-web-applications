import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

test("Renders without errors with blank color passed into component", () => {
    render(<Color color = {{color: "", id:"", code: {hex:""}}}/>)

});
  
test("Renders the color passed into component", () => {
    render(<Color color = {{color: "aqua", id:3, code: {hex:"#00ffff"}}}/>)

});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    
});
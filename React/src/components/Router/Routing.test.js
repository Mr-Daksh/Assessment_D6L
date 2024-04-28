import React from "react";
import {render, screen} from '@testing-library/react'
import { MemoryRouter, Route } from "react-router-dom";
import App from "../../App"; //Assuming this is your main app component
import Home from "./Home";
import About from "./About";

describe('App routing', () => {
    it('renders the Home component when the home route is accessed', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Home/>
            </MemoryRouter>
        );
        expect(screen.getByText('This is Home Page')).toBeInTheDocument();
    }),
    it('renders the About component when the home route is accessed', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <About/>
            </MemoryRouter>
        );
        expect(screen.getByText('Hello from About component')).toBeInTheDocument();
    })
})
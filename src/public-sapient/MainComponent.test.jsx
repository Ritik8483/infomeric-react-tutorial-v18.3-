import { render, screen } from "@testing-library/react"
import MainComponent from "./MainComponent"

test('Name appears correctly',()=>{
    render(<MainComponent/>);
    const textElement = screen.getByText(/Ritik/i);
    expect(textElement).toBeInTheDocument();
})
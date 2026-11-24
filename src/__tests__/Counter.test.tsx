import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

test("increments count when button is clicked", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText(/count is 0/));
    expect(screen.getByText(/count is 1/)).toBeTruthy();
});

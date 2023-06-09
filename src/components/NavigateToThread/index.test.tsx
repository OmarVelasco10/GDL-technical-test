import { screen, render, fireEvent } from "@testing-library/react";
import { NavigateToThread } from ".";

describe("Message form test", () => {
  const mockOnClick = jest.fn();

  it("Should render the Navigate to thread component", () => {
    render(<NavigateToThread onClick={mockOnClick} />);
    expect(screen.getByTestId("navigateToThread-component")).toBeInTheDocument();
  });

  it("Should render the blue button", () => {
    render(<NavigateToThread onClick={mockOnClick} />);
    expect(screen.getByTestId("blue-button")).toBeInTheDocument();
  });

  it("Should called the handleOnClick", () => {
    render(<NavigateToThread onClick={mockOnClick} />);

    fireEvent.click(screen.getByRole("button"));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});


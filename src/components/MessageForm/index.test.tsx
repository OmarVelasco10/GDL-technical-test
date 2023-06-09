import { screen, render, fireEvent } from "@testing-library/react";
import { MessageForm } from ".";

describe("Message form test", () => {
  const mockSendReplay = jest.fn();
  it("Should render the MessageForm component", () => {
    render(<MessageForm sendReplay={mockSendReplay} />);
    expect(screen.getByTestId("messageForm-component")).toBeInTheDocument();
  });

  it("Should render the textarea and the green button", () => {
    render(<MessageForm sendReplay={mockSendReplay} />);
    expect(screen.getByTestId("textarea-component")).toBeInTheDocument();
    expect(screen.getByTestId("green-button")).toBeInTheDocument();
  });

  it("Should called the handleOnClick", () => {
    render(<MessageForm sendReplay={mockSendReplay} />);

    fireEvent.click(screen.getByRole("button"));
    expect(mockSendReplay).toHaveBeenCalledTimes(1);
  });
});

import { screen, render } from "@testing-library/react";
import { ShowInformation } from ".";

describe("Message form test", () => {
  const Info = {
    from: "3122079227",
    text: "test",
    threadId: "123456789"
  }

  it("Should render the Navigate to thread component", () => {
    render(<ShowInformation from={Info.from} text={Info.text} />);
    expect(screen.getByTestId("showInformation-component")).toBeInTheDocument();
  });

  it("Should render the title, subtitle and Message component", () => {
    render(<ShowInformation from={Info.from} text={Info.text} />);
    expect(screen.getByTestId("from-title")).toBeInTheDocument();
    expect(screen.getByTestId("from-subtitle")).toBeInTheDocument();
    expect(screen.getByTestId("message-text")).toBeInTheDocument();
  });

});
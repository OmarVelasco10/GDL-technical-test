import { screen, render } from "@testing-library/react";
import { TextNotification } from ".";

describe("Text notification test", () => {
  const mockSendReplay = jest.fn();
  const mockNavigateToInboxThread = jest.fn();
  const Info = {
    from: "3122079227",
    text: "test",
    threadId: "123456789",
  };

  it("Should render the TextNotification component", () => {
    render(
      <TextNotification
        textMessage={Info}
        sendReply={mockSendReplay}
        navigateToInboxThread={mockNavigateToInboxThread}
      />
    );
    expect(screen.getByTestId("textNotification-component")).toBeInTheDocument();
  });

  it("Should render the NavigateToThread, ShowInformation and MessageForm component", () => {
    render(
      <TextNotification
        textMessage={Info}
        sendReply={mockSendReplay}
        navigateToInboxThread={mockNavigateToInboxThread}
      />
    );
    expect(screen.getByTestId("messageForm-component")).toBeInTheDocument();
    expect(screen.getByTestId("navigateToThread-component")).toBeInTheDocument();
    expect(screen.getByTestId("showInformation-component")).toBeInTheDocument();
  });
});

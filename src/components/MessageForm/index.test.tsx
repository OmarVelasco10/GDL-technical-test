import { screen, render } from "@testing-library/react";
import { MessageForm } from ".";

describe("Message form test", () => {
    it("Should render the MessageForm component", () => {
        render(
            <MessageForm sendReplay={ () => {}}/>
        )
        expect(screen.getByTestId("messageForm-component")).toBeInTheDocument();
    });

})
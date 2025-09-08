import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AuthPage from "../AuthPage";
import { message } from "antd";

jest.mock("antd", () => {
  const antd = jest.requireActual("antd");
  return {
    ...antd,
    message: {
      success: jest.fn(),
      error: jest.fn(),
    },
  };
});

describe("AuthPage", () => {
  const setup = (onAuthSuccess = jest.fn()) => {
    render(<AuthPage onAuthSuccess={onAuthSuccess} />);
    return { onAuthSuccess };
  };

  it("renders login form", () => {
    setup();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("shows error if email or password is empty", () => {
    setup();
    fireEvent.click(screen.getByRole("button", { name: /login/i }));
    expect(message.error).toHaveBeenCalledWith(
      "Please enter email and password"
    );
  });


  it("switches to register mode", () => {
    setup();
    fireEvent.click(screen.getByText(/register/i));
    expect(screen.getByText(/sign up to see photos/i)).toBeInTheDocument();
  });


});

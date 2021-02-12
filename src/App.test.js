import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./components/ContactForm";

test("Renders the ContactForm", () => {
    render(<ContactForm />)
})

test("Type in and submit form", () => {
    render(<ContactForm />)

    const firstNameInput = screen.getByPlaceholderText(/edd/i)
    const lastNameInput = screen.getByPlaceholderText(/burke/i)
    const emailNameInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i)
    const messsageNameInput = screen.getByLabelText(/message/i)
    const button = screen.getByRole("button")

    userEvent.type(firstNameInput, "Leon")
    userEvent.type(lastNameInput, "Nasswetter")
    userEvent.type(emailNameInput, "leon.nasswetter@gmail.com")
    userEvent.type(messsageNameInput, "Testing much wow")
    userEvent.click(button)

    expect(firstNameInput).toHaveValue("Leon")

})

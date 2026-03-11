import type { HTMLInputTypeAttribute } from "react";
import submitForm from "./submitForm";

export default function App() {
	return (
		<form
			// Ignore the onSubmit prop, it's used by GFE to
			// intercept the form submit event to check your solution.
			onSubmit={submitForm}
			action={
				"https://questions.greatfrontend.com/api/questions/contact-form"
			}
			method="POST"
		>
			<Input name="name" />
			<Input name="email" type="email" />
			<Input name="message" type="textarea" />
			<button type="submit">Send</button>
		</form>
	);
}

interface InputProps {
	name: string;
	type?: HTMLInputTypeAttribute | "textarea";
}

function Input({ name, type = "text" }: InputProps) {
	return (
		<>
			<label htmlFor={name}>
				{name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
			</label>
			{type === "textarea" ? (
				<textarea name={name} id={name} />
			) : (
				<input type={type} id={name} name={name} />
			)}
		</>
	);
}

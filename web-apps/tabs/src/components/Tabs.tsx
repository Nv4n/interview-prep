import { act, useState, type MouseEvent } from "react";

const TABS_LABELS = ["HTML", "CSS", "JavaScript"];
const TABS_CONTENT = {
	html: `The HyperText Markup Language or HTML is the standard
						markup language for documents designed to be displayed
						in a web browser.`,
	css: `Cascading Style Sheets is a style sheet language used
						for describing the presentation of a document written in
						a markup language such as HTML or XML.`,
	javascript: `JavaScript, often abbreviated as JS, is a programming
						language that is one of the core technologies of the
						World Wide Web, alongside HTML and CSS.`,
};

export default function Tabs() {
	const [activeTab, setActiveTab] = useState("html");
	function activateTab(event: MouseEvent) {
		const btn = event.target as HTMLButtonElement;

		setActiveTab(btn.dataset.activateTab || "html");
	}

	return (
		<div>
			<div>
				{TABS_LABELS.map((label) => {
					const attribute = label.toLowerCase();
					return (
						<>
							<button
								onClick={activateTab}
								data-activate-tab={attribute}
								data-toggled={
									activeTab === attribute ? "true" : "false"
								}
							>
								{label}
							</button>
						</>
					);
				})}
			</div>
			<div>
				{activeTab && (
					<p>
						{TABS_CONTENT[activeTab as keyof typeof TABS_CONTENT]}
					</p>
				)}
			</div>
		</div>
	);
}

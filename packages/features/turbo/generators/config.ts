import { PlopTypes } from "@turbo/gen";

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
	plop.setGenerator("react-feature", {
		description: "Adds new react feature",
		prompts: [
			{
				type: "input",
				name: "name",
				message:" What is the name of the feature?",
			},
		],
		actions: [
			{
				type: "add",
				path: "../{{camelCase name}}/{{camelCase name}}.tsx",
				templateFile: "templates/feature.hbs",
			},
			{
				type: "add",
				path: "../{{camelCase name}}/index.tsx",
				templateFile: "templates/featureIndex.hbs",
			},
			{
				type: "add",
				path: "../{{camelCase name}}/package.json",
				templateFile: "templates/package.hbs",
			},
			{
				type: "add",
				path: "../{{camelCase name}}/tsconfig.json",
				templateFile: "templates/tsconfig.hbs",
			},
		],
	});
}

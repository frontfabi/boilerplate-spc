module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Criando componente 🧙',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'Nome:'
      },
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/{{pascalCase name}}/index.tsx',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/ComponentIndex.tsx.hbs',
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/{{pascalCase name}}/styles.ts',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/ComponentStyles.ts.hbs',
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/{{pascalCase name}}/test.tsx',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/ComponentTests.tsx.hbs',
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/{{pascalCase name}}/stories.tsx',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/ComponentStories.tsx.hbs',
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/types/{{pascalCase name}}.types.ts',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/ComponentTypes.ts.hbs',
      },
      {
        // Add a new file
        type: 'append',
        // Path for the new file
        path: 'src/types/index.ts',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/ExportType.txt.hbs',
      },
      {
        // Add a new file
        type: 'append',
        // Path for the new file
        path: 'src/components/index.ts',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/ExportFile.txt.hbs',
      },
    ],
  });
};
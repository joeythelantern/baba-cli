import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import inquirer, { ListQuestion, Question } from 'inquirer';

export interface CliOptions {
    projectName: string;
    templateName: string;
    templatePath: string;
    tartgetPath: string;
}

/** path variables */
const fileName = fileURLToPath(import.meta.url);
const directoryName = dirname(fileName);
const currentDirectory = process.cwd();

/** variables for questions */
const q_template_choices = fs.readdirSync(path.join(directoryName, 'templates'));

/** questions */
const q_template: ListQuestion = {
    name: 'template',
    type: 'list',
    message: 'What template would you like to use for your project?',
    choices: q_template_choices
};

async function runProjectBuilder() {
    try {
        const answers = await inquirer.prompt([q_template]);

        console.log(answers);
    } catch (error) {
        console.error(error);
    }
}

runProjectBuilder();

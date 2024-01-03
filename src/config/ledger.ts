const apiBasic = {
    name: 'api-basic',
    devDependencies: {
        '@types/express': '^4.17.21',
        '@types/jest': '29.5.5',
        '@types/node': '^20.10.6',
        '@types/supertest': '^6.0.2',
        jest: '^29.7.0',
        supertest: '^6.3.3',
        'ts-jest': '^29.1.1',
        'ts-node': '^10.9.2',
        typescript: '^5.3.3'
    },
    dependencies: {
        express: '^4.18.2'
    }
};

const apiWithDecorators = {
    name: 'api-basic',
    devDependencies: {
        '@types/express': '^4.17.21',
        '@types/jest': '29.5.5',
        '@types/node': '^20.10.6',
        '@types/supertest': '^6.0.2',
        jest: '^29.7.0',
        supertest: '^6.3.3',
        'ts-jest': '^29.1.1',
        'ts-node': '^10.9.2',
        typescript: '^5.3.3'
    },
    dependencies: {
        express: '^4.18.2',
        'reflect-metadata': '^0.2.1'
    }
};

const projects = {
    'Basic API': apiBasic,
    'Routing with Decorators': apiWithDecorators
};

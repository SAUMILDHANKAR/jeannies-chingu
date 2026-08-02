module.exports = {
preset: 'ts-jest',
testEnvironment: 'jsdom',

globals: {
'ts-jest': {
tsconfig: 'tsconfig.app.json',
},
},

moduleNameMapper: {
'\.(css|less|scss|sass)$': 'identity-obj-proxy',
},

setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};


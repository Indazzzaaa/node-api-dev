module.exports = {
    preset: 'ts-jest', // Use ts-jest to compile TypeScript
    testEnvironment: 'node', // Test environment for Node.js
    moduleFileExtensions: ['ts', 'tsx', 'js'], // File extensions Jest should handle
    transform: {
        '^.+\\.ts?$': 'ts-jest', // Use ts-jest for transforming TypeScript files
    },
};

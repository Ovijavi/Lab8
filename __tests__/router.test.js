/**
 * @jest-environment jsdom
 */
// import { router } from '../scripts/router.js';
import { pushToHistory } from '../scripts/router.js';

describe('settings tests', () => {
    test('test if setting state is pushed to history', () => {
        let returnedHistory = pushToHistory('settings', 0);
        expect(returnedHistory.state).toEqual({ page: "settings" });
    });

    test('test if history is correct length', () => {
        let currLength = history.length;
        let returnedHistory = pushToHistory('settings', 0);
        expect(returnedHistory.length).toBe(currLength + 1);
    });
});

describe('entry tests', () => {
    test('test if entry state is pushed to history', () => {
        let returnedHistory = pushToHistory('entry', 0);
        expect(returnedHistory.state).toEqual({ page: `entry${0}` });
    });

    test('test if history is correct length', () => {
        let currLength = history.length;
        let returnedHistory = pushToHistory('entry', 0);
        expect(returnedHistory.length).toBe(currLength + 1);
    });
});

describe('default tests', () => {
    test('test if default state is pushed to history', () => {
        let returnedHistory = pushToHistory('', 0);
        expect(returnedHistory.state).toEqual({});
    });

    test('test if history is correct length', () => {
        let currLength = history.length;
        let returnedHistory = pushToHistory('', 0);
        expect(returnedHistory.length).toBe(currLength + 1);
    });
});
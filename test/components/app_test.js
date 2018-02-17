import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests
describe('App', () => {

    // Use 'it' to test a single attribute of a target
    it('shows the correct text', () => {

        // create an instance of App
        const component = renderComponent(App);

        // Use 'expect' to make an 'assertion' about a target
        // i.e. what we are EXPECTING to output
        expect(component).to.contain('React simple starter');

    });
    
});

// the format above is a core part of how Mocha runs tests
// i.e. when Mocha first executes, the tests are not immediately ran.
// Mocha first takes record of the functions that we declared and passes them into the 'describe' and 'it' blocks to queue these tests up to  run in the future
// the reason why Mocha does this is to safely execute the code, which can potentially throw A LOT of errors, which can lead the program/app to crash
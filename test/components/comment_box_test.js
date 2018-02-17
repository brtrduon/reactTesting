import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
    let component;
    // component will be initialized as undefined before the 'beforeEach' function kicks in

    beforeEach(() => {
        component = renderComponent(CommentBox);
    });
    // the reason why we do this is because we run a new instance of 'commentbox' before each block
    // then we run the expectation with the new instance of 'commentbox'

    it('has a text area', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });
});
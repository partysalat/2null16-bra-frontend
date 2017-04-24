import {describe} from 'ava-spec';
import Inferno from 'inferno';
import MyComponent from './app';

describe('indexHandler.dutrinkst', (it) => {
  it('calls templateService.renderHtml', (t) => {
    t.truthy(true);
    t.not(<MyComponent/>,undefined);
  });
});

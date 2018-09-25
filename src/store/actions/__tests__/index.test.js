import {
  saveSuggestion,
  saveOffer,
} from 'store/actions';
import {
  SAVE_SUGGESTION,
  SAVE_OFFER,
} from 'store/actions/types';

describe('saveSuggestion', () => {
  it('has the correct type', () => {
    const action = saveSuggestion();
    expect(action.type).toEqual(SAVE_SUGGESTION);
  });

  it('has the correct payload', () => {
    const action = saveSuggestion('New Suggestion');
    expect(action.payload).toEqual('New Suggestion');
  });
});

describe('saveHelpOffer', () => {
  it('has the correct type', () => {
    const action = saveOffer();
    expect(action.type).toEqual(SAVE_OFFER);
  });

  it('has the correct payload', () => {
    const action = saveOffer('Help Offer');
    expect(action.payload).toEqual('Help Offer');
  });
});

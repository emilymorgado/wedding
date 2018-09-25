import {
  saveSuggestion,
  saveHelpOffer,
} from 'store/actions';
import {
  SAVE_SUGGESTION,
  ADD_HELP,
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
    const action = saveHelpOffer();
    expect(action.type).toEqual(ADD_HELP);
  });

  it('has the correct payload', () => {
    const action = saveHelpOffer('Help Offer');
    expect(action.payload).toEqual('Help Offer');
  });
});

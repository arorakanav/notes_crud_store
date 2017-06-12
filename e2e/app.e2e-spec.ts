import { NotesAnullarCliPage } from './app.po';

describe('notes-anullar-cli App', () => {
  let page: NotesAnullarCliPage;

  beforeEach(() => {
    page = new NotesAnullarCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

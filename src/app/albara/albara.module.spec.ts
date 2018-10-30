import { AlbaraModule } from './albara.module';

describe('AlbaraModule', () => {
  let albaraModule: AlbaraModule;

  beforeEach(() => {
    albaraModule = new AlbaraModule();
  });

  it('should create an instance', () => {
    expect(albaraModule).toBeTruthy();
  });
});

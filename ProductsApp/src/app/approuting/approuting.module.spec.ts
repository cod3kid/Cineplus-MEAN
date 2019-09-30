import { ApproutingModule } from './approuting.module';

describe('ApproutingModule', () => {
  let approutingModule: ApproutingModule;

  beforeEach(() => {
    approutingModule = new ApproutingModule();
  });

  it('should create an instance', () => {
    expect(approutingModule).toBeTruthy();
  });
});

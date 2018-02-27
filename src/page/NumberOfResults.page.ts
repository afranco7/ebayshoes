import { $, ElementFinder, promise } from 'protractor';

export class NumberOfResultsPage {
  private get getNumberOfResults(): ElementFinder {
    return $('span.rcnt');
  }

  public showNumberOfResults(): promise.Promise<string> {
    return this.getNumberOfResults.getText();
  }
}

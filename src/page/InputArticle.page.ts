import { $, ElementFinder, promise } from 'protractor';

export class InputArticlePage {
 private get inputArticle(): ElementFinder {
   return $('#gh-ac');
 }

 public enterSearchValues(value): promise.Promise<void> {
   return this.inputArticle.sendKeys(value);
 }
}
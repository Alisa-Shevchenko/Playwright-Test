import { Page } from 'playwright';

export default class MainPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;

    }


    async getAllCategoriesText(): Promise<string[]> {
        const actualCategoriesText: string[] = [];
        const expandedElementsCount: number = await this.page.locator('.card-body').count();

        for (let index = 0; index < expandedElementsCount; index++) {
            let textElement: string = await this.page.locator('.card-body').nth(index).innerText();
            actualCategoriesText.push(textElement);

        }
        return actualCategoriesText;
    }
}
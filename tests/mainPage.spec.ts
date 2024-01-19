// Завдання 1 
// Зайти на https://demoqa.com/
// Перевірити чи всі категорії відображаються. 

import { test, expect } from '@playwright/test';
import { expectedCategoriesText } from '../test-data/mainPage';
import MainPage from '../pageObject/mainPage';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test.describe('mainPage', async () => {

    test('All categories are displayed', async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.getAllCategoriesText();
        const actualCategoriesText = await mainPage.getAllCategoriesText();
        expect(actualCategoriesText).toEqual(expectedCategoriesText);
    });
});

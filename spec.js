'use strict'

describe('suite', function () {
let URL = 'http://maxcabrera.com/code/todo-list/';
let input = $('input.enter-todo');
let newtask = $('todo-list');
let allcheckboxes = element.all(by.css('.todo-container [type="checkbox"]'));
let list = element.all(by.className('Started'));

     it('create task', function () {
        browser.get(URL);
        expect(browser.getTitle()).toBe('Angular2 Seed');
        input.click();
        input.sendKeys('r',protractor.Key.ENTER);
        expect(newtask.getText()).toContain('R');
    })

     it('delete one task', function () {
        browser.get(URL);
        expect(browser.getTitle()).toBe('Angular2 Seed');
        allcheckboxes.get(0).click();
        expect(list.get(0).getText()).not.toContain('Read Parenting Books :)');
    })

     it('delete all tasks', function () {
        browser.get(URL);
        expect(browser.getTitle()).toBe('Angular2 Seed');
        allcheckboxes.click();
        expect(allcheckboxes.count()).toBe(0);
    })
})
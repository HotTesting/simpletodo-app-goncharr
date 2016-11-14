describe('suite', function () {
let URL = 'http://maxcabrera.com/code/todo-list/';
let input = $('input.enter-todo');
let newtask = $('todo-list');
let alltasks = element.all(by.css('.todo-container [type="checkbox"]'));
let general = element(by.binding('Started'));

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
        expect(general.getText()).toBe('Master Angular 2');
        /*expect(last.getText()).not.toContain('build a robot');*/
    })

    it('delete task', function () {
        browser.get(URL);
        expect(browser.getTitle()).toBe('Angular2 Seed');
        alltasks.click();
        expect(alltasks.count()).toBe(0);
    })
})
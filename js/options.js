var main_tabs = new Tabs('#main_tabs');

document.addEventListener('optionsPageReady', function () {
    /* Options page is ready. Write your code here */

    // This event will fire when option is saved to storage (with success or error)
    // event.detail.success = true (on success) or event.detail.success = false (on error)
    // event.detail.val is option which was saved
    document.addEventListener('optionSaved', function (event) {
        console.log('Option saved. ', event.detail);
    });
});
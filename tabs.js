const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[roll="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(e) {
    // hide all tab panels
    tabPanels.forEach(function(panel) {
        panel.hidden = true;
    })
    // mark all tabs as unselected
    // mark the clicked tab as selected
    // find the associated tab panel and show it
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
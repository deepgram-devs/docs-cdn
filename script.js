/**
 * make top-nav external links target="_blank"
 */
function convertHttpLinkstoExternal() {
  var external = document.querySelectorAll('[target="_self"][to*="https://"]');

  external.forEach(function (el) {
    el.href = el.getAttribute("to");
    el.target = "_blank";
  });
}

/**
 * Exclude the playground from fullstory.
 */
function excludePlayergroundFromAnalytics() {
  var playground = document.getElementById("ReferencePlayground");
  if (playground) {
    playground.classList.add("fs-exclude");
    playground.setAttribute("data-heap-redact-text", "");
  }
}

var ctActiveButtonClass = "CodeTabs_active";
var ctBlockQuery = ".CodeTabs .CodeTabs-inner pre";
var ctButtonQuery = ".CodeTabs .CodeTabs-toolbar button";
var ctActiveItemQuery = ".CodeTabs ." + ctActiveButtonClass;
var ctStorageKey = "defaultCode";

function resetDefaultCodeBlocks() {
  for (const codeBlock of document.querySelectorAll(".CodeTabs_initial")) {
    codeBlock.classList.remove("CodeTabs_initial");
  }
}

function getCtDefaults() {
  var ctUserLanguage = localStorage.getItem(ctStorageKey);

  if (!ctUserLanguage) {
    ctUserLanguage = document.querySelector(ctButtonQuery).textContent;
  }

  return ctUserLanguage;
}

function activateCtBlock(button) {
  const toolbar = button.parentNode;
  const index = Array.prototype.indexOf.call(toolbar.children, button);
  const block = toolbar.parentNode;
  const relatedCode = block.querySelectorAll(ctBlockQuery)[index];

  relatedCode.classList.add(ctActiveButtonClass);
}

function syncCtLanguages(language) {
  if (!language) {
    language = getCtDefaults();
  }

  for (const element of document.querySelectorAll(ctActiveItemQuery)) {
    element.classList.remove(ctActiveButtonClass);
  }

  for (const button of document.querySelectorAll(ctButtonQuery)) {
    if (button.textContent.includes(language)) {
      button.classList.add(ctActiveButtonClass);

      activateCtBlock(button);
    }
  }
}

function registerCtButtonEvents() {
  for (const button of document.querySelectorAll(ctButtonQuery)) {
    button.addEventListener("click", function (el) {
      localStorage.setItem(ctStorageKey, el.currentTarget.textContent);

      syncCtLanguages(el.currentTarget.textContent);
    });
  }
}

/**
 * Registers a MutationObserver to the first object with the specified value of the ID attribute.
 * @param {string} elementId String that specifies the ID value.
 */
function registerObserverById(elementId) {
  /**
   * Get element to observe
   */
  const targetNode = document.getElementById(elementId);

  if (targetNode) {
    /**
     * Options for the observer (which mutations to observe).
     */
    const config = { childList: true, subtree: true };

    /**
     * Callback function to execute when mutations are observed.
     */
    const callback = () => {
      observableChanges();
    };

    /**
     * Create an observer instance linked to the callback function.
     */
    const observer = new MutationObserver(callback);

    /**
     * Start observing the target node for configured mutations.
     */
    observer.observe(targetNode, config);
  }
}

/**
 * Changes once the page has initialized.
 */
function launchChanges() {
  convertHttpLinkstoExternal();
  excludePlayergroundFromAnalytics();
  resetDefaultCodeBlocks();
  syncCtLanguages();
  registerCtButtonEvents();
  console.clear();
}

/**
 * Changes that run when #Explorer mutations are observed.
 */
function observableChanges() {
  convertHttpLinkstoExternal();
  excludePlayergroundFromAnalytics();
  resetDefaultCodeBlocks();
  syncCtLanguages();
  registerCtButtonEvents();
}

window.onload = function () {
  // Initial page changes.
  launchChanges();
  registerObserverById("ssr-main"); // body by ID
};

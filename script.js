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
  console.clear();
}

/**
 * Changes that run when #Explorer mutations are observed.
 */
function observableChanges() {
  convertHttpLinkstoExternal();
  excludePlayergroundFromAnalytics();
}

window.onload = function () {
  // Initial page changes.
  launchChanges();
  registerObserverById("ssr-main"); // body by ID
};

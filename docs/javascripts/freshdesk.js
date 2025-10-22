// Replace YOUR_WIDGET_ID with your Freshdesk/Freshworks widget id
window.fwSettings = { widget_id: YOUR_WIDGET_ID };
!(function () {
  if ("function" != typeof window.FreshworksWidget) {
    var n = function () { n.q.push(arguments) }; n.q = [], window.FreshworksWidget = n;
  }
  var t = document.createElement("script");
  t.async = !0, t.src = "https://widget.freshworks.com/widgets/YOUR_WIDGET_ID.js";
  t.charset = "utf-8", document.head.appendChild(t);
})();

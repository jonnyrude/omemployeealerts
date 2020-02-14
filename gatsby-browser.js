/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
export const onServiceWorkerUpdateFound = () => {
  const showNotification = () => {
    Notification.requestPermission(result => {
      if (result === "granted") {
        navigator.serviceWorker.ready.then(registration => {
          registration.showNotification("Update", {
            body: "A new alert is available from OM",
            icon: "link-to-your-icon",
            vibrate: [200, 100, 200, 100, 200, 100, 400],
            tag: "test-alert",
            // actions: [
            //   // you can customize these actions as you like
            //   {
            //     action: doSomething(), // you should define this
            //     title: "update",
            //   },
            //   {
            //     action: doSomethingElse(), // you should define this
            //     title: "ignore",
            //   },
            // ],
          })
        })
      }
    })
  }

  showNotification()
}

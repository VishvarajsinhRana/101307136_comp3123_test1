// After a 500ms timeout, this method resolves a message.
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(()=>{resolve({ message: "delayed success!" });
  }, 500);
  });

//An error message is rejected by this method after a 500ms delay.
const rejectPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(()=>{reject({ error: "delayed exception!" });
  }, 500);
  });

resolvedPromise().then((msg) => console.log(msg));
rejectPromise().catch((msg) => console.error(msg));

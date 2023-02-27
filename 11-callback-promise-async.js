setTimeout(() => {
    console.log('1C');
    setTimeout(() => { 
        console.log('2C');
        setTimeout(() => { 
            console.log('3C');
        }, 1000);
    }, 1000);
}, 1000);

const timeout = (time) => new Promise(resolve => setTimeout(resolve, time));
timeout(1000)
  .then(() => {
    console.log('1P');
    return timeout(1000);
  })
  .then(() => {
    console.log('2P');
    return timeout(1000);
  })
  .then(() => {
    console.log('3P');
  });

const logDelayedMessages = async () => {
    await timeout(1000);
    console.log('1A');
    await timeout(1000);
    console.log('2A');
    await timeout(1000);
    console.log('3A');
};
   
logDelayedMessages();

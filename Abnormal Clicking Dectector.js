//Check for abnormal Clicking
function checkAbnormalCLicking() {
    const blankPeriod = getblankPeriod();


    //Check for abnormal blank period
    if (blankPeriod == 0) {
        console.log('Abnormal click activity detected');
        // Send alert if diff = 0
        sendAlert('Abnormal click activity detected');
    }

    }

    //Get blank period
    function getblankPeriod() {
        const clicks = [];
        let startTime = Data.now();

        // Record blank period between clicks 10 second
        while (Data.now() - startTime < 10000) {
            //listen for 'click' event
            document.addEventListener('click', () => {
            //record time as user
                clicks.push(Date.now());
            });
        }
        //Calculate average clicking time period in 'clicks' lisk
        for (let i = 0; i < clicks.length - 1; i++) {
            const diff = Math.abs(clicks[i] - clicks[i +1]);
            sum += diff;
        }
        //average blank period
        const blankPeriod = sum / (clicks.length -1);
        //out put the average blank period to 'blankPeriod'
        console.log(blankPeriod);
        //return
        return blankPeriod;

    }
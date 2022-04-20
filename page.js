import wixLocation from 'wix-location';
import { testClicks } from 'backend/updateClicks.jsw'


$w.onReady(async function () {
    /**
    * Check if clicks in LinkClicks lower than LIMIT; if so, redirect us to
    * TARGET, otherwise change the text of TEXT_ID to FAIL_TEXT.
    */
    const ans = await testClicks();
    if (ans.answer) {
        wixLocation.to(ans.data);
    }
    else {
        $w(ans.data.id).text = ans.data.text;
    }
});
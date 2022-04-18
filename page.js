import wixData from 'wix-data';
import wixLocation from 'wix-location';
import { updateClicks } from 'backend/updateClicks.jsw'

import * as conf from "public/ClickConfig/ClickConfig"

$w.onReady(function () {
    /**
     * Check if clicks in LinkClicks lower than LIMIT, if so redirect us to TARGET.
     */
    wixData.get(conf.COLLECTION, conf.ITEM_NAME)
        .then(ans => {
            if (ans.clicks < conf.LIMIT) {
                updateClicks(ans[conf.FIELD_NAME])
                    .then(ans => {
                        wixLocation.to(conf.TARGET);
                    });

            } else
                $w(conf.TEXT_ID).text = conf.FAIL_TEXT;
        });
});
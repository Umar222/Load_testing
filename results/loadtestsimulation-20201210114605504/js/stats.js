var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "368",
        "ok": "368",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "69",
        "ok": "69",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3814",
        "ok": "3814",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "183",
        "ok": "183",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "488",
        "ok": "488",
        "ko": "-"
    },
    "percentiles1": {
        "total": "75",
        "ok": "75",
        "ko": "-"
    },
    "percentiles2": {
        "total": "79",
        "ok": "79",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1005",
        "ok": "1005",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3263",
        "ok": "3263",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 347,
    "percentage": 94
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 9,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.558",
        "ok": "8.558",
        "ko": "-"
    }
},
contents: {
"req_-polygon-summar-96483": {
        type: "REQUEST",
        name: "/polygon/summaryZone",
path: "/polygon/summaryZone",
pathFormatted: "req_-polygon-summar-96483",
stats: {
    "name": "/polygon/summaryZone",
    "numberOfRequests": {
        "total": "368",
        "ok": "368",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "69",
        "ok": "69",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3814",
        "ok": "3814",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "183",
        "ok": "183",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "488",
        "ok": "488",
        "ko": "-"
    },
    "percentiles1": {
        "total": "75",
        "ok": "75",
        "ko": "-"
    },
    "percentiles2": {
        "total": "79",
        "ok": "79",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1005",
        "ok": "1005",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3263",
        "ok": "3263",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 347,
    "percentage": 94
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 9,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.558",
        "ok": "8.558",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}

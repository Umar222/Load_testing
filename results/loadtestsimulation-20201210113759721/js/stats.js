var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1175",
        "ok": "1175",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6858",
        "ok": "6858",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3569",
        "ok": "3569",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2405",
        "ok": "2405",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2674",
        "ok": "2674",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4766",
        "ok": "4766",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6440",
        "ok": "6440",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6774",
        "ok": "6774",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 33
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 67
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.25",
        "ok": "0.25",
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
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1175",
        "ok": "1175",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6858",
        "ok": "6858",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3569",
        "ok": "3569",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2405",
        "ok": "2405",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2674",
        "ok": "2674",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4766",
        "ok": "4766",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6440",
        "ok": "6440",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6774",
        "ok": "6774",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 33
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 67
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.25",
        "ok": "0.25",
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

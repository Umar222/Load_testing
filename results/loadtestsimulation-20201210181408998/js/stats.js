var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "985",
        "ok": "985",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "77",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "319",
        "ok": "319",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "96",
        "ok": "96",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "25",
        "ok": "25",
        "ko": "-"
    },
    "percentiles1": {
        "total": "90",
        "ok": "90",
        "ko": "-"
    },
    "percentiles2": {
        "total": "96",
        "ok": "96",
        "ko": "-"
    },
    "percentiles3": {
        "total": "149",
        "ok": "149",
        "ko": "-"
    },
    "percentiles4": {
        "total": "216",
        "ok": "216",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 985,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "22.907",
        "ok": "22.907",
        "ko": "-"
    }
},
contents: {
"req_----------------70f47": {
        type: "REQUEST",
        name: "Отправка кадастрового номера на сервер",
path: "Отправка кадастрового номера на сервер",
pathFormatted: "req_----------------70f47",
stats: {
    "name": "Отправка кадастрового номера на сервер",
    "numberOfRequests": {
        "total": "985",
        "ok": "985",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "77",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "319",
        "ok": "319",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "96",
        "ok": "96",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "25",
        "ok": "25",
        "ko": "-"
    },
    "percentiles1": {
        "total": "90",
        "ok": "90",
        "ko": "-"
    },
    "percentiles2": {
        "total": "96",
        "ok": "96",
        "ko": "-"
    },
    "percentiles3": {
        "total": "149",
        "ok": "149",
        "ko": "-"
    },
    "percentiles4": {
        "total": "216",
        "ok": "216",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 985,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "22.907",
        "ok": "22.907",
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

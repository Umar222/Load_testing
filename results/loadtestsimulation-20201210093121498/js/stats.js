var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6",
        "ok": "3",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "77",
        "ko": "19"
    },
    "maxResponseTime": {
        "total": "3028",
        "ok": "3028",
        "ko": "26"
    },
    "meanResponseTime": {
        "total": "760",
        "ok": "1497",
        "ko": "24"
    },
    "standardDeviation": {
        "total": "1127",
        "ok": "1207",
        "ko": "3"
    },
    "percentiles1": {
        "total": "52",
        "ok": "1385",
        "ko": "26"
    },
    "percentiles2": {
        "total": "1058",
        "ok": "2207",
        "ko": "26"
    },
    "percentiles3": {
        "total": "2617",
        "ok": "2864",
        "ko": "26"
    },
    "percentiles4": {
        "total": "2946",
        "ok": "2995",
        "ko": "26"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 17
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.4",
        "ok": "0.2",
        "ko": "0.2"
    }
},
contents: {
"req_----------------719a8": {
        type: "REQUEST",
        name: "Проверка кэширования данных при запросе одинаково кадастрового номер",
path: "Проверка кэширования данных при запросе одинаково кадастрового номер",
pathFormatted: "req_----------------719a8",
stats: {
    "name": "Проверка кэширования данных при запросе одинаково кадастрового номер",
    "numberOfRequests": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "77",
        "ok": "77",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3028",
        "ok": "3028",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1497",
        "ok": "1497",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1207",
        "ok": "1207",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1385",
        "ok": "1385",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2207",
        "ok": "2207",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2864",
        "ok": "2864",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2995",
        "ok": "2995",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 33
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
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
        "total": "0.2",
        "ok": "0.2",
        "ko": "-"
    }
}
    },"req_search-13348": {
        type: "REQUEST",
        name: "Search",
path: "Search",
pathFormatted: "req_search-13348",
stats: {
    "name": "Search",
    "numberOfRequests": {
        "total": "3",
        "ok": "0",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "19",
        "ok": "-",
        "ko": "19"
    },
    "maxResponseTime": {
        "total": "26",
        "ok": "-",
        "ko": "26"
    },
    "meanResponseTime": {
        "total": "24",
        "ok": "-",
        "ko": "24"
    },
    "standardDeviation": {
        "total": "3",
        "ok": "-",
        "ko": "3"
    },
    "percentiles1": {
        "total": "26",
        "ok": "-",
        "ko": "26"
    },
    "percentiles2": {
        "total": "26",
        "ok": "-",
        "ko": "26"
    },
    "percentiles3": {
        "total": "26",
        "ok": "-",
        "ko": "26"
    },
    "percentiles4": {
        "total": "26",
        "ok": "-",
        "ko": "26"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 3,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.2",
        "ok": "-",
        "ko": "0.2"
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
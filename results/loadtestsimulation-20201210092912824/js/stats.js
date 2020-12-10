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
        "total": "17",
        "ok": "80",
        "ko": "17"
    },
    "maxResponseTime": {
        "total": "3175",
        "ok": "3175",
        "ko": "24"
    },
    "meanResponseTime": {
        "total": "809",
        "ok": "1597",
        "ko": "22"
    },
    "standardDeviation": {
        "total": "1191",
        "ok": "1264",
        "ko": "3"
    },
    "percentiles1": {
        "total": "52",
        "ok": "1535",
        "ko": "24"
    },
    "percentiles2": {
        "total": "1171",
        "ok": "2355",
        "ko": "24"
    },
    "percentiles3": {
        "total": "2765",
        "ok": "3011",
        "ko": "24"
    },
    "percentiles4": {
        "total": "3093",
        "ok": "3142",
        "ko": "24"
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
        "total": "80",
        "ok": "80",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3175",
        "ok": "3175",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1597",
        "ok": "1597",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1264",
        "ok": "1264",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1535",
        "ok": "1535",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2355",
        "ok": "2355",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3011",
        "ok": "3011",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3142",
        "ok": "3142",
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
        "total": "17",
        "ok": "-",
        "ko": "17"
    },
    "maxResponseTime": {
        "total": "24",
        "ok": "-",
        "ko": "24"
    },
    "meanResponseTime": {
        "total": "22",
        "ok": "-",
        "ko": "22"
    },
    "standardDeviation": {
        "total": "3",
        "ok": "-",
        "ko": "3"
    },
    "percentiles1": {
        "total": "24",
        "ok": "-",
        "ko": "24"
    },
    "percentiles2": {
        "total": "24",
        "ok": "-",
        "ko": "24"
    },
    "percentiles3": {
        "total": "24",
        "ok": "-",
        "ko": "24"
    },
    "percentiles4": {
        "total": "24",
        "ok": "-",
        "ko": "24"
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

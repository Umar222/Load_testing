package test
import io.gatling.core.Predef._
import io.gatling.core.feeder.BatchableFeederBuilder
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

import scala.language.postfixOps


class LoadTestSimulation extends Simulation{

   var auth_api_token = "bWtzcm5nb2l1ZXdyZ2I5MzV1eTE5ODIzNWg0M2JmOThnc2Q4ZmJhc2Rmam5vd2lxZXJqMHc0ZTh0MzR0MzQ5YmZzZGloc2Zo"
    var token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJST0xFIjpbIlVTRVJfREVWRUxPUEVSIl0sInN1YiI6IjAwMC0wMDAtNjAwIDA3IiwiZXhwIjoxNjA3NjIzODUzLCJpYXQiOjE2MDc1Mzc0NTN9.W_7F_7ONcpASexKzDejpLZXCsIz0ZBk04szDu8INkoKF4-Udd4okSSGbhr45rOBr04NKOumVGDgjIL6owLIFZQ"



  val httpConf: HttpProtocolBuilder = http.baseUrl("https://gate.imbuilding.cct.cloud.technokratos.com")
    .headers(Map("auth-api-key"->auth_api_token,
                  "authorization"-> token))


  val check_map_cash: ScenarioBuilder = scenario("Запрос по кадастровому номеру")
    .exec(
      http("Проверка кэширования данных при запросе одинаково кадастрового номера")
        .get("/api/v1/getInfo/ZONE")
        .queryParam("cadastreNumber","16:35:070301:10")
    )
    .pause(3)


  val feeder: BatchableFeederBuilder[String]#F = csv("data3.csv").random
  val feeder2: BatchableFeederBuilder[String]#F = csv("data_home.csv").random

  val get_random_cadastreNumbers:ScenarioBuilder = scenario("при разных значениях кадастрового номера")
    .pause(9)
    .feed(feeder) // 3
    .exec(http("Отправка разных кадастровых номеров")
    .get("/api/v1/getInfo/ZONE?cadastreNumber=${cadastreNumber}")
    )

  val send_random_cadastreNumber: ScenarioBuilder = scenario("Отправка кадастрового номера на сервер")
    .pause(3)
    .feed(feeder)
    .exec(
      http("Отправка кадастрового номера на сервер")
        .post("/api/v1/polygon/summaryZone?zoneCadastreNumber=${cadastreNumber}")

    )

  val send_random_home_cadastreNumber: ScenarioBuilder = scenario("Отправка кадастрового номера дома на сервер")
    .pause(5)
    .feed(feeder2)
    .exec(
      http("Отправка кадастрового номера дома на сервер")
        .post("/api/v1/polygon/summaryZone?zoneCadastreNumber=${cadastreNumber}")

    )

  val simple_load_case: ChainBuilder =

    feed(feeder)
    exec(http("Стандартный запрос участка")
      .get("/api/v1/getInfo/ZONE?cadastreNumber=${cadastreNumber}")
    )
    feed(feeder2)
    exec(
      http("Стандартный запрос участка")
        .post("/api/v1/polygon/summaryZone?zoneCadastreNumber=${cadastreNumber}")
    )






  val scn: ScenarioBuilder = scenario("TestSimulation")
    .exec(
      simple_load_case
//      check_map_cash,
//      get_random_cadastreNumbers,
//      send_random_cadastreNumber,
//      send_random_home_cadastreNumber

    ).pause(4)

  setUp(
    scn.inject(
//      heavisideUsers(50) during (5),
      rampUsersPerSec(50) to 5 during 30 randomized,
      atOnceUsers(50),
//      nothingFor(5)
    )
  ).protocols(httpConf)

}

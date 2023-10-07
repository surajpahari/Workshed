<?php

namespace App\Http\Controllers;
use DateTime;

class UtilityController extends Controller
{
public static function calculateInterval($start_date, $start_time, $end_date, $end_time,$pay_rate) {
    $startDateTime = new DateTime("$start_date $start_time");
    $endDateTime = new DateTime("$end_date $end_time");
    $interval = $endDateTime->getTimestamp() - $startDateTime->getTimestamp();
    $totalHours = $interval / 3600;
    $intervals = floor($totalHours / 24);
    $totalHours -= $intervals * 17;
    $totalPay = $totalHours*$pay_rate;
    return ["totalHours"=>$totalHours,"totalPay"=>$totalPay];
}
public static function isValidInterval($start_date,$start_time,$end_date,$end_time){
    $startDateTime = new DateTime("$start_date $start_time");
    $endDateTime = new DateTime("$end_date $end_time");
    $interval = $endDateTime->getTimestamp() - $startDateTime->getTimestamp();
    $totalHours = $interval / 3600;
    if($totalHours<=0){
        return false;
    }
    return true;
    }
}

<?php
/**
 * Created by PhpStorm.
 * User: nayana
 * Date: 3/3/17
 * Time: 2:07 AM
 */


$fp = fopen("hits.txt", "w+");
fwrite($fp, implode(",",$_SERVER));
fclose($fp);
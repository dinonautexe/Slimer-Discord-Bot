module.exports = {
  name: "botinfo",
  code: `
$title[Slimer Bot Info]
$description[

$addField[Prefix;s.]

$addField[Ping;$ping ms]

$addField[CPU;$cpu]

$addField[Memory;$memorymb]

$addField[Server Count;$serverCount]

$addField[Developers;dinonaut#0001]

$addField[Uptime;$uptime]

$addField[Version/Update;$getVar[version] - $getVar[update]]

]`
}